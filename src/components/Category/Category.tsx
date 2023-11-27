import { useEffect, useState } from "react"
import { Task } from "../../Types/Task"
import CategorySelector from "../CategorySelector/CategorySelector"
import CategoryTask from "../CategoryTask/CategoryTask"
import { TaskService } from "../../Service/TaskService"

 

const Category = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  

  /////// Pedimos todas las tareas al servidor //////
  useEffect(() => {
    const fetchTasks =async () => {
      const tasksData = await TaskService.getAllTasks()
      setTasks(tasksData)
    }

    fetchTasks();
  }, [])

  /////// filtramos las tareas por categoria, si no hay se devuelve la lista de tareas ///////////
  const filteredTasks = selectedCategory
  ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase()) : tasks
  
  return (
    <div className="container mt-5">
      <CategorySelector onSelectedCategory={setSelectedCategory}/>
      <CategoryTask tasks={filteredTasks}/>
    </div>
  )
}

export default Category