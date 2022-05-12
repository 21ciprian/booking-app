import React from 'react'
import styles from './PropertyList.module.css'

function PropertyList() {
	return (
		<article className={styles.pList}>
			<div className={styles.pLisItem}>
				<img
					className={styles.pListImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/273083237.jpg?k=98715aae2473aab096102c18bfc973e2d7f46c01fbee5e1bd9d2e4c2ea2f6992&o=&hp=1'
					alt='hotels'
				/>
				<div className={styles.pListTitles}>
					<h1>Hotels</h1>
					<h2>233 hotels</h2>
				</div>
			</div>
			<div className={styles.pLisItem}>
				<img
					className={styles.pListImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/187133481.jpg?k=d7fd44f69a595679e1f9db9f6cc025c235ffafd24eda768ad41533fca5dcfe56&o=&hp=1'
					alt='apartments'
				/>
				<div className={styles.pListTitles}>
					<h1>Apartments</h1>
					<h2>233 apartments</h2>
				</div>
			</div>
			<div className={styles.pLisItem}>
				<img
					className={styles.pListImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188599573.jpg?k=edd853a097fa43a881415218cc64d2bcaade8e558fbeb530e1d35151dd4feb47&o=&hp=1'
					alt='resorts'
				/>
				<div className={styles.pListTitles}>
					<h1>Resorts</h1>
					<h2>233 resorts</h2>
				</div>
			</div>
			<div className={styles.pLisItem}>
				<img
					className={styles.pListImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/230028517.jpg?k=7256265288d0f6b3cf2eb5cb60a812a7a7948c86f192a8e564a8c0995b48369e&o=&hp=1'
					alt='villas'
				/>
				<div className={styles.pListTitles}>
					<h1>Villas</h1>
					<h2>233 villas</h2>
				</div>
			</div>
			<div className={styles.pLisItem}>
				<img
					className={styles.pListImg}
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/328190796.jpg?k=d00424a044b488efab531dd8f6dbbcb2ecf024ee3aade97b07e7795985590aea&o=&hp=1'
					alt='cabins'
				/>
				<div className={styles.pListTitles}>
					<h1>Cabins</h1>
					<h2>233 villas</h2>
				</div>
			</div>
		</article>
	)
}

export default PropertyList
