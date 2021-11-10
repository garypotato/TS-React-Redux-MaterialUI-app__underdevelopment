import Box from '@mui/material/Box'
import { FC, memo, useCallback } from 'react'

import Grid from '@mui/material/Grid'

interface IInputFormProps {
  bgColorFrom?: string
  bgColorTo?: string
  filterDisplay: boolean
  children: React.ReactNode
}

const InputForm: FC<IInputFormProps> = props => {
  const { children, bgColorFrom, bgColorTo, filterDisplay } = props

  // * monitor 'filterDisplay', if true, show 'filter' in the center
  let filterDisplayStyle = useCallback(() => {
    // todo -> customise input from style
    let inlineStyle = {}
    let temBgColorFrom = bgColorFrom || 'rgba(255, 255, 255, 0.2)'
    let temBgColorTo = bgColorTo || 'rgba(255, 255, 255, 0.2)'
    let temBackgroundImage = {
      backgroundImage: `linear-gradient(${temBgColorFrom},${temBgColorTo})`
    }
    Object.assign(inlineStyle, temBackgroundImage)

    if (filterDisplay) {
      return Object.assign(inlineStyle, { display: 'block', left: '50%' })
    }
    return inlineStyle
  }, [filterDisplay])

  return (
    <Box
      style={filterDisplayStyle()}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        width: '250px',
        borderRadius: '5px',
        flexGrow: 1,
        display: { xs: 'none', md: 'block' },
        padding: '25px 20px 25px 20px'
      }}
    >
      <Grid container rowSpacing={3}>
        {children}
      </Grid>
    </Box>
  )
}

export default memo(InputForm)
