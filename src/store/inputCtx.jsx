import React, { useReducer } from 'react'
import { USERNAME } from '../helpers/constants'
import { PASSWORD } from '../helpers/constants'
import { EMAIL } from '../helpers/constants'

const InputCtx = React.createContext({})

const reducer = (state, action) => {
	switch (action.type) {
		case USERNAME:
			return { ...state, useName: action.val }
		case EMAIL:
			return { ...state, email: action.val }
		case PASSWORD:
			return { ...state, password: action.val }
		case 'VALIDATE_USERNAME':
			return { ...state, isValidName: false }
		case 'VALIDATE_EMAIL':
			return { ...state, isValidEmail: false }
		case 'VALIDATE_PASSWORD':
			return { ...state, isValidPassword: false }
		case 'VALIDATE':
			return { ...state, isValid: false }
		default:
			return state
	}
}

const init = {
	useName: '',
	email: '',
	password: '',
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
