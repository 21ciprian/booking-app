import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import './App.css'

function App() {
	return (
		<Router>
			<div className='App'>
				<h1>App</h1>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
