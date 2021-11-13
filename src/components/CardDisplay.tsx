import { FC, memo, useCallback } from 'react'
import { IAgent, IProperty } from '../type.d'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined'
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import Typography from '@mui/material/Typography'

interface ICardDisplayProps {
  data: IProperty
  agents: Array<IAgent>
}

const CardDisplay: FC<ICardDisplayProps> = props => {
  let { data: property, agents } = props

  const getAgentAvatar = useCallback(
    (id: number) => {
      let agent = agents && agents.find(agent => agent.id === id)
      return agent?.photo
    },
    [agents]
  )

  return (
    <Card sx={{ maxWidth: 345, minHeight: { sm: '528px' } }}>
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
            <FavoriteBorderIcon />
          </IconButton>
        }
        title={property && property.addressParts.displayAddress.split(',')[0]}
        subheader={
          property && property.addressParts.displayAddress.split(',')[1]
        }
      />

      <Link to={`/property?id=${property.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={property && property.media[0].url}
          alt="Paella dish"
        />
      </Link>

      <CardContent sx={{ padding: '16px 10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            disabled
            variant="contained"
            endIcon={<BedroomParentOutlinedIcon color="primary" />}
            size="small"
          >
            <Typography
              sx={{ fontSize: 14, color: 'primary.main' }}
              component="p"
            >
              {property && property.bedrooms}
            </Typography>
          </Button>
          <Button
            disabled
            variant="contained"
            endIcon={<BathroomOutlinedIcon color="primary" />}
            size="small"
          >
            <Typography
              sx={{ fontSize: 14, color: 'primary.main' }}
              component="p"
            >
              {property && property.bathrooms}
            </Typography>
          </Button>
          <Button
            disabled
            variant="contained"
            endIcon={<DirectionsCarOutlinedIcon color="primary" />}
            size="small"
          >
            <Typography
              sx={{ fontSize: 14, color: 'primary.main' }}
              component="p"
            >
              {property && property.carspaces}
            </Typography>
          </Button>
        </Box>

        <Divider sx={{ margin: '12px auto' }} />

        <Grid container>
          {property &&
            property.features &&
            property.features.map((feature, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Grid container alignItems="center">
                        <CheckBoxRoundedIcon color="primary" fontSize="small" />
                      </Grid>
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

export default memo(CardDisplay)
