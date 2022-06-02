import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import styles from './Navbar.module.css'

function Navbar() {
	const {user} = useContext(AuthContext)

	return (
		<nav className={styles.navbar}>
			<section className={styles.navContainer}>
				<Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
					<span className={styles.logo}>Logo</span>
				</Link>
				{user ? (
					user.username
				) : (
					<div className={styles.navItems}>
						<button className={styles.navButton}>Register</button>
						<button className={styles.navButton}>Login</button>
					</div>
				)}
			</section>
		</nav>
	)
}

export default Navbar
