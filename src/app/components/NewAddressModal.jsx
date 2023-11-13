import React, { useState } from 'react'
import { Box, Modal, Paper, Container, Grid, Button } from '@mui/material'
import { CreateAddress } from './ServerForms'

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
            <form action={CreateAddressWithCustomerID}>
              <input type='text' id='name' name='jobname' placeholder='Job Name'/>
              <input type='text' id='address' name='address' placeholder='Address'/>
              <input type='text' id='address2' name='address2' placeholder='Address Line 2'/>
              <input type='text' id='city' name='city' placeholder='City'/>
              <input type='text' id='state' name='state' placeholder='State'/>
              <Button type='submit'>Save</Button>
            </form>
            </Box>
            </Paper>
        </Grid>
      </Container>
    </Modal>
  )
}
