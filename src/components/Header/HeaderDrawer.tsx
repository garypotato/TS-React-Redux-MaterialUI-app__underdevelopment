import Drawer from '@mui/material/Drawer'
import { FC, memo, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import colorList from '../../constant/colorList'
import { IBranch } from '../../type.d'
import { setLocalStorage } from '../../utils/_utils'
import useFindBranchIndex from '../../ReactHook/useFindBranchIndex'

interface IHeaderDrawerProps {
  showBranch: IBranch[]
  setBranch: (id: number) => void
  selectedBranch: number
}

const HeaderDrawer: FC<IHeaderDrawerProps> = props => {
  const { showBranch, setBranch, selectedBranch } = props

  // todo -> find out the selected branch index
  let selectedBranchIndex = useFindBranchIndex(showBranch, selectedBranch)

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

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  type Anchor = 'top' | 'left' | 'bottom' | 'right'

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {showBranch?.map((branch, index) => (
          <ListItem
            selected={index === selectedBranchIndex}
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
    <IconButton
      size="large"
      edge="start"
      aria-label="menu"
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon sx={{ color: 'white' }} onClick={toggleDrawer('left', true)} />

      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </IconButton>
  )
}

export default memo(HeaderDrawer)
