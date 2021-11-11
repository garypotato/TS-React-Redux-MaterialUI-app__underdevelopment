import { Typography } from '@mui/material'
import { FC, useCallback } from 'react'
import useMonitorClientWidth from '../ReactHook/useMonitorClientWidth'

interface ITitleTextProps {
  children: React.ReactNode
  fontColor: string
  show?: boolean
}

const TitleText: FC<ITitleTextProps> = props => {
  const { children, fontColor, show } = props

  // * return 'true' means screen size < 900px
  let clientWidthSmallMedium = useMonitorClientWidth()

  const handleShow = useCallback(() => {
    if (clientWidthSmallMedium && !show) {
      return { display: 'block' }
    } else if (clientWidthSmallMedium && show) {
      return { display: 'none' }
    } else if (!clientWidthSmallMedium) {
      return { display: 'block' }
    }
  }, [show, clientWidthSmallMedium])

  return (
    <Typography
      variant="h2"
      style={handleShow()}
      sx={{
        color: `${fontColor}`,
        position: 'absolute',
        top: '50%',
        left: { xs: '50%', md: '40vw' },
        transform: 'translate(-50%, -50%)',
        width: { xs: '80vw', md: '35vw' },
        fontFamily: 'Segoe UI',
        lineHeight: '1.5',
        fontWeight: 'bold'
      }}
    >
      {children}
    </Typography>
  )
}

export default TitleText
