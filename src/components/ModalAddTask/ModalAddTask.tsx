import {Modal, Button, Form} from 'react-bootstrap'
import { Task } from "../../Types/Task"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { PlusSquare } from 'react-bootstrap-icons'

/////// se define las props del modal /////
type ModalAddTaskProps = {
    showModal: boolean
    handleClose: () => void
    createTask: (newTask: Task) => void
}


const ModalAddTask: React.FC<ModalAddTaskProps> = ({showModal, handleClose, createTask}) => {

    ///// Utilizamos Yup para validar los imputs ////////
    const validationSchema = Yup.object({
        titulo: Yup.string().required('Este campo es obligatorio'),
        descripcion: Yup.string().required('Este campo es obligatorio'),
        tiempo: Yup.number().required('Este campo es obligatorio').integer('El tiempo debe ser en números').positive('El tiempo debe ser mayor a 0'),
        imagen: Yup.string().required('Este campo es obligatorio'),
        responsable: Yup.string().required('Este campo es obligatorio'),
        estado: Yup.string().required('Este campo es obligatorio'),
    })

    /////// Utilizamos Formik para la gestion de datos del formulario //////////
    const formik = useFormik({
        initialValues: {
            titulo: '',
            descripcion: '',
            tiempo: 0,
            imagen: '',
            responsable: '',
            estado: '',
        },

        validationSchema: validationSchema,

        onSubmit:async (values) => {
            values.estado.toUpperCase()
            console.log('Datos del formulario', JSON.stringify(values)); //// convierte los valores del form en tipo JSON

            await createTask(values)
            handleClose()
        },
    })

    /////// Creacion del modal ////////
    return (
        
        <Modal show={showModal} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Agregar Tarea</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {/* ///// Formulario //////////*/}
                <Form onSubmit={formik.handleSubmit} className='px-3'>

                <div className="mb-3 mt-1">
                        <label htmlFor='titulo' className='form-label'> Título </label>
                        <input type="text" className='form-control' id='titulo' name='titulo' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.titulo}/>

                        {formik.touched.titulo && formik.errors.titulo ? (
                            <div className="text-danger">{formik.errors.titulo}</div>
                        ): null}
                                        
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor='descripcion' className='form-label'> Descripción </label>
                        <textarea className='form-control' id='descripcion' name='descripcion' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion}
                        rows={3}
                        cols={50}/>

                        {formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="text-danger">{formik.errors.descripcion}</div>
                        ): null}
                                        
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor='tiempo' className='form-label'> Tiempo </label>
                        <input type="number" className='form-control' id='tiempo' name='tiempo' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tiempo}/>

                        {formik.touched.tiempo && formik.errors.tiempo ? (
                            <div className="text-danger">{formik.errors.tiempo}</div>
                        ): null}
                                        
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor='imagen' className='form-label'> Imágen </label>
                        <input type="text" className='form-control' id='imagen' name='imagen' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imagen} placeholder='url-de-imagen.com'/>

                        {formik.touched.imagen && formik.errors.imagen ? (
                            <div className="text-danger">{formik.errors.imagen}</div>
                        ): null}
                                        
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor='responsable' className='form-label'> Responsable </label>
                        <input type="text" className='form-control' id='responsable' name='responsable' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.responsable} placeholder='Ej: Cosme Fulanito'/>

                        {formik.touched.responsable && formik.errors.responsable ? (
                            <div className="text-danger">{formik.errors.responsable}</div>
                        ): null}
                                        
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor='estado' className='form-label'> Estado </label>

                        <Form.Select id='estado' name='estado' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.estado}>

                        <option value="">Seleccione un esatdo</option>
                        <option value="PORHACER">Por Hacer</option>
                        <option value="ENPRODUCCION">En Produccion</option>
                        <option value="PORTESTEAR">Por Testear</option>
                        <option value="COMPLETADA">Completada</option>
                        </Form.Select>

                        {formik.touched.estado && formik.errors.estado ? (
                            <div className="text-danger">{formik.errors.estado}</div>
                        ): null}
                                        
                    </div>
                    <div className="text-end">
                        <Button className='px-5' variant='success' type='submit' > <PlusSquare/> Agregar </Button>
                    </div>

                </Form>

            </Modal.Body>

        </Modal>
    )

}

export default ModalAddTask