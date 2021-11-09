import { useCallback } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './views/Home'

import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from './type.d'

import { setSelectedBranch } from './Redux/Reducers/companyReducer/companyActions'

import { Routes, Route } from 'react-router-dom'
import Property from './views/Property'

function App() {
  const dispatch = useDispatch()
  let { branches } = useSelector((state: IRootState) => state.company)

  let headerSetBranch = useCallback(
    (id: number) => {
      dispatch(setSelectedBranch(id))
    },
    [branches]
  )

  return (
    <div style={{ background: '#EEEEEE' }}>
      <Header branchesList={branches} setBranch={headerSetBranch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
