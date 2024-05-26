import { Box, Button, Container, Stack, Typography, alpha } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'

const DienstLoodZink = () => {
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
            Lood- & Zinkwerk
          </Typography>
      </Hero>
    </div>
  )
}

export default DienstLoodZink