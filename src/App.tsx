import Footer from './components/Footer'
import Home from './views/Home'
import { Routes, Route } from 'react-router-dom'
import Property from './views/Property'
import useFetchData from './ReactHook/useFetchData'

function App() {
  useFetchData()

  return (
    <div style={{ background: '#EEEEEE' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
