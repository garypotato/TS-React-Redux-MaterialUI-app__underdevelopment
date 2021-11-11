import Box from '@mui/material/Box'
import { FC, memo } from 'react'

interface ISearchSectionProps {
  backgroundImg?: string
  height?: string
  children?: React.ReactNode
}

const SearchSection: FC<ISearchSectionProps> = props => {
  const { children, backgroundImg, height } = props

  // todo customize style
  let inlineStyles = {}
  if (backgroundImg) {
    Object.assign(inlineStyles, {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(255,255,255,0.5)), url(${backgroundImg})`
    })
  }
  if (height) {
    Object.assign(inlineStyles, { height: height })
  }

  return (
    <Box
      sx={{
        width: '100%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
        borderRadius: '0 0 5px 5px'
      }}
      style={inlineStyles}
    >
      {children}
    </Box>
  )
}

export default memo(SearchSection)
