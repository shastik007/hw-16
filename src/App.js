import { useContext } from 'react'
import './App.css'
import LogingPage from './components/LoginPage'
import InputCtx from './store/inputCtx'

function App() {
	return (
		<div className='App'>
			<LogingPage />
		</div>
	)
}

export default App
