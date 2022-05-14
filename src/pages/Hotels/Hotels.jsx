import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Hotels.module.css'

function Hotels() {
	return (
		<section>
			<Navbar />
			<Header type='hotels' />
			<section className={styles.hotelsContainer}>
				<section hotelsWrapper>
					<div className={styles.hotelsSearch}>
						<h1 className={styles.hotelsTitle}>Search</h1>
					</div>
					<div className={styles.hotelsResult}></div>
				</section>
			</section>
		</section>
	)
}

export default Hotels
