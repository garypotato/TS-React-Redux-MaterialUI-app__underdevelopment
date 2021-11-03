import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import InputForm from './components/InputForm/InputForm'
import InputFormBody from './components/InputForm/InputFormBody'
import InputFormFooter from './components/InputForm/InputFormFooter'
import SearchSection from './components/SearchSection'
import SelectInput from './components/TextFiled/SelectInput'
import { SliderInput } from './components/TextFiled/SliderInput'
import { SwitchInput } from './components/TextFiled/SwitchInput'
import ButtonIcon from './components/ButtonIcon'

import SendIcon from '@mui/icons-material/Send'
import ClearIcon from '@mui/icons-material/Clear'

import { selectInputText, suburbList } from './constant/suburbList'
import TabDisplay from './components/TabDisplay'

function App() {
  const [suburb, setSuburb] = useState('')
  const [rent, setRent] = useState(true)
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(2)
  const [carparks, setCarparks] = useState(1)

  return (
    <div style={{ background: '#EEEEEE' }}>
      <Header />

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

      <TabDisplay />
      <Footer />
    </div>
  )
}

export default App
