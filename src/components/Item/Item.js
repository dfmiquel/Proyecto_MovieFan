import '../Item/Item.css'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return(
      <Link to={`/item/${item.id}`}>
         <section id={item.id} className="itemContainer">
              <img className="images" src={item.pictureUrl} alt="img"/>
              <span className="itemPrice">{item.title}</span>
            <p className="itemPrice">{item.precio}</p>
          </section>
       </Link>
    )
}