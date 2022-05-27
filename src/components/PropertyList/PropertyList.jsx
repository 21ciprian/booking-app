import React from 'react'
import useFetch from '../../hooks/useFEtch'
import styles from './PropertyList.module.css'

function PropertyList() {
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {data, loading, error} = useFetch(`${baseUrl}/hotels/countByType`)
	console.log('data in propertylist: ', data)
	const images = [
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/273083237.jpg?k=98715aae2473aab096102c18bfc973e2d7f46c01fbee5e1bd9d2e4c2ea2f6992&o=&hp=1',
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/187133481.jpg?k=d7fd44f69a595679e1f9db9f6cc025c235ffafd24eda768ad41533fca5dcfe56&o=&hp=1',
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188599573.jpg?k=edd853a097fa43a881415218cc64d2bcaade8e558fbeb530e1d35151dd4feb47&o=&hp=1',
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/230028517.jpg?k=7256265288d0f6b3cf2eb5cb60a812a7a7948c86f192a8e564a8c0995b48369e&o=&hp=1',
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/328190796.jpg?k=d00424a044b488efab531dd8f6dbbcb2ecf024ee3aade97b07e7795985590aea&o=&hp=1',
	]
	return (
		<article className={styles.pList}>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<>
					{data &&
						images.map((image, i) => (
							<>
								<div className={styles.pLisItem} key={image}>
									<img className={styles.pListImg} src={image} alt='hotels' />
									<div className={styles.pListTitles}>
										<h1>{data[i]?.type}</h1>
										<h2>
											{data[i]?.count} {data[i]?.type}
										</h2>
									</div>
								</div>
							</>
						))}
				</>
			)}
		</article>
	)
}

export default PropertyList
