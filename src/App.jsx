import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeGreeting } from './pages/HomeGreeting'
import { HomeCardCharacter } from './pages/HomeCardСharacter'
import { HomeCardEpisode } from './pages/HomeCardEpisode'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeGreeting />} />
				<Route path='/character' element={<HomeCardCharacter />}></Route>
				<Route path='/episode' element={<HomeCardEpisode />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
