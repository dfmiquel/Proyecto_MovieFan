import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './pages/ItemDetailContainer/itemDetailContainer'
import '../src/App.css'
import { CartProvider } from './CartContext/CartContext'
import { Cart } from './components/Cart/cart'
import { Checkout } from './components/Checkout/checkout'
import { NotFound } from './components/NotFound/notFound'

export const App = () => {
	const welcome = 'HELLO BABES!'
	const sayHello =
		'Te invitamos a que chusmees todo lo que tenemos para ofrecerte'

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
