import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { IProperty, IRootState } from '../type.d'
import { useCallback, useEffect, useState } from 'react'
import { setSelectedBranch } from '../Redux/Reducers/companyReducer/companyActions'
import { setLocalStorage } from '../utils/_utils'
import Footer from '../components/Footer'
import URI from 'urijs'
import Carousel from '../components/Carousel/Carousel'
import Stack from '@mui/material/Stack'
import { Divider, Typography, Box } from '@mui/material'
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded'
import BathroomRoundedIcon from '@mui/icons-material/BathroomRounded'
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import ScrollToButton from '../components/ScrollToButton'

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
    let propertyID = queries.id
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
        <Carousel data={property?.media} />

        <Stack
          direction="row"
          spacing={{ xs: 3, sm: 8, md: 12 }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="center"
          sx={{
            width: '80vw',
            margin: '20px auto',
            height: { md: '10vh' },
            padding: { md: '20px' }
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <BedroomParentRoundedIcon fontSize="medium" color="primary" />
            <Typography fontSize="h6.fontSize">{property?.bedrooms}</Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <BathroomRoundedIcon fontSize="medium" color="primary" />
            <Typography fontSize="h6.fontSize">
              {property?.bathrooms}
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <LocalParkingRoundedIcon fontSize="medium" color="primary" />
            <Typography fontSize="h6.fontSize">
              {property?.carspaces}
            </Typography>
          </Stack>
        </Stack>

        <Divider textAlign="left" variant="middle">
          ADDRESS
        </Divider>
        <Typography sx={{ px: '10vw', py: '30px' }}>
          {property?.addressParts?.displayAddress}
        </Typography>

        <Divider textAlign="left" variant="middle">
          DESCRIPTION
        </Divider>
        <Typography sx={{ px: '10vw', py: '30px' }}>
          {property?.description?.split('Featur')[0]}
        </Typography>

        <Divider textAlign="left" variant="middle">
          FEATURES
        </Divider>
        <Stack sx={{ px: '10vw', py: '30px' }} spacing={1}>
          {property?.description
            ?.split('Featur')[1]
            .split('CONTACT')[0]
            .split('- ')
            .slice(1)
            .map((feature, index) => {
              return (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <RadioButtonCheckedIcon color="primary" />
                  <Typography key={index}>{feature}</Typography>
                </Stack>
              )
            })}
        </Stack>

        <Divider textAlign="left" variant="middle">
          DISCLAIMER
        </Divider>
        <Typography sx={{ px: '10vw', py: '30px' }}>
          {property?.description?.split('Disclaimer:')[1]}
        </Typography>

        <Divider textAlign="left" variant="middle">
          AGENT
        </Divider>
        <Typography sx={{ px: '10vw', py: '30px' }}>Agent</Typography>
      </Box>

      <Footer />
    </>
  )
}

export default Property
