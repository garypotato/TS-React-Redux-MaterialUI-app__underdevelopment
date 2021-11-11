import Home from './views/Home'
import Property from './views/Property'
import { Routes, Route } from 'react-router-dom'
import useFetchData from './ReactHook/useFetchData'

function App() {
  useFetchData()

  return (
    <div style={{ background: '#EEEEEE', position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </div>
  )
}

export default App
