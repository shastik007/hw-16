import React from 'react'
import Logo from '../../assets/logoo.jpg'

const Header = () => {
	return (
		<Header>
			<div>
				<img src={Logo} alt='' />
			</div>
			<ul>
				<li>home</li>
				<li>settings</li>
				<li>profile</li>
				<li>log out</li>
			</ul>
		</Header>
	)
}

export default Header
