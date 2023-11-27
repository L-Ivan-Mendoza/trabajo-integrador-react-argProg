import { Task } from "../../Types/Task"
import { Link } from "react-router-dom"



const CategoryTask = ({tasks} : {tasks: Task[]}) => {
  const categorys = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA']
  const categoriasEsp = ["Por Hacer", "En Producción", "Por Testear", "Completada"] // Array para visualizar bien nombre de estado
  return (
    <section className="container-fluid mt-5" id="categorys">
      {categorys.map((category,index) =>
      <section className="text-center mb-5" key={index}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">

          {/* // Se recorre array con el filter y tambien se valida que no sea COMPLETADA // */}

          {tasks.filter(tasks => tasks.estado === category.toUpperCase() && tasks.estado !== "COMPLETADA")
          .map(task => (
            <div className="col" key={task.id}>
              <h6 className="p-2" style={{color: '#C0BBBA'}}>{categoriasEsp[index]}</h6>
              <img style={{minHeight: '300px', maxHeight: '300px',}} className="card-img-top" src={task.imagen} alt={task.titulo} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{task.titulo}</h5>
                  <span>{`Tiempo: ${task.tiempo}`}</span><br />
                  <span>{`Responsable: ${task.responsable}`}</span>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
              <div className="text-center d-flex gap-1 aling-items-center justify-content-center">
                <Link to={`/detail/${task.id}`} style={{backgroundColor: "#019CA1"}} className="btn mt-auto text-light"> Ver Tarea </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      )} 
      
      {/* // Validamos si es COMPLETADA para oscurecer img y tachar texto // */}

      {categorys.map((category,index) =>
      <section className="text-center mb-5" key={index}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">
          {tasks.filter(tasks => tasks.estado === category.toUpperCase() && tasks.estado === "COMPLETADA")
          .map(task => (
            <div className="col" key={task.id}>
              <h6 className="p-2" style={{color: '#C0BBBA'}}>{categoriasEsp[index]}</h6>
              <img style={{minHeight: '300px', maxHeight: '300px', filter: 'brightness(20%)'}} className="card-img-top" src={task.imagen} alt={task.titulo} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder text-decoration-line-through">{task.titulo}</h5>
                  <span className="text-decoration-line-through">{`Tiempo: ${task.tiempo}`}</span><br />
                  <span className="text-decoration-line-through">{`Responsable: ${task.responsable}`}</span>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
              <div className="text-center d-flex gap-1 aling-items-center justify-content-center">
                <Link to={`/detail/${task.id}`} className="btn btn-secondary mt-auto"> Ver más </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}
    </section>
        
    )
}

export default CategoryTask