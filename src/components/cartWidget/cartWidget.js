import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../cartWidget/cartWidget.css'
import { NavLink } from "react-router-dom"
import { CartContext } from '../../CartContext/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)

      return (
           <NavLink to="/cart"><FontAwesomeIcon className="iconStyle" icon={faShoppingCart}/>
               <span className={cartQuantity === 0 ? 'hidden' : 'text-white absolute'}>
                   ({cartQuantity})
               </span>
           </NavLink>
      

           
    )
}