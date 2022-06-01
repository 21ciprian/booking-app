import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import styles from './Hotel.module.css'

function Hotel() {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [slideIdx, setSlideIdx] = useState(0)
	const [open, setOpen] = useState(false)
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {data, loading, error, reFetch} = useFetch(
		`${baseUrl}/hotels/find/${id}`
	)
	console.log('location : ', location)
	console.log('location  id: ', id)

	function handleOpen(i) {
		setSlideIdx(i)
		setOpen(true)
	}
	function handleMove(direction) {
		let newSlideIdx
		if (direction === 'left') {
			newSlideIdx = slideIdx === 0 ? 5 : slideIdx - 1
		} else {
			newSlideIdx = slideIdx === 5 ? 0 : slideIdx + 1
		}
		setSlideIdx(newSlideIdx)
	}
	return (
		<section>
			<Navbar />
			<Header type='list' />
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<section className={styles.hotelContainer}>
					{open && (
						<section className={styles.slider}>
							<FontAwesomeIcon
								onClick={() => setOpen(false)}
								icon={faCircleXmark}
								className={styles.close}
							/>
							<FontAwesomeIcon
								onClick={() => handleMove('left')}
								icon={faCircleArrowLeft}
								className={styles.arrow}
							/>
							<div className={styles.sliderWrapper}>
								<img
									src={data.photos?.[slideIdx]}
									alt='room'
									className={styles.sliderImg}
								/>
							</div>
							<FontAwesomeIcon
								onClick={() => handleMove('right')}
								icon={faCircleArrowRight}
								className={styles.arrow}
							/>
						</section>
					)}

					<section className={styles.hotelWrapper}>
						<button className={styles.bookNow}>Reserve or Book now!</button>
						<h1 className={styles.hotelTitle}>{data.name}</h1>
						<div className={styles.hotelAddress}>
							<FontAwesomeIcon icon={faLocationDot} />
							<span>{data.address}</span>
						</div>
						<span className={styles.hotelDistance}>
							Excellent location - {data.distance}m from center
						</span>
						<span className={styles.hotelPriceHighlight}>
							Book a stay over £{data.cheapestPrice} at this property and get
							free airport taxi
						</span>
						<div className={styles.hotelImages}>
							{data.photos?.map((photo, i) => (
								<div key={photo.src} className={styles.hotelImgWrapper}>
									<img
										onClick={() => handleOpen(i)}
										src={photo}
										alt='room'
										className={styles.hotelImg}
									/>
								</div>
							))}
						</div>
						<div className={styles.hotelDetails}>
							<div className={styles.hotelDetailsTexts}>
								<h1 className={styles.hotelTitle}>{data.title}</h1>
								<p className={styles.hotelDesc}>{data.desc}</p>
							</div>
							<div className={styles.hotelDetailsPrice}>
								<h1>Perfect for a 7-night stay!</h1>
								<span>
									Located in the heart of London, this property has an excellent
									location score of 9.8!
								</span>
								<h2>
									<strong>£700</strong> (7 nights)
								</h2>
								<button>Reserve or Book now!</button>
							</div>
						</div>
					</section>
					<MailList />
					<Footer />
				</section>
			)}
		</section>
	)
}

export default Hotel
