import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import TaskDetailPage from "../pages/TaskDetailPage"

const AppRouters = () => {
  return (
        <Routes>
            
            {/* home */}
            <Route path="/" element={<LandingPage/>} />

            {/* ruta de tarea basado en su Id */}
            <Route path="/detail/:taskId" element={<TaskDetailPage/>} />
        </Routes>
    )
}

export default AppRouters