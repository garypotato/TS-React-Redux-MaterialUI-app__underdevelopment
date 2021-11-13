import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { TMedia } from '../../type.d'
import { FC, memo, useCallback } from 'react'

import './Carousel.css'
import { Box } from '@mui/material'
import useMonitorClientWidth from '../../ReactHook/useMonitorClientWidth'

interface ICarouselProps {
  data: TMedia[]
}

const Carousel: FC<ICarouselProps> = props => {
  const { data } = props

  let ClientScreenLargerMedium = useMonitorClientWidth()

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  let sliderSetting = useCallback(() => {
    if (ClientScreenLargerMedium) {
      return Object.assign(settings, { arrows: false })
    } else {
      return Object.assign(settings, { arrows: true })
    }
  }, [ClientScreenLargerMedium])

  return (
    <>
      <Slider {...sliderSetting()}>
        {data &&
          data.map((image, index) => {
            return (
              <div key={index}>
                <Box
                  sx={{
                    height: { xs: '50vh', md: '80vh' },
                    backgroundImage: `url(${image.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'relative'
                  }}
                />
              </div>
            )
          })}
      </Slider>
    </>
  )
}

export default memo(Carousel)
