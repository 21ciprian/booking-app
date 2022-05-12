import React from 'react'
import styles from './Footer.module.css'

function Footer() {
	return (
		<footer className={styles.footer}>
			<section className={styles.footerLists}>
				<ul className={styles.footerList}>
					<li className={styles.fListItem}>Countries</li>
					<li className={styles.fListItem}>Regions</li>
					<li className={styles.fListItem}>Cities</li>
					<li className={styles.fListItem}>Districts</li>
					<li className={styles.fListItem}>Airports</li>
					<li className={styles.fListItem}>Hotels</li>
					<li className={styles.fListItem}>Places of interest</li>
				</ul>
				<ul className={styles.footerList}>
					<li className={styles.fListItem}>Homes</li>
					<li className={styles.fListItem}>Apartments</li>
					<li className={styles.fListItem}>Resorts</li>
					<li className={styles.fListItem}>Villas</li>
					<li className={styles.fListItem}>Hostels</li>
					<li className={styles.fListItem}>B&Bs</li>
					<li className={styles.fListItem}>B&Guest houses</li>
				</ul>
				<ul className={styles.footerList}>
					<li className={styles.fListItem}>Unique places to stay</li>
					<li className={styles.fListItem}>Reviews</li>
					<li className={styles.fListItem}>Unpacked: Travel articles</li>
					<li className={styles.fListItem}>DisTravel Communitiestricts</li>
					<li className={styles.fListItem}>Seasonal and holiday deals</li>
				</ul>
				<ul className={styles.footerList}>
					<li className={styles.fListItem}>Car hire</li>
					<li className={styles.fListItem}>Flight finder</li>
					<li className={styles.fListItem}>Restaurant reservations</li>
					<li className={styles.fListItem}>Booking.com for Travel Agents</li>
				</ul>
				<ul className={styles.footerList}>
					<li className={styles.fListItem}>Coronavirus (COVID-19) FAQs</li>
					<li className={styles.fListItem}>About Booking.com</li>
					<li className={styles.fListItem}>Customer Service help</li>
					<li className={styles.fListItem}>Partner help</li>
					<li className={styles.fListItem}>Careers</li>
					<li className={styles.fListItem}>Sustainability</li>
					<li className={styles.fListItem}>Press centre</li>
					<li className={styles.fListItem}>Safety resource centre</li>
					<li className={styles.fListItem}>Investor relations</li>
					<li className={styles.fListItem}>Terms & Conditions</li>
					<li className={styles.fListItem}>Dispute resolution</li>
					<li className={styles.fListItem}>How we work</li>
					<li className={styles.fListItem}>Privacy & Cookie Statement</li>
					<li className={styles.fListItem}>Manage cookie settings</li>
					<li className={styles.fListItem}>Corporate contact</li>
					<li className={styles.fListItem}>We Price Match</li>
				</ul>
			</section>
			<h4 className={styles.fText}>Copyright &copy; 2022 BookingApp</h4>
		</footer>
	)
}

export default Footer
