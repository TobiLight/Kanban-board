import { Route, Routes } from "react-router-dom"
import { KanbanTask } from "./components/Kanban/KanbanTask"
import { Homepage } from "./Homepage"

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/task/:taskId" element={<KanbanTask />} />
        </Routes>
    )
}