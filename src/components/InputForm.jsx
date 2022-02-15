import React from 'react'
import classes from './InputForm.module.css'
import Button from './UI/Button'

const InputForm = () => {
	return (
		<form className={classes.form}>
			<h3>Login</h3>
			<div>
				<input type='text' />
			</div>
			<div>
				<input type='text' />
			</div>
			<div>
				<input type='password' />
			</div>
			<div>
				<Button className={classes.login}>login</Button>
				<Button className={classes.signUp}>Sign up</Button>
			</div>
			<h6>forgot password</h6>
		</form>
	)
}

export default InputForm
