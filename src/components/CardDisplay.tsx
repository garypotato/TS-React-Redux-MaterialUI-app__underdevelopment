import { FC, useCallback } from 'react'
import { IAgent, IProperty } from '../type.d'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded'
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded'
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'

interface ICardDisplayProps {
  data: IProperty
  agents: Array<IAgent>
}

const CardDisplay: FC<ICardDisplayProps> = props => {
  let { data: property, agents } = props

  const getAgentAvatar = useCallback(
    (id: number) => {
      let agent = agents.find(agent => agent.id === id)
      return agent?.photo
    },
    [agents]
  )

  return (
    <Card sx={{ maxWidth: 345, minHeight: 170 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'primary' }}
            aria-label="recipe"
            src={getAgentAvatar(property.advertiserIdentifiers.contactIds[0])}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={property && property.addressParts.displayAddress.split(',')[0]}
        subheader={
          property && property.addressParts.displayAddress.split(',')[1]
        }
      />

      <Link to={`/property?${property.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={property && property.media[0].url}
          alt="Paella dish"
        />
      </Link>

      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            variant="contained"
            endIcon={<BedroomParentRoundedIcon />}
            size="small"
          >
            {property && property.bedrooms}
          </Button>
          <Button
            variant="contained"
            endIcon={<BathtubRoundedIcon />}
            size="small"
          >
            {property && property.bathrooms}
          </Button>
          <Button
            variant="contained"
            endIcon={<DirectionsCarFilledRoundedIcon />}
            size="small"
          >
            {property && property.carspaces}
          </Button>
        </Box>

        <Divider sx={{ margin: '12px auto' }} />

        <Grid container>
          {property &&
            property.features &&
            property.features.map((feature, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Grid container>
                    <Grid item>
                      <Checkbox defaultChecked size="small" disabled />
                    </Grid>
                    <Grid item>
                      <p style={{ fontSize: '11px' }}>{feature}</p>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardDisplay
