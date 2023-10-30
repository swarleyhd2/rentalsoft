import React, { useState } from 'react'
import { Box, Modal, Paper, Container, Grid } from '@mui/material'
import { CreateAddress } from './ServerForm'

export default function NewAddressModal(props={customerID, open, handleClose}) {
    const CreateAddressWithCustomerID = CreateAddress.bind(null, props.customerID)
  return (
    <Modal
        open={props.open}
        onClose={props.handleClose}
    >
      <Container maxWidth='md'>
        <Grid rowSpacing={3}>
          <Paper justifyContent='center' alignItems='center' >
          <Box justifyContent='center' alignItems='center' minHeight='80vh' sx={{marginTop:'10%'}}>
            <button onClick={props.handleClose}>Close</button>
            <h2>test</h2>
            </Box>
            </Paper>
        </Grid>
      </Container>
    </Modal>
  )
}
