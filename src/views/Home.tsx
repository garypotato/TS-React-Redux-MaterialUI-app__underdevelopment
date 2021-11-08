import SelectInput from '../components/TextFiled/SelectInput'
import ButtonIcon from '../components/ButtonIcon'
import InputForm from '../components/InputForm/InputForm'
import InputFormBody from '../components/InputForm/InputFormBody'
import InputFormFooter from '../components/InputForm/InputFormFooter'
import SearchSection from '../components/SearchSection'
import SliderInput from '../components/TextFiled/SliderInput'
import SwitchInput from '../components/TextFiled/SwitchInput'
import TabDisplay from '../components/TabDisplay'

import SendIcon from '@mui/icons-material/Send'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'
import { selectInputText, suburbList } from '../constant/suburbList'
import { useSelector } from 'react-redux'
import { IRootState } from '../type.d'
import useFetchData from '../ReactHook/useFetchData'
import { separateRentAndSale } from '../utils/_utils'

const Home = () => {
  useFetchData()

  const [suburb, setSuburb] = useState('')
  const [rent, setRent] = useState(true)
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(2)
  const [carparks, setCarparks] = useState(1)

  const { properties } = useSelector((state: IRootState) => state)

  let data = separateRentAndSale(properties)

  return (
    <>
      <SearchSection>
        <InputForm
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

      <TabDisplay data={data} />
    </>
  )
}

export default Home
