import { Typography } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'
import BackButton from '../../components/BackButton'

const DienstDakdekken = () => {
  return (
    <div>
      <Hero>
        <BackButton />
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Dakdekken
          </Typography>
      </Hero>
    </div>
  )
}

export default DienstDakdekken