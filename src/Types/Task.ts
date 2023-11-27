

////// Modelo de tarea de la bd ///////////
export interface Task {
    id?: number
    titulo: string
    descripcion: string
    tiempo: number
    imagen: string
    responsable: string
    estado: string
}