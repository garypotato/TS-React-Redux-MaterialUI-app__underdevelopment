import { FC, ReactNode } from 'react'
import Grid from '@mui/material/Grid'

interface IInputFromFooterProps {
  children: ReactNode
}

const InputFormFooter: FC<IInputFromFooterProps> = props => {
  const { children } = props
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-evenly">
        {children}
      </Grid>
    </Grid>
  )
}
export default InputFormFooter
