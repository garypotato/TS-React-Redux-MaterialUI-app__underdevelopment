import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@mui/styles'
import { FC } from 'react'
import Grid from '@mui/material/Grid'

interface ISelectInputProps {
  data: Array<string>
  text: string
  value: string
  SelectFunction: (city: string) => void
}

const useStyles = makeStyles({
  select_style: {
    width: '100%'
  }
})

const SelectInput: FC<ISelectInputProps> = props => {
  const { data, text, value, SelectFunction } = props

  let classes = useStyles()

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
        className={classes.select_style}
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
