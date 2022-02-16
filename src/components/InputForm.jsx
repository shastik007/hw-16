import React, { useContext } from 'react'
import classes from './InputForm.module.css'
import Button from './UI/Button'
import Input from './UI/Input'
import InputCtx from '../store/inputCtx'
import { EMAILREGEXP, USERREGEXP } from '../helpers/constants'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'

const InputForm = () => {
	const { dispatch, state } = useContext(InputCtx)

	const onChangeUserInputHandler = (e) => {
		if (USERREGEXP.test(e.target.value)) {
			dispatch({ type: 'USERNAME_CHANGE', val: e.target.value })
		} else {
			dispatch({ type: 'CHANGE_NAME' })
		}
	}

	const onChangeEmailInputHandler = (e) => {
		if (EMAILREGEXP.test(e.target.value)) {
			dispatch({ type: 'EMAIL_CHANGE', val: e.target.value })
		} else {
			dispatch({ type: 'CHANGE_EMAIL' })
		}
	}

	const onChangePasswordInputHandler = (e) => {
		if (e.target.value.trim().length >= 5) {
			let prevPassword = e.target.value.slice(0, 2)
			let password = e.target.value.split('').reverse().join('')
			dispatch({ type: 'PASSWORD_CHANGE', val: password + prevPassword })
		} else {
			dispatch({ type: 'CHANGE_PASSWORD' })
		}
	}

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch({ type: 'OPEN_HOME_PAGE' })
	}

	return (
		<>
			<form onSubmit={onSubmit} className={classes.form}>
				<h3>Login</h3>
				<div>
					<Input
						name='userName'
						placeholder='userName'
						type='text'
						onChange={onChangeUserInputHandler}
					/>
				</div>
				<div>
					<Input
						name='email'
						placeholder='email'
						type='email'
						onChange={onChangeEmailInputHandler}
					/>
				</div>
				<div>
					<Input
						name='password'
						placeholder='password'
						type='password'
						onChange={onChangePasswordInputHandler}
					/>
				</div>
				<div>
					<Button
						disabled={
							state.isValidEmail &&
							state.isValidPassword &&
							state.isValidName
								? false
								: true
						}
						type='submit'
						className={classes.login}
					>
						<Link href='/'>login</Link>
					</Button>
					<Button className={classes.signUp}>Sign up</Button>
				</div>
				<h6>forgot password ?</h6>
			</form>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</>
	)
}

export default InputForm
