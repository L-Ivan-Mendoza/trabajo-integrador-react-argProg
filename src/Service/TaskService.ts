import {Task} from '../Types/Task'

const BASE_URL = "http://localhost:3000/tasks"

export const TaskService = {

    //////////  Devuelve todas las tareas de la bd ///////////
    getAllTasks: async (): Promise<Task[]>  => {
        const response = await fetch(`${BASE_URL}`)
        const data = await response.json()
        return data
    },

    ////////// Devuelve una tarea por su Id de la bd ////////////
    getOneTask: async (id: number): Promise<Task> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const data = await response.json()
        return data        
    },

    ////////// Devuelve las tareas por su categoría de la bd //////////
    getTasksInCategory:async (category:string): Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`)
        const data = await response.json()
        return data
    },

    /////////// Elimina una tarea pasando su Id de la bd ////////////
    deleteTask: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        })
    },

    /////////// Cambia el estado de una tarea buscada por Id en la bd ///////////////
    updateStateTask: async (id: number, newState: string): Promise<Task> => {
        return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estado: newState
            })
        })
        .then(res => res.json())
        .then(json => {
            return json
        })
        .catch(err => err)
    },

    //////////// Crea una nueva tarea en la bd /////////////////////
    createTask:async (task: Task): Promise<Task> => {
        const response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        const data = await response.json()
        return data
    }
}