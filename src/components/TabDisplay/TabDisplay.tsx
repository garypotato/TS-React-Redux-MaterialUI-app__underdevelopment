import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { FC, memo, useState } from 'react'
import { IAgent, newListElement } from '../../type.d'
import TabDisplayPanel from './TabDisplayPanel'

interface ITabDisplayProps {
  data: Array<newListElement>
  agents: Array<IAgent>
}

const TabDisplay: FC<ITabDisplayProps> = props => {
  // todo -> control tab
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // todo -> receive prop and create a new 'rent list' and 'sale list'
  const { data, agents } = props

  return (
    <Box sx={{ width: '85%', margin: '30px auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {data.map((tab, index) => {
            return <Tab label={tab.cate} key={index} />
          })}
        </Tabs>
      </Box>

      {data.map((tabPanel, index) => {
        return (
          <TabDisplayPanel
            key={index}
            value={value}
            index={index}
            data={tabPanel.properties}
            agents={agents}
          />
        )
      })}
    </Box>
  )
}

export default memo(TabDisplay)
