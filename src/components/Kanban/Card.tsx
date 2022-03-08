import { Link } from "react-router-dom"

type DraggableKanbanCardType = {
    id: number
    title: string
    content: string
    url?: string
    status: string
    // deleteTask: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const DraggableKanbanCard = ({ id, title, content, url, status }: DraggableKanbanCardType): JSX.Element => {
    return (
        <div id={`${id}`} style={{ backgroundColor: '#5000a1' }}>
            {/* <div className="movable-handle h-[40px] bg-[#00000030] cursor-move flex items-center justify-end rounded-tr">
                <div className="bg-[#201e209e] p-1 h-full flex items-center rounded-tr">
                    <MoveOutlineIcon className='w-[50px] h-[20px] text-gray-300' />
                </div>
            </div> */}
            <div className="p-3">
                <div className="flex justify-between items-center border-b border-[#272627] pb-1">
                    <h4 className='font-semibold text-lg text-gray-200'>{title.length >= 20 ? title.slice(0, 17).concat('...') : title}</h4>
                </div>
                <div className="flex flex-col gap-2 text-gray-400 pt-2">
                    <p>{content.length >= 70 ? content.slice(0, 120).concat('...') : content}</p>
                </div>
            </div>
            <div className="flex justify-end items-center p-3">
                {url &&
                    <Link to={url} className="text-xs underline decoration-wavy text-gray-200">view ticket</Link>}
                <div className="flex items-center gap-3">

                    {/* <div className="cursor-pointer bg-[#00000066] hover:bg-[#201e20] transition-all transform hover:-translate-y-[6px] hover:-translate-x-[5px] px-2 py-1 rounded">
                        <EditIcon className='w-6 h-6 text-gray-500' />
                    </div>
                    <div onClick={deleteTask} className="cursor-pointer bg-[#00000066] hover:bg-[#201e20] transition-all transform hover:-translate-y-[6px] hover:translate-x-[5px] px-2 py-1 rounded">
                        <TrashIcon className='w-6 h-6 text-gray-500' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}