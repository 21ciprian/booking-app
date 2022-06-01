import {format} from 'date-fns'
import React, {useState} from 'react'
import {DateRange} from 'react-date-range'
import {useLocation} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SearchItem from '../../components/SearchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import styles from './Hotels.module.css'

function Hotels() {
	const location = useLocation()
	const [dates, setDates] = useState(location.state.dates)
	const [destination, setDestination] = useState(location.state.destination)
	const [options, setOptions] = useState(location.state.options)
	const [min, setMin] = useState(undefined)
	const [max, setMax] = useState(undefined)
	const [openDate, setOpenDate] = useState(false)
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {data, loading, error, reFetch} = useFetch(
		`${baseUrl}/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
	)
	console.log('data from hotels: :', data)
	const handleClick = () => {
		reFetch()
	}
	return (
		<section>
			<Navbar />
			<Header type='list' />
			<section className={styles.hotelsContainer}>
				<section className={styles.hotelsWrapper}>
					<div className={styles.hotelsSearch}>
						<h1 className={styles.hotelsTitle}>Search</h1>
						<div className={styles.hotelsItem}>
							<label>Destination</label>
							<input type='text' placeholder={destination} />
						</div>
						<div className={styles.hotelsItem}>
							<label>Check-in date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								dates[0].startDate,
								'dd/MM/yyyy'
							)} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
							{openDate && (
								<DateRange
									minDate={new Date()}
									onChange={item => setDates([item.selection])}
									ranges={dates}
									className={styles.date}
								/>
							)}
						</div>
						<div className={styles.hotelsItem}>
							<label>Options</label>
							<div className={styles.hotelsOptions}>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>
										Min price <small>per night</small>
									</span>
									<input
										type='number'
										onChange={e => setMin(e.target.value)}
										className={styles.hotelsOptionInput}
									/>
								</div>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>
										Max price <small>per night</small>
									</span>
									<input
										type='number'
										onChange={e => setMax(e.target.value)}
										className={styles.hotelsOptionInput}
									/>
								</div>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>Adult</span>
									<input
										min={1}
										type='number'
										className={styles.hotelsOptionInput}
										placeholder={options.adult}
									/>
								</div>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>Children</span>
									<input
										type='number'
										min={0}
										className={styles.hotelsOptionInput}
										placeholder={options.children}
									/>
								</div>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>Room</span>
									<input
										min={1}
										type='number'
										className={styles.hotelsOptionInput}
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button onClick={handleClick}>Search</button>
					</div>
					<div className={styles.hotelsResult}>
						{loading ? (
							<h3>Loading...</h3>
						) : (
							<>
								{data?.map(item => (
									<SearchItem item={item} key={item._id} />
								))}
							</>
						)}
					</div>
				</section>
			</section>
		</section>
	)
}

export default Hotels
