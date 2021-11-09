import { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { IAgent, IProperty } from '../../type.d'
import Button from '@mui/material/Button'
import CardDisplay from '../CardDisplay'

interface ITabDisplayPanelProps {
  value: number
  index: number
  agents: Array<IAgent>
  data: Array<IProperty>
}

const TabDisplayPanel: FC<ITabDisplayPanelProps> = props => {
  const { value, index, data, agents } = props

  const [loadMore, setLoadMore] = useState(1)
  const [temData, setTemData] = useState([] as Array<IProperty>)

  // todo -> get the first 6 properties
  useEffect(() => {
    setTemData(data.slice(0, 6))
  }, [data])

  // todo -> use click 'load more' button, add 6 more properties in 'temData'
  useEffect(() => {
    setTemData(prev => {
      return prev.concat(data.slice(loadMore * 6, (loadMore + 1) * 6))
    })
  }, [loadMore])

  // todo -> button shows 'no more'
  const showButtonStyle = () => {
    if (temData.length !== data.length) {
      return (
        <Button
          variant="contained"
          onClick={() => {
            setLoadMore(prev => {
              return prev + 1
            })
          }}
        >
          Load More
        </Button>
      )
    } else {
      return (
        <Button
          disabled
          variant="contained"
          onClick={() => {
            setLoadMore(prev => {
              return prev + 1
            })
          }}
        >
          No More
        </Button>
      )
    }
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ margin: '20px auto' }}
    >
      {value === index && (
        <Box>
          <Grid container spacing={2} textAlign="center">
            {temData.map((property, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <CardDisplay data={property} agents={agents} />
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{ margin: '20px auto', textAlign: 'center' }}>
            {showButtonStyle()}
          </Box>
        </Box>
      )}
    </div>
  )
}

export default TabDisplayPanel
