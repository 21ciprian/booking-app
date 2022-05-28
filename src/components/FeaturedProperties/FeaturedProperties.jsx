import React from 'react'
import useFetch from '../../hooks/useFEtch'
import styles from './FeaturedProperties.module.css'

function FeaturedProperties() {
	const baseUrl = process.env.REACT_APP_BASE_URL

	const {data, loading, error} = useFetch(
		`${baseUrl}/hotels?featured=true&limit=4`
	)

	return (
		<article className={styles.fprop}>
			{loading ? (
				<h3>Loading ...</h3>
			) : (
				<>
					{data.map(item => (
						<section className={styles.fpItem} key={item._id}>
							<img
								className={styles.fpImg}
								src={item.photos?.[0]}
								alt={item.name}
							/>
							<span className={styles.fpName}>{item.name}</span>
							<span className={styles.fpCity}>{item.city}</span>
							<span className={styles.fpPrice}>
								Starting from £{item.cheapestPrice}
							</span>
							{item.rating && (
								<div className={styles.fpRating}>
									<button>{item.rating}</button>
									<span>Great</span>
								</div>
							)}
						</section>
					))}
				</>
			)}
		</article>
	)
}

export default FeaturedProperties
