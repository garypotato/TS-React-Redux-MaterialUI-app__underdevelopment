import { useEffect, useState } from 'react'

const useMonitorClientWidth = () => {
  const [screenLargerMedium, setScreenLargerMedium] = useState(false)

  const ifScreenLargerMedium = () => {
    let clientWidth = document.documentElement.clientWidth

    setScreenLargerMedium(clientWidth < 900)
  }

  useEffect(() => {
    ifScreenLargerMedium()
  }, [])

  return screenLargerMedium
}

export default useMonitorClientWidth
