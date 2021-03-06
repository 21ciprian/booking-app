import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import styles from './Home.module.css'

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<section className={styles.homeContainer}>
				<Featured />
				<h1 className={styles.homeTitle}>Browse by property type</h1>
				<PropertyList />
				<h1 className={styles.homeTitle}>Homes guests love</h1>
				<FeaturedProperties />
				<MailList />
				<Footer />
			</section>
		</div>
	)
}

export default Home
