import React, { useReducer } from 'react'

const InputCtx = React.createContext({})

const reducer = (action, type) => {
    
}

const init = {
	useName: '',
	email: '',
	password: '',
}

export const InputProvider = ({ children, ...props }) => {
	const [state, dispatchFl] = useReducer(reducer, init)
	return (
		<InputCtx.Provider value={{ state: state, dispatch: dispatchFl }}>
			{children}
		</InputCtx.Provider>
	)
}

export default InputCtx
