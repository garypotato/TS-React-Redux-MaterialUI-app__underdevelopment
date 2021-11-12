import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { IAgent, IProperty, IRootState, ITemPropertyElement } from '../type.d'
import { useCallback, useEffect, useState } from 'react'
import { setSelectedBranch } from '../Redux/Reducers/companyReducer/companyActions'
import { setLocalStorage } from '../utils/_utils'
import Footer from '../components/Footer'
import URI from 'urijs'
import Carousel from '../components/Carousel/Carousel'
import Stack from '@mui/material/Stack'
import { Divider, Typography, Box, Avatar } from '@mui/material'
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded'
import BathroomRoundedIcon from '@mui/icons-material/BathroomRounded'
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

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

  // * get property info
  const [propertyElement, setPropertyELement] = useState(
    {} as ITemPropertyElement
  )
  const [agent, setAgent] = useState({} as IAgent)
  useEffect(() => {
    let temPropertyElement: ITemPropertyElement = {
      description: '',
      features: [],
      disclaimer: 'string'
    }
    if (property !== undefined && property !== null) {
      // todo -> set property
      if (Object.keys(property).length !== 0 && property) {
        let [descriptionPlusFeatures, disclaimer] =
          property.description.split('Disclaimer:')
        temPropertyElement.disclaimer = disclaimer
        let [description, featuresPlusContact] =
          descriptionPlusFeatures.split('Featur')
        if (!featuresPlusContact) {
          temPropertyElement.description = description.split('Contac')[0]
          temPropertyElement.features = property.features
        } else {
          temPropertyElement.description = description
          temPropertyElement.features = featuresPlusContact
            .split('CONTACT')[0]
            .split('- ')
            .slice(1)
        }

        setPropertyELement(temPropertyElement)
        // todo -> set agent
        let agent: IAgent | undefined
        let agentID = property?.advertiserIdentifiers?.contactIds[0]
        agent = branchInfo?.agents.find(agent => agent.id === agentID)
        if (agent) {
          setAgent(agent)
        }
      } else {
        return
      }
    } else {
      return
    }
  }, [property])

  return (
    <>
      <Header
        showBranch={branches}
        setBranch={handleSelectBranch}
        selectedBranch={selectedBranch}
      />

      <Box sx={{ py: { xs: '56px', sm: '65px' }, minHeight: '100vh' }}>
        <Carousel data={property?.media} />

        <Box sx={{ width: { xs: 1, sm: 0.8, md: 0.6 }, margin: '0 auto' }}>
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
              <Typography fontSize="h6.fontSize">
                {property?.bedrooms}
              </Typography>
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
            {propertyElement?.description}
          </Typography>

          <Divider textAlign="left" variant="middle">
            FEATURES
          </Divider>
          <Stack sx={{ px: '10vw', py: '30px' }} spacing={1}>
            {propertyElement?.features?.map((feature, index) => {
              return (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  key={index}
                >
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
            {propertyElement?.disclaimer}
          </Typography>

          <Divider textAlign="left" variant="middle">
            AGENT
          </Divider>
          <Stack
            sx={{ px: '10vw', py: '30px' }}
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Avatar
              alt={agent?.firstName}
              src={agent?.photo}
              sx={{ width: 56, height: 56 }}
            />
            <Stack alignItems="center" spacing={2}>
              <Typography>
                {agent?.firstName} {agent?.lastName}
              </Typography>
              <Typography>{agent?.phone}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Footer />
    </>
  )
}

export default Property
