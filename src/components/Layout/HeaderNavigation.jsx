import React from 'react'
import classes from './HeaderNavigation.module.css'

const HeaderNavigation = () => {
	return (
		<ul className={classes.navigation}>
			<li>home</li>
			<li>settings</li>
			<li>profile</li>
			<li>log out</li>
		</ul>
	)
}

export default HeaderNavigation
