import { useEffect, useState } from "react"
import Carrusel from "../components/Carousel/Carousel"
import CategorySelector from "../components/CategorySelector/CategorySelector"
import CategoryTask from "../components/CategoryTask/CategoryTask"
import { TaskService } from "../Service/TaskService"
import { Task } from "../Types/Task"


const LandingPage = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    /////////////// Se pide todas la tareas a la bd  ///////////////
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const allTasks = await TaskService.getAllTasks();
                setTasks(allTasks)
            } catch (error) {
                console.error('Error al traer las tareas: ', error);
            }
        };

        fetchTasks();
    }, []);

    ////////// Si hay una categoria seleccionada se filtra las tareas por esa categoria  ////////////
    useEffect (() => {
        if (selectedCategory){
            const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
            setFilteredTasks(filtered)
        } else {
            setFilteredTasks(tasks)
        }
    }, [selectedCategory, tasks])

  return (
        <>
            <Carrusel/>

            {/* Se le pasa la categoria seleccionada por el usuario */}
            <CategorySelector onSelectedCategory={setSelectedCategory} />
            
            {/* se muestra las tareas por categoria seleccionada, sino se muestran todas las tareas*/}
            <CategoryTask tasks={filteredTasks.length > 0 ? filteredTasks : tasks}/> 
        </>
    )
}

export default LandingPage