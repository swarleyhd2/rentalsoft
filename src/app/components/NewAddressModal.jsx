import React, { useState } from 'react'
import { Box, Modal } from '@mui/material'
import { CreateAddress } from './ServerForm'

export default function NewAddressModal(customerID) {
    const CreateAddressWithCustomerID = CreateAddress.bind(null, customerID)
    const [open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box>
            
        </Box>
    </Modal>
  )
}
