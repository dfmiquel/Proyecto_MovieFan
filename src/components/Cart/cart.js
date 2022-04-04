import { CartContext } from "../../CartContext/CartContext" 
import { useContext } from "react"
import { Link } from "react-router-dom"



export const Cart =() => {
     const { cart, removeItem, clear } = useContext(CartContext)
     let carrito = false
      if(cart.length > 0) {
         carrito = true
      }

 
    return(
        <section>
            <h1>Mi Carrito</h1>
            { carrito && cart.map(obj =>
            <div key={obj.item.id}>
              <ul>
                  <li>Detalle del Producto: {obj.item.descripcion}</li>
                  <li>Categoría: {obj.item.category}</li>
                  <li>Precio por unidad: {(obj.item.precio)}</li>
                  <li>Cantidad {(obj.quantity)}</li>
                  <li> Total $ {(obj.quantity)*(obj.item.precio)}</li>
                  <li><button onClick={()=>{removeItem(obj.item.id)}}>Eliminar el item</button></li>
               </ul>
            </div>
        )}
           <div>
              <button onClick={()=>{clear()}}>ELIMINAR TODO</button>
           </div>
       { (cart.length > 0)
           ? (<Link to={'/checkout'}>FINALIZAR COMPRA</Link>)
            : (<div>
                <p>¡Todavía no has agregado items al carrito!</p>
                <Link exact to={'/'}>Continuar Compando</Link> 
               </div> 
               )
       } 
        </section>

    )
}