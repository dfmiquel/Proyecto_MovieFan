import { createContext, useState, useEffect } from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity]= useState(0)
    const [ totalDeItems, setTotalDeItems ] = useState(0)
  
 const addItem = (item, quantity) =>{
        if(cart.length > 0) {
          if(isInCart(item.id)){
            // Con findIndex se recorre el array hace la comparacion y si alguna de las posiciones del array coincide, es decir es true en la comparación, me devuelve el index 
            let position = cart.findIndex(obj => obj.item.id === item.id)
            let newCart = cart
            newCart[position].quantity += quantity
            //se actualiza la cantidad de ese item en específico
            setCart(newCart)
            setCartQuantity(cartQuantity + quantity)
          } else { setCart([...cart, {item, quantity}])}
          } else { setCart([{item, quantity}])
        }
 }

  //El filter crea un nuevo array con los items que sean distintos a itemR
    const removeItem = (itemR) =>{
     setCart(cart.filter(obj =>obj.item.id !== itemR))
    }

   // Se limpia el carrito al cambiar su estado
    const clear = ()=> {
       setCart([])
       setCartQuantity(0)
    }


// Con el método some se recorre el carro por cada item.id y devuelve verdadero o falso, es decir si está en el carrito no me lo dupliques solo sumame la cantidad
    const isInCart = (id) =>{
      cart.some((obj) => obj.item.id === id)
    }

//Actualiza el contador que muestra el icono del carrito en el margen superior derecha
 
    const actualizarEstadoCarrito=(cart)=> {
      let total = 0
      if(cart.length > 0) {
        cart.forEach((item) => total += item.quantity)
        }
        setCartQuantity(total)
      }

      //suma el total con useEffect

      useEffect(()=>{
       const totalItems = cart.map(({item, quantity})=>item.precio * quantity).reduce(
          (cartTotal, sumaItemsTotal)=> cartTotal + sumaItemsTotal, 0
      )
      setTotalDeItems(totalItems)
      actualizarEstadoCarrito(cart);
  },[cart])
 

return(
 <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartQuantity ,totalDeItems}}>{children}</CartContext.Provider>
)

}
