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
import React, {useState} from 'react'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import styled from 'styled-components'

const Head = styled.header`
	background-color: #003580;
	color: #fff;
	display: flex;
	justify-content: center;
	position: relative;
`
const HeaderSection = styled.section`
	width: 100%;
	max-width: 1024px;
	padding: 0 0.5rem;
	margin: 1.25rem 0 7rem 0;
`
const HeaderList = styled.div`
	display: flex;
	gap: 2.5rem;
`
const HeaderListitem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`
const Button = styled.button`
	background-color: #0071c2;
	color: #fff;
	font-weight: 500;
	border: none;
	outline: none;
	padding: 0.65rem;
	cursor: pointer;
`
const HeaderSearch = styled.section`
	height: 2rem;
	background-color: #fff;
	border: 3px solid #febb02;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.6rem 0;
	border-radius: 0.3rem;
	position: absolute;
	bottom: -1.6rem;
	width: 100%;
	max-width: 1024px;
`
const HeaderSearchItem = styled.section`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	color: lightgray;
	position: relative;
`
const Input = styled.input`
	border: none;
	outline: none;
`
const SearchButton = styled(Button)``
const OptionSection = styled.section`
	position: absolute;
	top: 3.2rem;
	background-color: #fff;
	color: gray;
	-webkit-box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
	box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
`
const OptionItem = styled.div`
	width: 12.5rem;
	display: flex;
	justify-content: space-between;
	margin: 0.7rem;
	& div {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}
	& button {
		width: 1.8rem;
		height: 1.8rem;
		border: 1px solid #0071c2;
		color: #0071c2;
		cursor: pointer;
		background-color: #fff;
		&:disabled {
			cursor: not-allowed;
		}
	}
`

function Header() {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])
	const [openDate, setOpenDate] = useState(false)
	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState({adult: 1, children: 0, room: 1})
	function handleOption(name, op) {
		setOptions(prev => {
			return {
				...prev,
				[name]: op === 'i' ? options[name] + 1 : options[name] - 1,
			}
		})
	}
	return (
		<Head>
			<HeaderSection>
				<HeaderList>
					<HeaderListitem className='active'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</HeaderListitem>
					<HeaderListitem>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</HeaderListitem>
					<HeaderListitem>
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</HeaderListitem>
					<HeaderListitem>
						<FontAwesomeIcon icon={faMountainCity} />
						<span>Attractions</span>
					</HeaderListitem>
					<HeaderListitem>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxi</span>
					</HeaderListitem>
				</HeaderList>
				<h1>A lifetime of discounts? It's Genius.</h1>
				<p>
					Get rewarderd for your travels - unlock instant savings of 10% or more
					with a free booking-app account
				</p>
				<Button>Sign in / Register</Button>
				<HeaderSearch>
					<HeaderSearchItem>
						{' '}
						<FontAwesomeIcon icon={faBed} className='headerIcon' />
						<Input type='text' placeholder='Where are you going?' />
					</HeaderSearchItem>
					<HeaderSearchItem>
						{' '}
						<FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
						<span onClick={() => setOpenDate(!openDate)}>{`${format(
							date[0].startDate,
							'MM/dd/yyyy'
						)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>{' '}
						{openDate && (
							<DateRange
								editableDateInputs={true}
								onChange={item => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className='date'
							/>
						)}
					</HeaderSearchItem>
					<HeaderSearchItem>
						{' '}
						<FontAwesomeIcon icon={faPerson} className='headerIcon' />
						<span
							onClick={() =>
								setOpenOptions(!openOptions)
							}>{`${options.adult} adult ~ ${options.children} children ~ ${options.room} room`}</span>{' '}
						{openOptions && (
							<OptionSection>
								<OptionItem>
									<span>Adult</span>
									<div>
										<button
											disabled={options.adult <= 1}
											onClick={() => handleOption('adult', 'd')}>
											-
										</button>
										<span>{options.adult}</span>
										<button onClick={() => handleOption('adult', 'i')}>
											+
										</button>
									</div>
								</OptionItem>
								<OptionItem>
									<span>Children</span>
									<div>
										<button
											disabled={options.children <= 0}
											onClick={() => handleOption('children', 'd')}>
											-
										</button>
										<span>{options.children}</span>
										<button onClick={() => handleOption('children', 'i')}>
											+
										</button>
									</div>
								</OptionItem>
								<OptionItem>
									<span>Room</span>
									<div>
										<button
											disabled={options.room <= 1}
											onClick={() => handleOption('room', 'd')}>
											-
										</button>
										<span>{options.room}</span>
										<button onClick={() => handleOption('room', 'i')}>+</button>
									</div>
								</OptionItem>
							</OptionSection>
						)}
					</HeaderSearchItem>
					<HeaderSearchItem>
						{' '}
						<SearchButton>Search</SearchButton>{' '}
					</HeaderSearchItem>
				</HeaderSearch>
			</HeaderSection>
		</Head>
	)
}

export default Header
