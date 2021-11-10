import Button, { ButtonProps } from '@mui/material/Button'
import { FC, memo } from 'react'
import Grid from '@mui/material/Grid'

interface IButtonProps extends ButtonProps {
  icon: React.ReactNode
  text: string
}

const ButtonIcon: FC<IButtonProps> = props => {
  const { icon, text, ...restPros } = props
  return (
    <Grid item xs={6} textAlign="center">
      <Button variant="contained" size="small" endIcon={icon} {...restPros}>
        {text}
      </Button>
    </Grid>
  )
}

export default memo(ButtonIcon)
