import React from 'react'
import useFetch from '../../hooks/useFetch'
import styles from './Featured.module.css'

function Featured() {
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {data, loading, error} = useFetch(
		`${baseUrl}/hotels/countByCity?cities=paris,madrid,london`
	)

	console.log('data: ', data)
	return (
		<section className={styles.featured}>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<>
					<div className={styles.featuredItem}>
						<img
							src='https://q-xx.bstatic.com/xdata/images/xphoto/max500/144066451.jpg?k=0a275cc3ef77a24d68bb26c8c5c39aa662271779cace3b0fbe53da08b6507581&o='
							alt='Windsor Palace'
							className={styles.featuredImg}
						/>
						<div className={styles.featuredTitles}>
							<h1>London</h1>
							<h1>{data[2]} properties</h1>
						</div>
					</div>
					<div className={styles.featuredItem}>
						<img
							src='https://r-xx.bstatic.com/xdata/images/xphoto/max500/144109948.jpg?k=e0193a542dd78e6d1e90dde3ed6edb98b9315d486b3de19308b0e6235122b38d&o='
							alt='Dubai'
							className={styles.featuredImg}
						/>
						<div className={styles.featuredTitles}>
							<h1>Dubai</h1>
							<h1>{data[1]} properties</h1>
						</div>
					</div>
					<div className={styles.featuredItem}>
						<img
							src='https://q-xx.bstatic.com/xdata/images/xphoto/max500/115962930.jpg?k=a0ce444e110a4be257f71de4d995ebccb80f9859cb474120a030fda007ff8b71&o='
							alt='Istanbul'
							className={styles.featuredImg}
						/>
						<div className={styles.featuredTitles}>
							<h1>Istanbul</h1>
							<h1>{data[0]} properties</h1>
						</div>
					</div>
				</>
			)}
		</section>
	)
}

export default Featured
