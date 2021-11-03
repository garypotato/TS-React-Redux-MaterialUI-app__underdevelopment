import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import { FC } from 'react'

interface ISliderInputProps {
  label: string
  value: number
  bottomLine?: boolean
  setValue: (value: number) => void
}

const marks = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' }
]

export const SliderInput: FC<ISliderInputProps> = props => {
  const { label, setValue, value, bottomLine } = props

  // todo -> add style and border bottom line
  let sx = {}
  if (bottomLine !== false) {
    Object.assign(sx, { borderBottom: '1px solid #9499a0' })
  }

  return (
    <Grid item xs={12} sx={sx}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {label}
        </Grid>

        <Grid item xs={12}>
          <Slider
            step={1}
            max={6}
            marks={marks}
            defaultValue={value}
            onChange={(event, value) => setValue(value as number)}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
