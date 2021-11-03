import { FC } from 'react'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'

interface ISwitchInputProps {
  textAfter?: string
  textBefore?: string
  color?: string
  rentCheck: boolean
  setRentCheck: (check: boolean) => void
}

export const SwitchInput: FC<ISwitchInputProps> = props => {
  const { textAfter, textBefore, rentCheck, setRentCheck } = props

  const renderSwitchLabel = (text: string) => {
    if (text) {
      return (
        <Grid item xs={4} textAlign="center">
          <div>{text}</div>
        </Grid>
      )
    }
    return null
  }

  return (
    <Grid item xs={12} sx={{ borderBottom: '1px solid #9499a0' }}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {textBefore && renderSwitchLabel(textBefore)}

        <Grid item xs={4} textAlign="center">
          <Switch
            checked={rentCheck}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRentCheck(event.target.checked)
            }
          />
        </Grid>

        {textAfter && renderSwitchLabel(textAfter)}
      </Grid>
    </Grid>
  )
}
