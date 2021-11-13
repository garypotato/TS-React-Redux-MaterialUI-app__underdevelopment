import StoreIcon from '@mui/icons-material/Store'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { IBranch, IProperty, newListElement } from '../type.d'

// * set localStorage, will expired in 4 hours
export interface localStorageData {
  data: any
  time: number
  expire: number
}
export const setLocalStorage = <T,>(key: string, value: T): void => {
  let obj: localStorageData = {
    data: value,
    time: Date.now(),
    expire: 86400000
  }
  localStorage.setItem(key, JSON.stringify(obj))
}

// * get localStorage
export const getLocalStorage = (key: string) => {
  let val = localStorage.getItem(key)
  if (!val) {
    return val
  }
  let newVal: localStorageData
  newVal = JSON.parse(val)
  if (Date.now() - newVal.time > newVal.expire) {
    localStorage.removeItem(key)
    return null
  }
  return newVal.data
}

// * separate properties to 'rent' and 'sell'
export const separateRentAndSale = (data: Array<IProperty>) => {
  let newList: Array<newListElement> = [
    { cate: 'rent', icon: <VpnKeyIcon />, properties: [] },
    { cate: 'sale', icon: <StoreIcon />, properties: [] }
  ]
  data.forEach(property => {
    if (property.objective === 'rent') {
      newList.forEach(item => {
        if (item.cate === 'rent') {
          item.properties.push(property)
        }
      })
    } else {
      newList.forEach(item => {
        if (item.cate === 'sale') {
          item.properties.push(property)
        }
      })
    }
  })
  return newList
}

// * find out the 'selected branch' index in 'branches array'
export const selectedBranchIndexFunction = (
  selectedBranchID: number,
  branches: IBranch[]
) => {
  let selectedBranch = branches.find(branch => branch.id === selectedBranchID)
  if (selectedBranch !== undefined) {
    let index = branches.indexOf(selectedBranch)
    return index
  }
  return 999
}

// * scroll to top
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
