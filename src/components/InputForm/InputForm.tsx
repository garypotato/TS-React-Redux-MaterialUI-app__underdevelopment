import Box from '@mui/material/Box'
import { FC } from 'react'

import Grid from '@mui/material/Grid'

interface IInputFormProps {
  position?: 'left' | 'right'
  bgColorFrom?: string
  bgColorTo?: string
}

const InputForm: FC<IInputFormProps> = props => {
  const { position, children, bgColorFrom, bgColorTo } = props

  // todo -> customise input from style
  let inlineStyle = { padding: '25px 20px 25px 20px' }
  if (position) {
    if (position === 'left') {
      Object.assign(inlineStyle, { left: '10%' })
    }
    if (position === 'right') {
      Object.assign(inlineStyle, { left: '90%' })
    }
  }
  let temBgColorFrom = bgColorFrom || 'rgba(255, 255, 255, 0.2)'
  let temBgColorTo = bgColorTo || 'rgba(255, 255, 255, 0.2)'
  let temBackgroundImage = {
    backgroundImage: `linear-gradient(${temBgColorFrom},${temBgColorTo})`
  }
  Object.assign(inlineStyle, temBackgroundImage)

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '250px',
        borderRadius: '5px',
        flexGrow: 1
      }}
      style={inlineStyle}
    >
      <Grid container rowSpacing={3}>
        {children}
      </Grid>
    </Box>
  )
}

export default InputForm
