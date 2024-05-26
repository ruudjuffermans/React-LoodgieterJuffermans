import { Typography } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'

const OverMij = () => {
  return (
    <div>
      <Hero>
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Over Mij
          </Typography>
      </Hero>
    </div>
  )
}

export default OverMij