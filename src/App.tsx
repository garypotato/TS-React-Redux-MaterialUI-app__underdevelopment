import Home from './views/Home'
import Property from './views/Property'
import { Routes, Route } from 'react-router-dom'
import useFetchData from './ReactHook/useFetchData'
import SearchProperty from './views/SearchProperty'
import Login from './views/Login/Login'

function App() {
  useFetchData()

  return (
    <div style={{ background: '#EEEEEE', position: 'relative' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/property" element={<Property />} />
        <Route path="/searchproperty" element={<SearchProperty />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
