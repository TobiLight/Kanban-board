import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { KanbanItem } from "../../types/KanbanType"
import { CloseIcon } from "../icons/close"

export const KanbanTask = (): JSX.Element => {
    const [kanbanItem, setKanbanItem] = useState<KanbanItem>()
    const item = JSON.parse(JSON.stringify(localStorage.getItem('kanban-item')))

    useEffect(() => {
        if (localStorage.getItem('kanban-item')) {
            setKanbanItem(JSON.parse(item))
        }
    }, [])
    console.log(kanbanItem);
    return (
        <div className="kn-bg-site-theme min-h-screen flex flex-col justify-center">
            <div className="w-11/12 mx-auto sm:w-[50%] bg-white h-[300px] rounded p-4 relative">
                <div className="flex justify-between items-center">
                    <p className="rounded-md text-gray-200 bg-zinc-600 px-2">{kanbanItem?.status}</p>
                    <Link to="/">
                        <CloseIcon className="w-8 h-8 cursor-pointer bg-white" />
                    </Link>
                </div>
                <div className="mt-8">
                    <h1 className="font-semibold text-2xl">{kanbanItem?.title}</h1>
                    <p className="text-xl mt-8">{kanbanItem?.content}</p>
                </div>
            </div>
        </div>
    )
}