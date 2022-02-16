import React from 'react'
import Logo from '../../assets/logoo.jpg'

const Header = () => {
	return (
		<header>
			<div>
				<img src={Logo} alt='' />
			</div>
			<ul>
				<li>home</li>
				<li>settings</li>
				<li>profile</li>
				<li>log out</li>
			</ul>
		</header>
	)
}

export default Header
