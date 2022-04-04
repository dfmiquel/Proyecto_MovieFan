import { Fragment } from 'react'
import { Item } from '../Item/Item'
import '../ItemList/ItemList.css'

export const ItemList = ({catalogoProductos}) =>{

    return(
        <Fragment>
       {
        catalogoProductos.map(item =>(<Item item={item} key={item.id}/>))
       }
        </Fragment>
    )
}
