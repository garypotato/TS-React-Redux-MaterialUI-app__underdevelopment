import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOneProperty } from '../api/getOneProperty'
import { IProperty, IRootState } from '../type.d'
const queryString = require('query-string')

const useFetchOneProperty = () => {
  const [property, setProperty] = useState({} as IProperty)
  const { properties } = useSelector((state: IRootState) => state)

  useEffect(() => {
    const parsed = queryString.parse(window.location.search)
    let propertyID = Number(parsed.propertyID)

    if (properties.length !== 0) {
      let property = properties.filter(property => {
        return property.id === propertyID
      })[0]
      setProperty(property)
    } else {
      let result = getOneProperty(propertyID)
      result.then(resp => {
        let res = resp as any as IProperty
        return setProperty(res)
      })
    }
  }, [properties])

  return property
}

export default useFetchOneProperty
