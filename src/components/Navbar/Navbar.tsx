import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { PlusSquare } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Task } from '../../Types/Task';
import { TaskService } from '../../Service/TaskService';
import { toast } from 'react-toastify';
import ModalAddTask from '../ModalAddTask/ModalAddTask';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  

  ////////////  Incorporacion del modal al Navbar On/Off ///////////
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  //////  Creación de la tarea con servicio de TaskService + toasts //////////
  const createTask =async (newTask: Task) => {
    try{
      const result = await TaskService.createTask(newTask)
      console.log('Nueva tarea agregada: ', result.id);
      navigate(`/detail/${result.id}`)

      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
    } catch (error) {
      toast.error('Error al crear la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,        
      })
      console.error('Error al crear la tarea', error);
      
    }         
  }

  //////// Funcion para subir ó ir a inicio ///// 

  const navTop = () => {

    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand style={{color: '#019CA1', cursor: 'pointer'}} onClick={() => navigate('/')}>Our tasKs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navTop} className='px-3'>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate('/')} href='#selector-categorys' >Tus Tareas</Nav.Link>
          </Nav>
          <Nav className="d-none d-md-flex ms-auto">
            <Button className='py-1' style={{background: '#019CA1'}} onClick={handleShowModal}><PlusSquare /> Agregar Tarea</Button>
        </Nav>

        {/*////// Contenedor para "+ Agregar Tarea" del menú hamburguesa /////*/}

        <div className="d-md-none">
            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link" onClick={handleShowModal}>+ Agregar Tarea</a>
                </li>
            </ul>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalAddTask showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />
    </>
  )
}

export default NavBar