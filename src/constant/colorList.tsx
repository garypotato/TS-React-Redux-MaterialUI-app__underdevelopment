import { OverridableStringUnion } from '@mui/types'
type color = OverridableStringUnion<
  | 'inherit'
  | 'action'
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
>
const colorList: Array<color> = [
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'action',
  'disabled'
]

export default colorList
