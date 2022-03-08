import React, { DragEventHandler } from "react"

type KanbanOptions = {
    name: string
    items?: KanbanItem[]
}

export type KanbanItem = {
    id: number
    title?: string
    content: string
    url?: string
    status: string
}

export type NewKanbanTicketType = {
    showTodo: boolean
    showInProgress: boolean
    showDone: boolean
    showApproved: boolean
}

export interface DragEvent<T = Element> extends React.MouseEvent<T, DragEventHandler> {
    dataTransfer: DataTransfer;
}

// export interface KanbanBoardInterface {
//     todo: string
//     todoItems?: KanbanItem[]
//     inProgress: string
//     inProgressItems?: KanbanItem[]
//     done: string
//     doneItems?: KanbanItem[]
//     approved: string
//     approvedItems?: KanbanItem[]
// }

export interface KanbanInterface {
    todo: KanbanOptions
    inProgress: KanbanOptions
    done: KanbanOptions
    approved: KanbanOptions
}

export interface KanbanPaneInterface {
    [x: string]: {
        label: string
        name: string
        items: KanbanItem[]
    }
}


