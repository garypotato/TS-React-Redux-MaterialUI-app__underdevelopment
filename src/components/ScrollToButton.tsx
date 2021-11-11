import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import Fab from '@mui/material/Fab'
import { FC, memo, useCallback } from 'react'
import { scrollToTop } from '../utils/_utils'

interface IScrollToButtonProps {
  show?: boolean
}

const ScrollToButton: FC<IScrollToButtonProps> = props => {
  const { show } = props

  let showButton = useCallback(() => {
    let style
    if (!show) {
      style = { display: 'none' }
    } else {
      style = {}
    }
    return style
  }, [show])

  return (
    <Fab
      size="small"
      color="secondary"
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        display: { md: 'none' }
      }}
      onClick={() => scrollToTop()}
      style={showButton()}
    >
      <ArrowCircleUpIcon />
    </Fab>
  )
}

export default memo(ScrollToButton)
