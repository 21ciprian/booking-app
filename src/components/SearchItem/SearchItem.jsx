import React from 'react'
import styles from './SearchItem.module.css'

function SearchItem() {
	return (
		<section className={styles.searchItem}>
			<img
				className={styles.siImg}
				src='https://q-xx.bstatic.com/xdata/images/xphoto/max500/144066451.jpg?k=0a275cc3ef77a24d68bb26c8c5c39aa662271779cace3b0fbe53da08b6507581&o='
				alt='Windsor Palace'
			/>
			<div className={styles.siDesc}>
				<h1 className={styles.siTitle}> Westmister Appartments</h1>
				<span className={styles.siDistance}>500m from center</span>
				<span className={styles.siTaxiOp}>Free airport taxi</span>
				<span className={styles.siSubtitle}>Breakfast included</span>
				<span className={styles.Features}>
					Duplex • 2 bathrooms • kingsize bed
				</span>
				<span className={styles.siCancelOp}>Free cancellation</span>
				<span className={styles.siCancelOpSubtitle}>
					You can cancel your rezervation within 24hours of arrival
				</span>
			</div>
			<div className={styles.siDetails}>
				<div className={styles.siRating}>
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className={styles.siDetailsTexts}>
					<span className={styles.siPrice}>£123</span>
					<span className={styles.siTaxOp}>Includes taxes and fees</span>
					<button className={styles.siCheckButton}>See Availability</button>
				</div>
			</div>
		</section>
	)
}

export default SearchItem
