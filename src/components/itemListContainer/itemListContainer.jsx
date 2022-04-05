import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList } from '../../components/itemList/itemList.jsx'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/loading/loading'
import { dataBase } from '../../firebase/firebase'

export const ItemListContainer = (props) => {
	const { categoryId } = useParams()
	const [loading, setLoading] = useState(true)
	const [catalogoProductos, setCatalogoProductos] = useState([])

	useEffect(() => {
		const db = dataBase
		const itemCollection = db.collection('productos')
		let listaDeItems
		categoryId
			? (listaDeItems = itemCollection.where('category', '==', categoryId))
			: (listaDeItems = itemCollection)
		listaDeItems
			.get()
			.then((querySnapshot) => {
				setCatalogoProductos(
					querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				)
			})
			.catch((error) => {
				console.log('Hubo un error al cargar los productos', error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [categoryId])

	return (
		<section>
			<h1 className='title'>{props.greeting}</h1>
			<h2>{props.greeting2}</h2>
			{loading ? (
				<Loading />
			) : (
				<ItemList catalogoProductos={catalogoProductos} />
			)}
		</section>
	)
}
