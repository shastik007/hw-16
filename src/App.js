import { useContext } from 'react'
import './App.css'
import LogingPage from './components/LoginPage'
import InputCtx from './store/inputCtx'
import HomePage from './components/HomePage'

function App() {
	const { state, dispatch } = useContext(InputCtx)
	const { homePage } = state
	console.log(homePage)
	return (
		<div className='App'>
			{homePage && <HomePage />}
			{!homePage && <LogingPage />}
		</div>
	)
}

export default App
