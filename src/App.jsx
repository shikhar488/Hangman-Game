import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'

function App() {

  return (
    <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
    </Routes>
  )
}

export default App
