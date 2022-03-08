import React, { useState } from "react"
import { KanbanItem, KanbanPaneInterface } from "../../types/KanbanType"
import { DraggableKanbanCard } from "./Card"
import { DragDropContext, Draggable, DraggableLocation, Droppable, DropResult } from 'react-beautiful-dnd';
import { NewKanbanTicket } from "./NewTicket";

type KanbanPaneType = {
    // addTicket: () => void
    list: KanbanPaneInterface
}

type MoveItemsType = {
    destination: DraggableLocation
    source: DraggableLocation
    dataList: KanbanPaneInterface
}

export const KanbanDragDrop = ({ list }: KanbanPaneType) => {
    const [data, setData] = useState<KanbanPaneInterface>(list)
    const [showTicketForm, setShowTicketForm] = useState<boolean>(false)
    const [newTicket, setNewTicket] = useState<{ id: number, title?: string, content?: string, status: string, url?: string, error: string }>({
        id: data['todo'].items.length + 1,
        title: '',
        content: '',
        status: '',
        url: '',
        error: ''
    })
    const moveItems = ({ destination, source, dataList }: MoveItemsType) => {
        // move items to another list
        if (destination.droppableId !== source.droppableId) {
            const fromPane = dataList[source.droppableId]
            const toPane = dataList[destination.droppableId]
            const copiedToPaneItems = Array.from(toPane.items)
            const [removedItemFromCopiedPane] = fromPane.items.splice(source.index, 1)
            copiedToPaneItems.splice(destination.index, 0, removedItemFromCopiedPane)

            if (destination.droppableId === toPane.label) {
                setData({
                    ...dataList, [destination.droppableId]: {
                        ...toPane, items: copiedToPaneItems
                    }
                })
            }
            return
        }

        // move items within lists
        const pane = data[source.droppableId]
        const copiedItems = [...pane.items]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        const newPane = {
            ...pane,
            items: copiedItems
        }
        setData({
            ...data, [source.droppableId]: newPane
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setNewTicket({ ...newTicket, error: '' })
        setNewTicket({ ...newTicket, [event.currentTarget.name]: event.currentTarget.value })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!newTicket.content || !newTicket.title || !newTicket.status) {
            return setNewTicket({ ...newTicket, error: 'You cannot submit an empty ticket' })
        }

        if (newTicket.title.length >= 40) {
            return setNewTicket({ ...newTicket, error: 'Title cannot be longer than 40 characters' })
        }

        if (newTicket.content.length >= 140) {
            return setNewTicket({ ...newTicket, error: 'Content cannot be longer than 140 characters' })
        }
        setData({
            ...data, [newTicket.status]: {
                ...data[newTicket.status],
                items: [...data[newTicket.status].items, { id: newTicket.id + 1, title: newTicket.title, content: newTicket.content ?? '', url: `/${newTicket.title.replace(/\s/g, '')}`, status: newTicket.status }]
            }
        })
        setShowTicketForm(false)
    }

    const handleOnDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) {
            return
        }
        moveItems({ destination, source, dataList: data })
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-end mb-[70px]">
                <button onClick={() => setShowTicketForm(true)} className='p-3 rounded text-white bg-[#5000a1] hover:bg-[#430681]'>Add ticket</button>
            </div>
            <div className="w-full flex flex-col gap-y-[40px] sm:flex-row sm:flex-wrap lg:justify-between md:flex-row sm:gap-4 lg:flex-nowrap">
                <DragDropContext onDragEnd={(result) => {
                    handleOnDragEnd(result);
                }}>
                    {Object.entries(data).map(([index, item]) => {
                        return (
                            <div key={index} className="flex flex-col w-full sm:w-[48%] md:w-[31%] lg:w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className='kn-h3 text-xl mb-2 font-bold text-white'>{item.name}</h3>
                                    {/* <div onClick={() => setShowTicketForm(true)} title={`Add a new ${item.label} ticket`} className="add-icon cursor-pointer transform hover:-translate-y-[4px] flex items-center transition-all">
                                        {!showTicketForm && <AddCircleOutlineIcon className='w-[32px] h-[32px] text-gray-500 hover:text-gray-300' />}
                                    </div> */}
                                </div>
                                <Droppable droppableId={index}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                style={snapshot.isDraggingOver ? { backgroundColor: '#cfa0ff' } : {}}
                                                className="p-3 bg-black w-full flex flex-col gap-4 min-h-[250px]  overflow-y-auto max-h-[500px] kanban-items"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                key={item.label}
                                            >
                                                {item.items.map((item, index) => {
                                                    return (
                                                        <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                                                            {(provided) => (
                                                                <div onClick={() => {
                                                                    localStorage.setItem('kanban-item', JSON.stringify(item))
                                                                }}
                                                                    className="p-4 rounded item-list"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <DraggableKanbanCard
                                                                        id={item.id}
                                                                        title={item.title ?? ''}
                                                                        content={item.content}
                                                                        url={`/task${item.url}`}
                                                                        status={item.status}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        );
                    })}
                </DragDropContext>
                {showTicketForm &&
                    <NewKanbanTicket
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        error={newTicket.error}
                        closeTicketForm={() => {
                            setShowTicketForm(false);
                        }} />}

            </div>
        </div>
    )
}
