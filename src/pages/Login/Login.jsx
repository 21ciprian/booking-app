import axios from 'axios'
import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import styles from './Login.module.css'

function Login() {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	})
	const {loading, error, dispatch} = useContext(AuthContext)

	const navigate = useNavigate()
	const baseUrl = process.env.REACT_APP_BASE_URL

	function handleChange(e) {
		setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
	}
	async function handleClick(e) {
		e.preventDefault()
		dispatch({type: 'LOGIN_START'})

		try {
			const response = await axios.post(`${baseUrl}/auth/login`, credentials)
			dispatch({type: 'LOGIN_SUCCESS', payload: response.data})
			navigate('/')
		} catch (error) {
			dispatch({type: 'LOGIN_FAIL', payload: error.response.data})
		}
	}

	return (
		<article className={styles.login}>
			<section className={styles.lContainer}>
				<input
					type='text'
					placeholder='username'
					id='username'
					onChange={handleChange}
					className={styles.lInput}
				/>
				<input
					type='password'
					placeholder='password'
					id='password'
					onChange={handleChange}
					className={styles.lInput}
				/>
				<button
					disabled={loading}
					className={styles.lButton}
					onClick={handleClick}>
					Login
				</button>
				{error && <span>{error.message}</span>}
			</section>
		</article>
	)
}

export default Login
