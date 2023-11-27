import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Task } from "../../Types/Task"
import { TaskService } from "../../Service/TaskService"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import { Trash3 } from "react-bootstrap-icons"

const TaskDetail = () => {

  const {taskId} = useParams <{taskId?: string}> ()
  const [task, setTask] = useState<Task | null> (null)
  const [estado, setEstado] = useState<string> ('')
  const [relatedTasks, setRelatedTasks] = useState<Task[]> ([])

  const navigate = useNavigate()

  useEffect(() => {

  //////////  Se pide la tarea a la bd por Id y las de su categoria. !isNaN se utiliza para valuar si es un número /////////
  const fetchTask = async () => {
    try {
      if (taskId && !isNaN(parseInt(taskId, 10))){
        const taskData = await TaskService.getOneTask(parseInt(taskId, 10))
        setTask(taskData)

        const tasksInCategory = await TaskService.getTasksInCategory(taskData.estado)
        setRelatedTasks(tasksInCategory)
      } else {
        console.error('Identificador de tarea no valido')
      }
    } catch (error) {
      console.error('Error al cargar la tarea: ', error);
    }
  }

  fetchTask()
}, [taskId])
  
  ///////////  Función para cambiar el estado de la tarea //////////
  const handleUpdateState =async () => {
    if (estado !== '') {
      try {
        const updatedTask = await TaskService.updateStateTask(parseInt(taskId!, 10), estado)
        setTask(updatedTask)
        toast.success('Se actualizó correctamente el estado de la tarea', {
          position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
        })
      } catch (error) {
        toast.error('Ups! Hubo un error al actualizar el estado de la tarea', {
          position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
        })
        console.error('Error al actualizar el estado de la tarea', error)
      }
    } else {
      toast.error('Seleccione un estado válido', {
        position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
      })
      console.error('Seleccione un estado valido')
    }
  }

  /////////////// Función para eliminar tarea* //////////////
  const handleDeletedTask = async () => {
    try {
      if (taskId){
        await TaskService.deleteTask(parseInt(taskId, 10))
        toast.success('La tarea se eliminó con éxito', {
          position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
        })
        console.log('Tarea eliminada');
        navigate('/')
      }
    } catch (error) {
      toast.error('Ups! Hubo un error al eliminar la tarea', {
        position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
      })
      console.error("Error al eliminar tarea", error);
      
    }
  }

  return (
    <div className="container mt-5">
      {task && (
        <div className="col-12 col-md-6">
          <h1 className="display-5 fw-bolder"> Titulo: {task.titulo}</h1>
          <h3>Detalles de la tarea con el ID: {task.id}</h3>
          <h5>Estado actual: {task.estado}</h5>
          <p className="lead">Tiempo: {task.tiempo}</p>
          <p className="lead">Responsable: {task.responsable}</p>
          <p className="lead">Descripción: {task.descripcion}</p>

          <select className="form-select mb-3" onChange={(e) => setEstado(e.target.value)} value={estado}>
            <option value=""> Seleccionar estado </option>
            <option value="PORHACER"> Por Hacer </option>
            <option value="ENPRODUCCION"> En Producción </option>
            <option value="PORTESTEAR"> Por Testear </option>
            <option value="COMPLETADA"> Completada </option>
          </select>

          <button className="btn btn-danger" onClick={handleDeletedTask} title="Eliminar" > <Trash3/> </button>
          <button className="btn ms-2 text-light" title="Actualizar Estado" style={{backgroundColor: "#019CA1"}} onClick={handleUpdateState}> Actualizar Estado </button>

        </div>
      )}

        {/*//////////////  Tareas relacionadas por categoria a la tarea seleccionada por Id /////////////*/}
        <div className="row mt-5">
          {relatedTasks.map((relatedTasks) => (
            <div className="col-12 col-md-4 mb-4" key={relatedTasks.id}>
              <div className="card">
                <img src={relatedTasks.imagen} alt={relatedTasks.imagen} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{relatedTasks.titulo}</h5>
                  <p className="card-text">Tiempo: {relatedTasks.tiempo}</p>
                  <p className="card-text">Responsable: {relatedTasks.responsable}</p>

                  <Button style={{backgroundColor: "#019CA1"}} aria-label="Ingresar a la tarea"
                  title="Ver Tarea" onClick={() => navigate(`/detail/${relatedTasks.id}`)}>Ver Tarea</Button>

                </div>
              </div>
            </div>
          ))}
        </div>

    </div>
  )
}
export default TaskDetail