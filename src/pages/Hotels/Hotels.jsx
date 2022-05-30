import {format} from 'date-fns'
import React, {useState} from 'react'
import {DateRange} from 'react-date-range'
import {useLocation} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SearchItem from '../../components/SearchItem/SearchItem'
import useFetch from '../../hooks/useFEtch'
import styles from './Hotels.module.css'

function Hotels() {
	const location = useLocation()
	const [date, setDate] = useState(location.state.date)
	const [destination, setDestination] = useState(location.state.destination)
	const [options, setOptions] = useState(location.state.options)
	const [openDate, setOpenDate] = useState(false)
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {data, loading, error} = useFetch(
		`${baseUrl}/hotels?city=${destination}`
	)
	console.log('data from hotels: :', data)

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
								date[0].startDate,
								'dd/MM/yyyy'
							)} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
							{openDate && (
								<DateRange
									minDate={new Date()}
									onChange={item => setDate([item.selection])}
									ranges={date}
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
									<input type='number' className={styles.hotelsOptionInput} />
								</div>
								<div className={styles.hotelsOptionItem}>
									<span className={styles.hotelsOptionText}>
										Max price <small>per night</small>
									</span>
									<input type='number' className={styles.hotelsOptionInput} />
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
						<button>Search</button>
					</div>
					<div className={styles.hotelsResult}>
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</section>
			</section>
		</section>
	)
}

export default Hotels
