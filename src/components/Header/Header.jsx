import {
	faBed,
	faCalendarDays,
	faCar,
	faMountainCity,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {format} from 'date-fns'
import React, {useContext, useState} from 'react'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import {SearchContext} from '../../context/SearchContext'
import styles from './Header.module.css'

function Header({type}) {
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])
	const [openDate, setOpenDate] = useState(false)
	const [openOptions, setOpenOptions] = useState(false)
	const [destination, setDestination] = useState('')
	const [options, setOptions] = useState({adult: 1, children: 0, room: 1})

	const navigate = useNavigate()
	const {user} = useContext(AuthContext)

	function handleOption(name, op) {
		setOptions(prev => {
			return {
				...prev,
				[name]: op === 'i' ? options[name] + 1 : options[name] - 1,
			}
		})
	}
	const {dispatch} = useContext(SearchContext)
	function handleSearch() {
		dispatch({type: 'NEW_SEARCH', payload: {destination, dates, options}})
		navigate('/hotels', {state: {destination, dates, options}})
	}

	return (
		<header className={styles.header}>
			<section
				className={
					type === 'list'
						? `${styles.headerContainer} ${styles.listMode}`
						: `${styles.headerContainer}`
				}>
				<section className={styles.headerList}>
					<div className={`${styles.headerListItem} ${styles.active}`}>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className={styles.headerListItem}>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className={styles.headerListItem}>
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className={styles.headerListItem}>
						<FontAwesomeIcon icon={faMountainCity} />
						<span>Attractions</span>
					</div>
					<div className={styles.headerListItem}>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxi</span>
					</div>
				</section>
				{type !== 'list' && (
					<>
						<h1 className={styles.headerTitle}>
							A lifetime of discounts? It's Genius.
						</h1>
						<p className={styles.headerDesc}>
							Get rewarderd for your travels - unlock instant savings of 10% or
							more with a free booking-app account
						</p>
						{!user && (
							<button className={styles.headerButton}>
								Sign in / Register
							</button>
						)}
						<section className={styles.headerSearch}>
							<div className={styles.headerSearchItem}>
								{' '}
								<FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
								<input
									type='text'
									placeholder='Where are you going?'
									className={styles.headerSearchInput}
									onChange={e => setDestination(e.target.value)}
								/>
							</div>
							<div className={styles.headerSearchItem}>
								{' '}
								<FontAwesomeIcon
									icon={faCalendarDays}
									className={styles.headerIcon}
								/>
								<span
									className={styles.headerSearchText}
									onClick={() => setOpenDate(!openDate)}>{`${format(
									dates[0].startDate,
									'dd/MM/yyyy'
								)} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>{' '}
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={item => setDates([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={dates}
										minDate={new Date()}
										className={styles.date}
									/>
								)}
							</div>
							<div className={styles.headerSearchItem}>
								{' '}
								<FontAwesomeIcon
									icon={faPerson}
									className={styles.headerIcon}
								/>
								<span
									className={styles.headerSearchText}
									onClick={() =>
										setOpenOptions(!openOptions)
									}>{`${options.adult} adult ??? ${options.children} children ??? ${options.room} room`}</span>{' '}
								{openOptions && (
									<section className={styles.options}>
										<div className={styles.optionItem}>
											<span className={styles.optionText}>Adult</span>
											<div className={styles.optionCounter}>
												<button
													className={styles.optionCounterButton}
													disabled={options.adult <= 1}
													onClick={() => handleOption('adult', 'd')}>
													-
												</button>
												<span className={styles.optionCounterNumber}>
													{options.adult}
												</span>
												<button
													className={styles.optionCounterButton}
													onClick={() => handleOption('adult', 'i')}>
													+
												</button>
											</div>
										</div>
										<div className={styles.optionItem}>
											<span className={styles.optionText}>Children</span>
											<div className={styles.optionCounter}>
												<button
													className={styles.optionCounterButton}
													disabled={options.children <= 0}
													onClick={() => handleOption('children', 'd')}>
													-
												</button>
												<span className={styles.optionCounterNumber}>
													{options.children}
												</span>
												<button
													className={styles.optionCounterButton}
													onClick={() => handleOption('children', 'i')}>
													+
												</button>
											</div>
										</div>
										<div className={styles.optionItem}>
											<span className={styles.optionText}>Room</span>
											<div className={styles.optionCounter}>
												<button
													className={styles.optionCounterButton}
													disabled={options.room <= 1}
													onClick={() => handleOption('room', 'd')}>
													-
												</button>
												<span className={styles.optionCounterNumber}>
													{options.room}
												</span>
												<button
													className={styles.optionCounterButton}
													onClick={() => handleOption('room', 'i')}>
													+
												</button>
											</div>
										</div>
									</section>
								)}
							</div>
							<div className={styles.headerSearchItem}>
								{' '}
								<button className={styles.headerButton} onClick={handleSearch}>
									Search
								</button>{' '}
							</div>
						</section>
					</>
				)}
			</section>
		</header>
	)
}

export default Header
