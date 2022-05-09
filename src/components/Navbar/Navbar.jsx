import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
	height: 50px;
	background-color: #003580;
	display: flex;
	justify-content: center;
`
const NavSection = styled.section`
	width: 100%;
	max-width: 1024px;
	padding: 0 0.5rem;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Button = styled.button`
	border: none;
	outline: none;
	margin-left: 1.5rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	color: #003580;
`
function Navbar() {
	return (
		<Nav>
			<NavSection>
				<span>Logo</span>
				<div>
					<Button>Register</Button>
					<Button>Login</Button>
				</div>
			</NavSection>
		</Nav>
	)
}

export default Navbar
