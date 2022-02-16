import React, { useReducer } from 'react'
import { USERNAME } from '../helpers/constants'
import { PASSWORD } from '../helpers/constants'
import { EMAIL } from '../helpers/constants'

const InputCtx = React.createContext({})

const reducer = (state, action) => {
	switch (action.type) {
		case USERNAME:
			return { ...state, useName: action.val, isValidName: +true }
		case EMAIL:
			return { ...state, email: action.val, isValidEmail: +true }
		case PASSWORD:
			return { ...state, password: action.val, isValidPassword: +true }
		case 'CHANGE_NAME':
			return { ...state, isValidName: +false }
		case 'CHANGE_EMAIL':
			return { ...state, isValidEmail: +false }
		case 'CHANGE_PASSWORD':
			return { ...state, isValidPassword: +false }
		case 'OPEN_HOME_PAGE':
			return { ...state, homePage: true }
		default:
			return state
	}
}

const init = {
	useName: '',
	email: '',
	password: '',
	isValidName: +false,
	isValidEmail: +false,
	isValidPassword: +false,
	homePage: true,
}

export const InputProvider = ({ children }) => {
	const [state, dispatchFl] = useReducer(reducer, init)
	return (
		<InputCtx.Provider value={{ state: state, dispatch: dispatchFl }}>
			{children}
		</InputCtx.Provider>
	)
}

export default InputCtx
