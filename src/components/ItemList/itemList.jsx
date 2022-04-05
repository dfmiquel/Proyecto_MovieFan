import { Fragment } from 'react'
import { Item } from '../item/item.jsx'
import './itemList.css'

export const ItemList = ({catalogoProductos}) =>{

    return(
        <Fragment>
       {
        catalogoProductos.map(item =>(<Item item={item} key={item.id}/>))
       }
        </Fragment>
    )
}
