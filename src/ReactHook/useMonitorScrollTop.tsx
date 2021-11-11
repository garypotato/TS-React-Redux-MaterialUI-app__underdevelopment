import { useEffect, useState } from 'react'

const useMonitorScrollTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  const monitorHeight = () => {
    let TabPosition = document.getElementById('tabDisplay')
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    let screenHeight = document.documentElement.clientHeight
    if (scrollTop > screenHeight) {
      setShowScrollTopButton(true)
    } else {
      setShowScrollTopButton(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', monitorHeight)
    return () => {
      document.removeEventListener('scroll', monitorHeight)
    }
  }, [])

  return showScrollTopButton
}

export default useMonitorScrollTop
