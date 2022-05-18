import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Hotel.module.css'

function Hotel() {
	const [slideIdx, setSlideIdx] = useState(0)
	const [open, setOpen] = useState(false)
	const photos = [
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/62305922.jpg?k=c33694ab801f8841867fb75d537af4f637e909975db8631dd467a97b606457cc&o=&hp=1',
		},
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/31447331.jpg?k=9987dd41ce91be58bb17c3703989b74ca714ec6056765d9301bc7b4a2ec17d99&o=&hp=1',
		},
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/278874286.jpg?k=4f77dff1155cbd6fbdfb4069c9d47e50a4daed4d3c5929384210650469b03a1b&o=&hp=1',
		},
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/278245923.jpg?k=d3e34da9d7990f70a4f61590a5b0b82b176e4f2ebd518bc2e58d14a429ae02c7&o=&hp=1',
		},
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/278245411.jpg?k=1f5b3e31f4983b6077681240fe0a4a15fda77f69733d7d888c00bbb7ec87d4c5&o=&hp=1',
		},
		{
			src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/117387363.jpg?k=b6fd39f022248b6d1be0af3c91824b74c8e9ff095cee850073e08f254c933972&o=&hp=1',
		},
	]
	function handleOpen(i) {
		setSlideIdx(i)
		setOpen(true)
	}
	return (
		<section>
			<Navbar />
			<Header type='list' />
			<section className={styles.hotelContainer}>
				{open && (
					<section className={styles.slider}>
						<FontAwesomeIcon icon={faCircleXmark} />
						<FontAwesomeIcon icon={faCircleArrowLeft} />
						<div className={styles.sliderWrapper}>
							<img
								src={photos[slideIdx].src}
								alt='room'
								className={styles.sliderImg}
							/>
						</div>
						<FontAwesomeIcon icon={faCircleArrowRight} />
					</section>
				)}

				<section className={styles.hotelWrapper}>
					<button className={styles.bookNow}>Reserve or Book now!</button>
					<h1 className={styles.hotelTitle}>Grand Hotel</h1>
					<div className={styles.hotelAddress}>
						<FontAwesomeIcon icon={faLocationDot} />
						<span> Elton John New York</span>
					</div>
					<span className={styles.hotelDistance}>
						Excellent location - 500m from center
					</span>
					<span className={styles.hotelPriceHighlight}>
						Book a stay over £123 at this property and get free airport taxi
					</span>
					<div className={styles.hotelImages}>
						{photos.map((photo, i) => (
							<div key={photo.src} className={styles.hotelImgWrapper}>
								<img
									onClick={() => handleOpen(i)}
									src={photo.src}
									alt='room'
									className={styles.hotelImg}
								/>
							</div>
						))}
					</div>
					<div className={styles.hotelDetails}>
						<div className={styles.hotelDetailsTexts}>
							<h1 className={styles.hotelTitle}>Stay in the heart of London</h1>
							<p className={styles.hotelDesc}>
								An elegant 19th-century town house, The Bailey’s Hotel London
								Kensington is centrally located in Kensington. These luxurious
								rooms are only 30 yards from the Gloucester Road Tube Station.
								Kensington Gardens, Hyde Park, Royal Albert Hall and a series of
								museums including the Natural History Museum, the Science Museum
								and the Victoria and Albert Museum are all within a 10-minute
								walk. Stylishly restored in 2016, The Bailey’s Hotel London
								retains many of its original Victorian features, from the
								magnificent staircase to the stained-glass windows. Spacious and
								welcoming, the rooms offer flat-screen TVs and an individual
								private bathroom with free toiletries and slippers.
								Complimentary bottled water, coffee, tea and biscuits are
								provided in the rooms and replenished daily. After a busy day,
								unwind in the fitness room, or in Delicious and authentic Asian
								cuisine at Bugis Street Brasserie. The restaurant serves a taste
								of Singapore, China and Malaysia food. The property is
								conveniently located between the Kensington High Street,
								Knightsbridge and South Kensington shopping areas. The famous
								Harrods Department Store can be reached in a 15-minute walk or
								directly by tube. This is our guests' favourite part of London,
								according to independent reviews. Couples particularly like the
								location — they rated it 9.3 for a two-person trip.
							</p>
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
			</section>
			<MailList />
			<Footer />
		</section>
	)
}

export default Hotel
