import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { newListElement } from '../../type.d'
import { FC } from 'react'

import './Carousel.css'
import { Divider } from '@mui/material'
import { Box } from '@mui/system'

import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined'
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined'

interface ICarouselProps {
  data: newListElement
}

const Carousel: FC<ICarouselProps> = props => {
  const { data } = props

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <>
      <Slider {...settings}>
        {data.properties.map((property, index) => {
          return (
            <div>
              <div
                key={index}
                style={{
                  height: '50vh',
                  backgroundImage: `url(${property.media[0].url})`,
                  borderRadius: '6px',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  position: 'relative'
                }}>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.6)
                  )`,
                    color: 'white',
                    width: '100%',
                    // padding: '10px',
                    borderRadius: '0 0 6px 6px',
                    textAlign: 'center'
                  }}>
                  <Box sx={{ fontSize: '18px' }}>
                    {property.addressParts.displayAddress.split('NSW')[0]}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BedroomParentOutlinedIcon
                        fontSize="small"
                        sx={{ marginRight: '5px' }}
                      />
                      {property.bedrooms}
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ backgroundColor: 'white' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BathroomOutlinedIcon
                        fontSize="small"
                        sx={{ marginRight: '5px' }}
                      />
                      {property.bathrooms}
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ backgroundColor: 'white' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <DirectionsCarFilledOutlinedIcon
                        fontSize="small"
                        sx={{ marginRight: '5px' }}
                      />
                      {property.carspaces}
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default Carousel
