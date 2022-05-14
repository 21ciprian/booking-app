import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Hotels.module.css'

function Hotels() {
	const location = useLocation()
	console.log('location: ', location)
	return (
		<section>
			<Navbar />
			<Header type='hotels' />
			<section className={styles.hotelsContainer}>
				<section className={styles.hotelsWrapper}>
					<div className={styles.hotelsSearch}>
						<h1 className={styles.hotelsTitle}>Search</h1>
						<div className={styles.hotelsItem}>
							<label>Destination</label>
							<input type='text' />
						</div>
						<div className={styles.hotelsItem}>
							<label>Check-in date</label>
							<input type='text' />
						</div>
					</div>
					<div className={styles.hotelsResult}></div>
				</section>
			</section>
		</section>
	)
}

export default Hotels
