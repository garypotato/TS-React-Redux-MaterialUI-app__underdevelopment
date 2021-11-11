import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import HeaderDrawer from './HeaderDrawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { FC, memo } from 'react'
import { IBranch } from '../../type.d'
import HeaderMenu from './HeaderMenu'

interface IHeaderProps {
  showBranch: Array<IBranch>
  setBranch: (id: number) => void
  selectedBranch: number
  handleFormDisplay: () => void
}

const Header: FC<IHeaderProps> = props => {
  const { showBranch, setBranch, selectedBranch, handleFormDisplay } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`
        }}
      >
        <Toolbar>
          <HeaderDrawer
            showBranch={showBranch}
            setBranch={setBranch}
            selectedBranch={selectedBranch}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'white' }}
          >
            Seven
          </Typography>

          <HeaderMenu
            showBranch={showBranch}
            setBranch={setBranch}
            selectedBranch={selectedBranch}
          />

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => {
              handleFormDisplay()
            }}
          >
            <SearchIcon sx={{ color: 'white', display: { md: 'none' } }} />
          </IconButton>

          <Button color="inherit" sx={{ color: '#ff8f00' }}>
            <AccountCircle />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default memo(Header)
