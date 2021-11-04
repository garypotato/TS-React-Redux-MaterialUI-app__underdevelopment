import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import { FC } from 'react'
import Grid from '@mui/material/Grid'

interface ISelectInputProps {
  data: Array<string>
  text: string
  value: string
  SelectFunction: (city: string) => void
}

const SelectInput: FC<ISelectInputProps> = props => {
  const { data, text, value, SelectFunction } = props

  return (
    <Grid item xs={12}>
      <TextField
        id="filled-select-currency"
        select
        label={text}
        value={value}
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          SelectFunction(event.target.value)
        }
        sx={{
          width: '100%'
        }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  )
}

export default SelectInput
