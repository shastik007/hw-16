import styled from 'styled-components'

const Input = styled.input`
	border: ${(props) =>
		(props.valid === false && '2px solid red') || '1px solid #828282'};
`

export default Input
