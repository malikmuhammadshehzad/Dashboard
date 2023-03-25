
import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidenav from './Sidenav'
 
 
 


function Setting() {
  return (
  <>
       <Box sx={{ display: 'flex' }}>
        <Sidenav/>
      <Typography variant='h3' >Setting</Typography>  
      </Box>

  </>
  )
}

export default Setting