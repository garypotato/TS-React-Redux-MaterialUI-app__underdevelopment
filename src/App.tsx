import { useCallback, useEffect, useState } from 'react'
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

import { useDispatch, useSelector } from 'react-redux'

import { IRootState, IBranch } from './type.d'
import { getLocalStorage, setLocalStorage } from './utils/_utils'
import { getCompanyBranches } from './api/getCompanyBranches'
import {
  setCompanyBranches,
  setSelectedBranch
} from './Redux/Reducers/companyReducer/companyActions'

function App() {
  const [suburb, setSuburb] = useState('')
  const [rent, setRent] = useState(true)
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(2)
  const [carparks, setCarparks] = useState(1)

  const dispatch = useDispatch()
  let { companyName, branches } = useSelector(
    (state: IRootState) => state.company
  )

  let headerSetBranch = useCallback(
    (id: number) => {
      dispatch(setSelectedBranch(id))
    },
    [branches]
  )

  // todo -> set Company branches and default branch
  useEffect(() => {
    const result = getCompanyBranches(companyName)
    const selectedBranch = getLocalStorage('selectedBranch')
    result.then(resp => {
      const res = resp as any as Array<IBranch>
      dispatch(setCompanyBranches(res))
      let branchID = res.map(branch => branch.id)
      // todo -> if local storage `selectedBranch` are one of the branches, then go on
      if (branchID.includes(selectedBranch)) {
        dispatch(setSelectedBranch(selectedBranch))
      } else {
        setLocalStorage('selectedBranch', res[0].id)
        dispatch(setSelectedBranch(res[0].id))
      }
    })
  }, [])

  return (
    <div style={{ background: '#EEEEEE' }}>
      <Header branchesList={branches} setBranch={headerSetBranch} />

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
