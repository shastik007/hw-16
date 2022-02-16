import React, { useContext } from 'react'
import classes from './HeaderNavigation.module.css'
import InputCtx from '../../store/inputCtx'

const HeaderNavigation = () => {
	const { dispatch } = useContext(InputCtx)
	return (
		<ul className={classes.navigation}>
			<li>home</li>
			<li>settings</li>
			<li>profile</li>
			<li
				onClick={() => {
					dispatch({ type: 'OPEN_HOME_PAGE_&&_CLOSE' })
				}}
			>
				log out
			</li>
		</ul>
	)
}

export default HeaderNavigation
