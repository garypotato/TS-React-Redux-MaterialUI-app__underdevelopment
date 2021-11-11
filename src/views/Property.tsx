import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { IProperty, IRootState } from '../type.d'
import { useCallback, useEffect, useState } from 'react'
import { setSelectedBranch } from '../Redux/Reducers/companyReducer/companyActions'
import { setLocalStorage } from '../utils/_utils'
import Footer from '../components/Footer'
import URI from 'urijs'
import { Box } from '@mui/system'
import Carousel from '../components/Carousel/Carousel'

const Property = () => {
  const { company, properties, branchInfo } = useSelector(
    (state: IRootState) => state
  )
  const { branches, selectedBranch } = company

  const dispatch = useDispatch()

  // * method for child component
  const handleSelectBranch = useCallback(
    (id: number) => {
      dispatch(setSelectedBranch(id))
      setLocalStorage('selectedBranch', id)
    },
    [dispatch]
  )

  // * get property
  const [property, setProperty] = useState({} as IProperty)
  useEffect(() => {
    let queries = URI.parseQuery(window.location.search)
    let propertyID = Object.keys(queries)[0]
    let temProperty = properties.filter(property => {
      return property.id === Number(propertyID)
    })[0]
    setProperty(temProperty)
  }, [properties])

  return (
    <>
      <Header
        showBranch={branches}
        setBranch={handleSelectBranch}
        selectedBranch={selectedBranch}
      />

      <Box sx={{ paddingTop: { xs: '56px', sm: '65px' }, minHeight: '100vh' }}>
        <Carousel data={property && property.media} />
      </Box>

      <Footer />
    </>
  )
}

export default Property
