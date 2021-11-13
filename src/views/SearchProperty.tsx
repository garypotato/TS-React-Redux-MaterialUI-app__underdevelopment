import { Box, Grid, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import ScrollToButton from '../components/ScrollToButton'
import useMonitorScrollTop from '../ReactHook/useMonitorScrollTop'
import { setSelectedBranch } from '../Redux/Reducers/companyReducer/companyActions'
import { IProperty, IRootState } from '../type.d'
import { separateRentAndSale, setLocalStorage } from '../utils/_utils'
import URI from 'urijs'
import CardDisplay from '../components/CardDisplay'
import { Link } from 'react-router-dom'

const SearchProperty = () => {
  // * get state from 'Redux' and hooks
  const { company, properties, branchInfo } = useSelector(
    (state: IRootState) => state
  )
  const { branches, selectedBranch } = company
  let data = separateRentAndSale(properties)
  const dispatch = useDispatch()

  // * method for child component
  const handleSelectBranch = useCallback(
    (id: number) => {
      dispatch(setSelectedBranch(id))
      setLocalStorage('selectedBranch', id)
    },
    [dispatch]
  )

  // * scrollToTopButton display or not
  let showScrollTopButton = useMonitorScrollTop()

  // * get search result
  const [suburb, setSuburb] = useState('' as string)
  const [rent, setRent] = useState<string>('true')
  const [bedrooms, setBedrooms] = useState([] as number[])
  const [bathrooms, setBathrooms] = useState([] as number[])
  const [carspaces, setCarspaces] = useState([] as number[])
  useEffect(() => {
    const queries = URI.parseQuery(window.location.search)
    const { suburb, rent, bedrooms, bathrooms, carspaces } = queries
    setSuburb(suburb)
    setRent(rent)
    setBedrooms(bedrooms.split(','))
    setBathrooms(bathrooms.split(','))
    setCarspaces(carspaces.split(','))
  }, [properties])
  // * get search properties
  const [searchProperties, setSearchProperties] = useState([] as IProperty[])
  useEffect(() => {
    let temSearchProperties: IProperty[] =
      rent === 'true' ? data[0].properties : data[1].properties
    if (suburb !== '') {
      temSearchProperties = temSearchProperties.filter(property => {
        return property.addressParts.suburb === suburb
      })
    }
    temSearchProperties = temSearchProperties.filter(property => {
      return (
        property.bedrooms >= Number(bedrooms[0]) &&
        property.bedrooms <= Number(bedrooms[1]) &&
        property.bathrooms >= Number(bathrooms[0]) &&
        property.bathrooms <= Number(bathrooms[1]) &&
        property.carspaces >= Number(carspaces[0]) &&
        property.carspaces <= Number(carspaces[1])
      )
    })

    setSearchProperties(temSearchProperties)
  }, [suburb, rent, bedrooms, bathrooms, carspaces])

  return (
    <>
      <Header
        showBranch={branches}
        setBranch={handleSelectBranch}
        selectedBranch={selectedBranch}
      />

      <Box
        sx={{
          minHeight: '100vh',
          width: '85%',
          margin: '0 auto',
          mb: '10vh'
        }}
      >
        {searchProperties.length !== 0 && (
          <Grid container spacing={2} textAlign="center" sx={{ mt: '60px' }}>
            {searchProperties?.map((property, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/property?${property.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <CardDisplay data={property} agents={branchInfo.agents} />
                  </Link>
                </Grid>
              )
            })}
          </Grid>
        )}

        {searchProperties.length === 0 && (
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            Sorry, I can't find any properties....
          </Typography>
        )}
      </Box>

      <Footer />
      <ScrollToButton show={showScrollTopButton} />
    </>
  )
}

export default SearchProperty
