import { FC, memo, ReactNode } from 'react'
import Grid from '@mui/material/Grid'

interface IInputFromBodyProps {
  children: ReactNode
}

const InputFormBody: FC<IInputFromBodyProps> = props => {
  const { children } = props

  return (
    <Grid item xs={12}>
      <Grid container rowSpacing={1}>
        {children}
      </Grid>
    </Grid>
  )
}

export default memo(InputFormBody)
