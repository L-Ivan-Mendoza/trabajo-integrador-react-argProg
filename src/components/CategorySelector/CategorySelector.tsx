import React from "react"
import {BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare} from 'react-icons/bs'

interface CategorySelectorProps {
  onSelectedCategory: (category: string) => void
}
////// Le pasamos como props nombre e icono  /////
const CategorySelector: React.FC<CategorySelectorProps> = ({onSelectedCategory}) => {
  const categorys = [
    {nombre: 'PORHACER', icono: <BsCheck/>},
    {nombre: 'ENPRODUCCION', icono: <BsGear/>},
    {nombre: 'PORTESTEAR', icono: <BsPencilSquare/>},
    {nombre: 'COMPLETADA', icono: <BsBookmarkCheck/>},
  ]
  const categoriasEsp = ["Por Hacer", "En Producción", "Por Testear", "Completada"] // Array para visualizar bien nombre de estado
  return (
      <section className='container mt-3' id='selector-categorys'>
        <h4 className='fs-3 text-center p-4'>¡Ahora tus tareas estan mejor ordenadas!</h4>
        <p className='fs-5 text-center p-4'>-- Seleccione una categoría --</p>
        <div className="row gap-4">
          {categorys.map((category,index) => (
            <div className="col d-flex justify-content-center p-0" key={index}>
              <button onClick={() => onSelectedCategory(category.nombre)}
              className='d-flex text-light border-secondary gap-1 align-items-center rounded py-1 px-3'
              style={{cursor: 'pointer', background: '#019CA1'}}>
                {category.icono}{categoriasEsp[index]}
              </button>
            </div>
          ))
          }
        </div>
      </section>
    )
}

export default CategorySelector