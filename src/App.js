import { useContext } from 'react'
import './App.css'
import LogingPage from './components/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/loginPage' element={<LogingPage />} />
					<Route path='/HomePage' element={<HomePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
