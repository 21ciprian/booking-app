import styles from 'Hotel.module.css'
import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function Hotel() {
	return (
		<section className={styles.hotel}>
			<Navbar />
			<Header type='list' />
		</section>
	)
}

export default Hotel
