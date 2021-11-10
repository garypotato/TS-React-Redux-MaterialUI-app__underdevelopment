import SelectInput from '../components/TextFiled/SelectInput'
import ButtonIcon from '../components/ButtonIcon'
import InputForm from '../components/InputForm/InputForm'
import InputFormBody from '../components/InputForm/InputFormBody'
import InputFormFooter from '../components/InputForm/InputFormFooter'
import SearchSection from '../components/SearchSection'
import SliderInput from '../components/TextFiled/SliderInput'
import SwitchInput from '../components/TextFiled/SwitchInput'
import TabDisplay from '../components/TabDisplay/TabDisplay'

import SendIcon from '@mui/icons-material/Send'
import ClearIcon from '@mui/icons-material/Clear'
import { useCallback, useState } from 'react'
import { selectInputText, suburbList } from '../constant/suburbList'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../type.d'
import { separateRentAndSale } from '../utils/_utils'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { setSelectedBranch } from '../Redux/Reducers/companyReducer/companyActions'

const Home = () => {
  // * get state from 'Redux' and hooks
  const { company, properties, branchInfo } = useSelector(
    (state: IRootState) => state
  )
  const { branches, selectedBranch } = company
  let data = separateRentAndSale(properties)
  const dispatch = useDispatch()

  // * all data for filter
  const [suburb, setSuburb] = useState('')
  const [rent, setRent] = useState(true)
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(2)
  const [carparks, setCarparks] = useState(1)

  // * control if 'filter' display
  const [display, setDisplay] = useState(false)
  const handleFormDisplay = useCallback(() => {
    setDisplay(prev => {
      return !prev
    })
  }, [])

  // * method for child component
  const handleSelectBranch = useCallback(
    (id: number) => {
      dispatch(setSelectedBranch(id))
    },
    [dispatch]
  )

  return (
    <>
      <Header
        showBranch={branches}
        setBranch={handleSelectBranch}
        selectedBranch={selectedBranch}
        handleFormDisplay={handleFormDisplay}
      />

      <SearchSection>
        <InputForm
          filterDisplay={display}
          bgColorFrom="rgba(255, 255, 255, 0.7)"
          bgColorTo="rgba(255, 255, 255, 0.7)"
        >
          <InputFormBody>
            <SelectInput
              data={suburbList}
              text={selectInputText}
              value={suburb}
              SelectFunction={city => setSuburb(city)}
            ></SelectInput>

            <SwitchInput
              textAfter="Rent"
              textBefore="Buy"
              rentCheck={rent}
              setRentCheck={check => setRent(check)}
            />

            <SliderInput
              value={bedrooms}
              label="Bedrooms"
              setValue={value => setBedrooms(value)}
            />
            <SliderInput
              value={bathrooms}
              label="Bathrooms"
              setValue={value => setBathrooms(value)}
            />
            <SliderInput
              value={carparks}
              label="Car Park"
              setValue={value => setCarparks(value)}
            />
          </InputFormBody>

          <InputFormFooter>
            <ButtonIcon icon={<ClearIcon />} text="Clear" variant="outlined" />
            <ButtonIcon icon={<SendIcon />} text="Send" />
          </InputFormFooter>
        </InputForm>
      </SearchSection>

      <TabDisplay data={data} agents={branchInfo.agents} />

      <Footer />
    </>
  )
}

export default Home
