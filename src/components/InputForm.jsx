import React, { useContext, useState } from 'react'
import classes from './InputForm.module.css'
import Button from './UI/Button'
import Input from './UI/Input'
import InputCtx from '../store/inputCtx'

const InputForm = () => {
	const { dispatch, state } = useContext(InputCtx)

	const onChangeUserInputHandler = (e) => {
		dispatch({ type: 'USERNAME_CHANGE', val: e.target.value })
	}

	const onChangeEmailInputHandler = (e) => {
		dispatch({ type: 'EMAIL_CHANGE', val: e.target.value })
	}

	const onChangePasswordInputHandler = (e) => {
		dispatch({ type: 'PASSWORD_CHANGE', val: e.target.value })
	}

	
	const onSubmit = (e) => {
		e.preventDefault()
		console.log(state);
	}

	return (
		<form onSubmit={onSubmit} className={classes.form}>
			<h3>Login</h3>
			<div>
				<Input
					name='userName'
					disabled={false}
					placeholder='userName'
					type='text'
					onChange={onChangeUserInputHandler}
				/>
			</div>
			<div>
				<Input
					name='email'
					disabled={false}
					placeholder='email'
					type='email'
					onChange={onChangeEmailInputHandler}
				/>
			</div>
			<div>
				<Input
					name='password'
					disabled={false}
					placeholder='password'
					type='password'
					onChange={onChangePasswordInputHandler}
				/>
			</div>
			<div>
				<Button type='submit' className={classes.login}>
					login
				</Button>
				<Button className={classes.signUp}>Sign up</Button>
			</div>
			<h6>forgot password ?</h6>
		</form>
	)
}

export default InputForm
