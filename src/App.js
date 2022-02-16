import { useContext } from 'react'
import './App.css'
import LogingPage from './components/LoginPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route
						path='*'
						element={<Navigate to='/login' replace />}
					/>
					<Route path='/login' element={<LogingPage />} />
					<Route path='/HomePage' element={<HomePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
