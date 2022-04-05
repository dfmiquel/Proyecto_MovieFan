import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import '../src/app.css'
import { CartProvider } from './cartContext/cartContext'
import { Cart } from './components/cart/cart'
import { Checkout } from './components/checkout/checkout'
import { NotFound } from './components/notFound/notFound'

export const App = () => {
	const welcome = 'Hola MovieManiacos!!!!!!!'
	const sayHello =
		'Te invitamos a encontrar eso que mas te gusta en nuestra tienda de Peliculas'

	return (
		<CartProvider>
			<Router>
				<main className='App'>
					<NavBar />
					<Switch>
						<Route exact path='/'>
							<ItemListContainer greeting={welcome} greeting2={sayHello} />
						</Route>
						<Route exact path='/category/:categoryId'>
							<ItemListContainer />
						</Route>
						<Route exact path='/item/:id'>
							<ItemDetailContainer />
						</Route>
						<Route exact path='/cart'>
							<Cart />
						</Route>
						<Route exact path='/checkout'>
							<Checkout />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</main>
			</Router>
		</CartProvider>
	)
}

export default App
