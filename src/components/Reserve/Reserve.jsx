import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SearchContext} from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import styles from './Reserve.module.css'

function Reserve({setOpen, hotelId}) {
	const [selectedRooms, setSelectedRooms] = useState([])
	const navigate = useNavigate()
	const baseUrl = process.env.REACT_APP_BASE_URL
	const {dates} = useContext(SearchContext)
	const {data, loading, error} = useFetch(`${baseUrl}/hotels/room/${hotelId}`)
	function handleSelect(e) {
		const checked = e.target.checked
		const value = e.target.value
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter(item => item !== value)
		)
	}
	function getDatesInRange(startDate, endDate) {
		const start = new Date(startDate)
		const end = new Date(endDate)

		const date = new Date(start.getTime())

		let datesList = []

		while (date <= end) {
			datesList.push(new Date(date).getTime())
			date.setDate(date.getDate() + 1)
		}
		return datesList
	}
	function isAvailable(roomNumber) {
		const isFound = roomNumber.unavailableDates.some(date =>
			allDates.includes(new Date(date).getTime())
		)
		return !isFound
	}
	const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate)
	async function handleClick() {
		try {
			await Promise.all(
				selectedRooms.map(roomId => {
					const response = axios.put(
						`${baseUrl}/rooms/availability/${roomId}`,
						{dates: allDates}
					)
					return response.data
				})
			)
			setOpen(false)
			navigate('/')
		} catch (error) {}
	}
	return (
		<section className={styles.reserve}>
			<section className={styles.rContainer}>
				<FontAwesomeIcon
					icon={faCircleXmark}
					className={styles.rClose}
					onClick={() => setOpen(false)}
				/>
				<span>Select your rooms: </span>
				{data.map(item => (
					<section className={styles.rItem}>
						<section className={styles.rItemInfo}>
							<div className={styles.rTitle}>{item.title}</div>
							<div className={styles.rDesc}>{item.desc}</div>
							<div className={styles.rMax}>
								Max people: <strong>{item.maxPeople}</strong>
							</div>
							<div className={styles.rPrice}>??{item.price}</div>
						</section>
						<div className={styles.rSelectRooms}>
							{item.roomNumbers.map(room => (
								<section className={styles.room}>
									<label>{room.number}</label>
									<input
										type='checkbox'
										value={room._id}
										onChange={handleSelect}
										disabled={!isAvailable(room)}
									/>
								</section>
							))}
						</div>
					</section>
				))}
				<button className={styles.rButton} onClick={handleClick}>
					Reserve Now!
				</button>
			</section>
		</section>
	)
}

export default Reserve
