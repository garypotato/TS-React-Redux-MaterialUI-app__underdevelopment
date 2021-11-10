import { Favorite } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import { List, ListItem } from '@mui/material'
import { memo } from 'react'

const useStyles = makeStyles({
  footer: {
    textAlign: 'center'
  },
  footer_content_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  copyRight_container: {
    marginTop: '10px'
  },
  footer_icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  },
  footer_link: { textDecoration: 'none' },
  listContainer: {
    display: 'flex'
  }
})

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.footer_content_container}>
        <div className={classes.copyRight_container}>
          &copy; {2021} , made with <Favorite className={classes.footer_icon} />{' '}
          by{' '}
          <a href="/" target="_blank" className={classes.footer_link}>
            GaryC
          </a>{' '}
          for a better web.
        </div>
        <List className={classes.listContainer}>
          <ListItem>
            <FacebookIcon />
          </ListItem>
          <ListItem>
            <InstagramIcon />
          </ListItem>
          <ListItem>
            <TwitterIcon />
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default memo(Footer)
