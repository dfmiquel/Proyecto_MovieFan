
import { dataBase } from '../../Firebase/firebase'
import { CartContext } from '../../CartContext/CartContext'
import { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading/loading'

export const Checkout = () => {
const {cart, clear, totalDeItems,cartQuantity } = useContext(CartContext)
const db = dataBase
const [form, setForm] = useState(true)
const [loading, setLoading] = useState(false)
const [userData, setUserData] = useState(
 {
    nombre:"",
    phone:"",
    email:""
 }
)

useEffect(() => {
   const dataForm = [userData.nombre, userData.phone, userData.email].includes("")
   setForm(dataForm)    
},[userData])

const handleSend = (e) => e.preventDefault()
const handleChangeInput = (e) => setUserData({...userData, [e.target.nombre]: e.target.value})

const getOrder = () => {

    const itemsOrder = cart.map(({ item, quantity }) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: quantity,
    }))
  return {
      buyer: userData,
      items: itemsOrder,
      total: cartQuantity
    } 
}

const compraOk = buyer =>{
    const newOrder = getOrder(buyer)
    const orders = db.collection("orders")
    orders.add(newOrder).then(({id})=>{
        console.log("La orden ha sido procesada correctamente")
        orderOk(id)
    }).catch((error)=> {
        console.log("Hubo un error", error);
     }).finally(()=> {
         setLoading(false)
        clear()
     })
  }

  const orderOk =(id) =>{
      alert(`¡Gracias ${userData.nombre} por tu compra!. Tu pedido fue procesado con éxito: ${id}`)
  }


return(
    <Fragment>
       { loading 
         ? <Loading/>
         : ( cart.length > 0 
           ? (<section>
            <h1>DETALLE DE TU COMPRA:</h1>
              { cart.map( obj=>(<ul key={obj.item.id}>
               <li>Cantidad de productos:{cartQuantity}</li>
               <li>{obj.item.title}</li>
               <li>${obj.item.price}</li>
             </ul>)) }
           <span>Total ${totalDeItems}</span>
          <section>
              <h1>Datos del Comprador</h1>
              <form onSubmit={handleSend}>
                  <label>Nombre</label>
                    <input type="text" name="nombre" value={userData.nombre} placeholder="ingresar nombre" onChange={handleChangeInput}></input>
                 <label>Apellido</label>
                    <input type="text" name="apellido" value={userData.apellido} placeholder="ingresar apellido" onChange={handleChangeInput}></input>
                 <label>Numero de Telefono</label>
                    <input type="phone" name="phone" value={userData.phone} placeholder="ingresar numero de teléfono" onChange={handleChangeInput}></input>
                 <label>E-mail</label>
                    <input type="email" name="email" value={userData.email} placeholder="ingresar e-mail" onChange={handleChangeInput}></input>
              </form>
              {form ? <button>Finalizar compra</button> : <button onClick={()=> compraOk()}>Finalizar compra</button>}
          </section>
        </section>
        ) 
        : <Link extact to="/">Volver al home</Link> 
        )
       }
    </Fragment>
 )
}
