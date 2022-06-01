import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { AuthCOntextProvider } from './context/AuthContext'
import { SearchCOntextProvider } from './context/SearchContext'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthCOntextProvider>
			<SearchCOntextProvider>
				<App />
			</SearchCOntextProvider>
		</AuthCOntextProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
