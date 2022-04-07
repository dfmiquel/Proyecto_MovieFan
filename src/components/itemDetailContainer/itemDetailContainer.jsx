import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../itemDetail/itemDetail'
import { Loading } from '../loading/loading'
import { dataBase } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
	const { id } = useParams()
	const [item, setItem] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const db = dataBase
		const itemCollection = db.collection('items')
		const product = itemCollection.doc(id)
		console.log("Productos", product)
		product
			.get()
			.then((doc) => {
				if (!doc.exists) {
					console.log('¡El producto no existe!')
					return
				}
				setItem({ ...doc.data(), id: doc.id })
			})
			.catch((error) => {
				console.log('Error al buscar los productos', error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [id])

	return (
		<Fragment>
			{loading ? <Loading /> : <ItemDetail item={item} key={item.id} />}
		</Fragment>
	)
}
