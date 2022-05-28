import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<section className={styles.navContainer}>
				<Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
					<span className={styles.logo}>Logo</span>
				</Link>
				<div className={styles.navItems}>
					<button className={styles.navButton}>Register</button>
					<button className={styles.navButton}>Login</button>
				</div>
			</section>
		</nav>
	)
}

export default Navbar
