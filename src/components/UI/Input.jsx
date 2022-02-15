const Input = (props) => {
	const { valid } = props
	return <input style={valid ? {border : '2px solid black'} : { border: '2px solid red' }} {...props} />
}

export default Input
