import React from 'react'
import styles from './MailList.module.css'

function MailList() {
	return (
		<section className={styles.mail}>
			<h1 className={styles.mailTitle}>Save time, save money!</h1>
			<span className={styles.mailDesc}>
				Sign up and we'll send the best deals to you
			</span>
			<div className={styles.mailInputContainer}>
				<input type='text' placeholder='Your Email' />
				<button>Subscribe</button>
			</div>
		</section>
	)
}

export default MailList
