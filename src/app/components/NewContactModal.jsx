import React, { useState } from 'react'
import { Box, Modal } from '@mui/material'

export default function NewContactModal(customerID) {
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