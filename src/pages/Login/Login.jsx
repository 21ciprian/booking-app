import axios from 'axios'
import React, {useContext, useState} from 'react'
import {AuthContext} from '../../context/AuthContext'
import styles from './Login.module.css'

function Login() {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	})
	const {loading, error, dispatch, user} = useContext(AuthContext)
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
		} catch (error) {
			dispatch({type: 'LOGIN_FAIL', payload: error.response.data})
		}
	}
	console.log('credentials: ', credentials)
	console.log('user: ', user)
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
				<button className={styles.lButton} onClick={handleClick}>
					Login
				</button>
				{error && <span>{error.message}</span>}
			</section>
		</article>
	)
}

export default Login
