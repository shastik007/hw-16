import React, { useState } from 'react'
import classes from './InputForm.module.css'
import Button from './UI/Button'
import Input from './UI/Input'

const InputForm = () => {
	return (
		<form className={classes.form}>
			<h3>Login</h3>
			<div>
				<Input
					name='userName'
					disabled={false}
					placeholder='userName'
					type='text'
				/>
			</div>
			<div>
				<Input
					name='email'
					disabled={true}
					placeholder='email'
					type='email'
				/>
			</div>
			<div>
				<Input
					name='password'
					disabled={true}
					placeholder='password'
					type='password'
				/>
			</div>
			<div>
				<Button className={classes.login}>login</Button>
				<Button className={classes.signUp}>Sign up</Button>
			</div>
			<h6>forgot password ?</h6>
		</form>
	)
}

export default InputForm
