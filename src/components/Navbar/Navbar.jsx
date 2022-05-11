import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<section className={styles.navContainer}>
				<span className={styles.logo}>Logo</span>
				<div className={styles.navItems}>
					<button className={styles.navButton}>Register</button>
					<button className={styles.navButton}>Login</button>
				</div>
			</section>
		</nav>
	)
}

export default Navbar
