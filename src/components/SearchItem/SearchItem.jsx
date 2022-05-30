import React from 'react'
import {Link} from 'react-router-dom'
import styles from './SearchItem.module.css'

function SearchItem({item}) {
	return (
		<section className={styles.searchItem}>
			<img className={styles.siImg} src={item.photos[0]} alt='Windsor Palace' />
			<div className={styles.siDesc}>
				<h1 className={styles.siTitle}>{item.name}</h1>
				<span className={styles.siDistance}>{item.distance}m from center</span>
				<span className={styles.siTaxiOp}>Free airport taxi</span>
				<span className={styles.siSubtitle}>Breakfast included</span>
				<span className={styles.siFeatures}>{item.desc}</span>
				<span className={styles.siCancelOp}>Free cancellation</span>
				<span className={styles.siCancelOpSubtitle}>
					You can cancel your rezervation within 24hours of arrival
				</span>
			</div>
			<div className={styles.siDetails}>
				{item.rating && (
					<div className={styles.siRating}>
						<span>Excellent</span>
						<button>{item.rating}</button>
					</div>
				)}
				<div className={styles.siDetailsTexts}>
					<span className={styles.siPrice}>£{item.cheapestPrice}</span>
					<span className={styles.siTaxOp}>Includes taxes and fees</span>
					<Link to={`/hotels/${item._id}`}>
						<button className={styles.siCheckButton}>See Availability</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default SearchItem
