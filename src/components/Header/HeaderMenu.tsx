import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { FC, memo, useState } from 'react'
import { IBranch } from '../../type.d'

interface IHeaderMenuProp {
  showBranch: Array<IBranch>
}

const HeaderMenu: FC<IHeaderMenuProp> = props => {
  const { showBranch } = props

  // * menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        sx={{ color: 'white' }}
      >
        Sale
      </Button>

      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        sx={{ color: 'white' }}
      >
        Buy
      </Button>

      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'white' }}
      >
        Our Branch
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {showBranch &&
          showBranch.map((branch, index) => {
            return (
              <MenuItem key={index} onClick={handleClose}>
                {branch.suburb}
              </MenuItem>
            )
          })}
      </Menu>

      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        sx={{ color: 'white' }}
      >
        Our Team
      </Button>

      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        sx={{ color: 'white' }}
      >
        About Us
      </Button>

      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        sx={{ color: 'white' }}
      >
        Contact Us
      </Button>
    </Box>
  )
}

export default memo(HeaderMenu)
