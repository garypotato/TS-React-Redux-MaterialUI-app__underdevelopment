import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import StoreIcon from '@mui/icons-material/Store'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { newListElement } from '../type.d'

import { FC, useState } from 'react'
import Carousel from './Carousel/Carousel'

interface ITabDisplayProps {
  data: Array<newListElement>
}

const TabDisplay: FC<ITabDisplayProps> = props => {
  const { data } = props

  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        margin: '110px 5vw 20px 5vw',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: '90%',
          margin: '0 auto',
          borderRadius: '3px',
          padding: '5px 11px',
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: `linear-gradient(60deg, #1e88e5, #1976d2)`,
          boxShadow: `0 12px 20px -10px rgb(0 0 0 / 28%), 0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(0 0 0 / 20%)`,
          zIndex: 1
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered={true}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent'
            }
          }}
        >
          {data.map((tab, index) => {
            return (
              <Tab
                icon={tab.cate === 'rent' ? <VpnKeyIcon /> : <StoreIcon />}
                iconPosition="start"
                label={tab.cate}
                key={index}
                sx={{
                  color: 'white',
                  opacity: '0.7',
                  '&.Mui-selected': {
                    opacity: '1',
                    borderRadius: '10px',
                    backgroundImage: `linear-gradient(
                    rgba(255, 255, 255, 0.2),
                    rgba(255, 255, 255, 0.2)
                    )`,
                    color: 'white'
                  }
                }}
              />
            )
          })}
        </Tabs>
      </Box>

      {data.map((tab, index) => {
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            key={`key-${index}`}
            style={{
              boxShadow:
                '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
              height: '50vh',
              borderRadius: '6px',
              background: 'white'
            }}
          >
            {value === index && (
              <Box>
                <Carousel data={data[index]} />
              </Box>
            )}
          </div>
        )
      })}
    </Box>
  )
}

export default TabDisplay
