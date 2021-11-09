import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Drawer from '@mui/material/Drawer'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'

import { FC, useState } from 'react'
import { IBranch } from '../type.d'
import colorList from '../constant/colorList'
import { setLocalStorage } from '../utils/_utils'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

interface IHeaderProps {
  branchesList: Array<IBranch>
  setBranch: (id: number) => void
}

const Header: FC<IHeaderProps> = props => {
  const { branchesList, setBranch } = props

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {branchesList?.map((branch, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              setBranch(branch.id)
              setLocalStorage('selectedBranch', branch.id)
            }}
          >
            <ListItemIcon>
              <LocationOnRoundedIcon color={colorList[index]} />
            </ListItemIcon>
            <ListItemText primary={branch.suburb} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Buy', 'Rent'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Your Save', 'Your Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Projects', 'About Us', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{ color: 'white' }}
              onClick={toggleDrawer('left', true)}
            />
            <Drawer
              anchor="left"
              open={state['left']}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'white' }}
          >
            Seven
          </Typography>

          <Button color="inherit" sx={{ color: 'white' }}>
            <span>LOGIN</span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
