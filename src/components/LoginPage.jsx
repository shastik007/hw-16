import React from 'react'
import InputForm from './InputForm'
import logo from '../assets/logoo.jpg'
import classes from './LoginPage.module.css'


const LogingPage = () => {
	return (
		<div className={classes.loginPage}>
			<div className={classes.img}>
				<img src={logo} alt='' />
			</div>
			<div className={classes.form}>
				<InputForm />
			</div>
		</div>
	)
}

export default LogingPage
