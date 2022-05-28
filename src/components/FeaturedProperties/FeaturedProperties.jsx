import React from 'react'
import useFetch from '../../hooks/useFEtch'
import styles from './FeaturedProperties.module.css'

function FeaturedProperties() {
	const baseUrl = process.env.REACT_APP_BASE_URL

	const {data, loading, error} = useFetch(`${baseUrl}/hotels/countByType`)

	return (
		<article className={styles.fprop}>
			<section className={styles.fpItem}>
				<img
					className={styles.fpImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/26829941.jpg?k=d148213bb2c599ee7365806c432ec7ffaa54a55ff1c1219e1e9afb01779269a4&o=&hp=1'
					alt='madrid'
				/>
				<span className={styles.fpName}>Madrid Rental Flats</span>
				<span className={styles.fpCity}>Madrid</span>
				<span className={styles.fpPrice}>£50</span>
				<div className={styles.fpRating}>
					<button>4.5</button>
					<span>Great</span>
				</div>
			</section>
			<section className={styles.fpItem}>
				<img
					className={styles.fpImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/183807379.jpg?k=da6c99a2a6c4620132fed17217aef48d0e1c9cbe482df3edc454d566fa197e3b&o=&hp=1'
					alt='madrid'
				/>
				<span className={styles.fpName}>Madrid Rental Flats</span>
				<span className={styles.fpCity}>Madrid</span>
				<span className={styles.fpPrice}>£50</span>
				<div className={styles.fpRating}>
					<button>4.5</button>
					<span>Great</span>
				</div>
			</section>
			<section className={styles.fpItem}>
				<img
					className={styles.fpImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13380634.jpg?k=7c7d515ae57a66fb2c2b928fc4c77453803aa97935c0a86c2e64bbfbf7c203b2&o=&hp=1'
					alt='madrid'
				/>
				<span className={styles.fpName}>Madrid Rental Flats</span>
				<span className={styles.fpCity}>Madrid</span>
				<span className={styles.fpPrice}>£50</span>
				<div className={styles.fpRating}>
					<button>4.5</button>
					<span>Great</span>
				</div>
			</section>
			<section className={styles.fpItem}>
				<img
					className={styles.fpImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/26830011.jpg?k=b657679d464f57d814f58bcbf85c5b2d4f643924dcd174f76b5db63cc41e64e0&o=&hp=1'
					alt='madrid'
				/>
				<span className={styles.fpName}>Madrid Rental Flats</span>
				<span className={styles.fpCity}>Madrid</span>
				<span className={styles.fpPrice}>£50</span>
				<div className={styles.fpRating}>
					<button>4.5</button>
					<span>Great</span>
				</div>
			</section>
		</article>
	)
}

export default FeaturedProperties
