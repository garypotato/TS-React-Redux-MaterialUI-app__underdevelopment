// ! local storage
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
