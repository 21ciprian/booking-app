import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Reserve.module.css'

function Reserve({setOpen, hotelId}) {
	return (
		<section className={styles.reserve}>
			<section className={styles.rContainer}>
				<FontAwesomeIcon
					icon={faCircleXmark}
					className={styles.rClose}
					onClick={() => setOpen(false)}
				/>
			</section>
		</section>
	)
}

export default Reserve
