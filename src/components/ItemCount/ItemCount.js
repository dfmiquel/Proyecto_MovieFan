
import '../ItemCount/ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [addItems, setAddItem] = useState(initial)
  const [newStock, setStock] = useState(stock)
  


  const eliminarItem = () => {
    if (addItems > 0) {
        setAddItem(addItems - 1)
        setStock(newStock + 1 )
    }
}

  const agregarItem = () => {
      if (addItems < stock ){
          setAddItem(addItems + 1)
          setStock(newStock - 1)
    }
}


//Con un ternario se pregunta si QuitarItemCount es true mostrame el section sino no me muestres nada
    return (
        <section className="itemCount">
           <section>
             <button onClick={eliminarItem}>-</button>
              <span>{addItems}</span>
               <button onClick={agregarItem}>+</button>
               <br></br>
             </section>                                                                            
                <button onClick={()=>onAdd(addItems)}>Agregar al Carrito</button>
                <p>Agregaste {addItems} items al carrito</p>      
        </section>
    )
}
