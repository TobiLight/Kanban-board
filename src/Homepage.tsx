import { KanbanBoard } from "./components/Kanban/Board"
import { KanbanDragDrop } from "./components/Kanban/KanbanDragDrop"
import mockData from "./mock-data"

export const Homepage = (): JSX.Element => {
    console.log('rendered')
    return (
        <div className="kn-bg-site-theme min-h-screen p-4 w-full relative">
            {/* <h1 className='kn-h1 mt-6 text-center p-4 rounded bg-[#5000a1] w-[30%] mx0auto'>Kanban Board</h1> */}
            <KanbanBoard>
                <KanbanDragDrop
                    list={mockData}
                />
            </KanbanBoard>
        </div>
    )
}