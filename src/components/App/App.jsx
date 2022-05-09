import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Hotel from '../../pages/Hotel/Hotel'
import Hotels from '../../pages/Hotels/Hotels'
import './App.css'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/hotels/:id' element={<Hotel />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
