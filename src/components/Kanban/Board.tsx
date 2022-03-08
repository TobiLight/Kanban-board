type KanbanType = {
    children: React.ReactNode
}

export const KanbanBoard = ({ children }: KanbanType): JSX.Element => {

    return (
        <div className="kanban-board flex overflow-x-auto w-full px-6 pt-2 pb-10 my-10">
            <div className="flex flex-col gap-y-8 lg:gap-y-0 md:flex-row md:flex-wrap md:justify-between lg:justify-start lg:flex-nowrap lg:gap-8 w-full">
                {children}
            </div>
        </div>
    )
}