import { useCallback } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './views/Home'

import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from './type.d'

import { setSelectedBranch } from './Redux/Reducers/companyReducer/companyActions'

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
      <Home />
      <Footer />
    </div>
  )
}

export default App
