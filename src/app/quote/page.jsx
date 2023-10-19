'use client'
import { Button, Container, Divider, FormControl, FormGroup, FormLabel, Paper, Select, TextField, MenuItem, InputLabel, Grid, InputBase, Input, OutlinedInput, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

const equipmentTypes = [
    {
        value: '19scissor',
        label: "19' Scissor Lift"
    },
    {
        value: '26scissor',
        label: "26' Scissor Lift"
    }
]
const handleCustomerChange = () => {

}
const handleShippingChange = () => {

}
const handleContactChange = () => {

}
export default function page() {
  return (
    <>
        <Container maxWidth='md'>
            
            

                <h1>Create Quote</h1>
                <Grid xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="customer">Customer</InputLabel>
                        <Select
                            labelId='customer'
                            id='customer-select'
                            label='Customer'
                            onChange={handleCustomerChange}
                            fullWidth
                        >
                            <MenuItem Value={10}>Customers go here</MenuItem>
                            <MenuItem Value={1}>+ Add Customer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                <InputLabel id="shipping">Shipping Info</InputLabel>
                    <Select
                        labelId='shipping'
                        id='shipping-select'
                        label='Shipping Info'
                        onChange={handleShippingChange}
                        fullWidth
                    >
                        <MenuItem Value={10}>address go here</MenuItem>
                        <MenuItem Value={1}>+ Add Address</MenuItem>
                    </Select>
                </Grid>
                <Grid>
                    <InputLabel id="contact">Contact</InputLabel>
                        <Select
                            labelId='contact'
                            id='contact-select'
                            label='Contact'
                            onChange={handleContactChange}
                            fullWidth
                        >
                            <MenuItem Value={10}>contacts go here</MenuItem>
                            <MenuItem Value={1}>+ Add Contact</MenuItem>
                        </Select>
                </Grid>
                <Grid>
                    <OutlinedInput id='start-date' type='date'/>
                    <OutlinedInput id='end-date' type='date'/>
                </Grid>
                <Grid>
                    <InputLabel id="equipment">Equipment Type</InputLabel>
                    <Select
                        labelId='equipment'
                        id='equipment-select'
                        label='Equipment Type'
                        fullWidth
                    >
                        <MenuItem Value={10}>Equipment goes here</MenuItem>
                    </Select>
                </Grid>
                <Grid>
                    <OutlinedInput id='day-rate' type='text' placeholder='Day'/>
                    <OutlinedInput id='week-rate' type='text' placeholder='Week'/>
                    <OutlinedInput id='4-week-rate' type='text' placeholder='4 Week'/>
                </Grid>
                <Grid>
                    <Button type='button'>Add Another Unit</Button>
                </Grid>
                <Grid>
                    <OutlinedInput id='trucking-delivery' type='text' placeholder='Delivery'/>
                    <OutlinedInput id='trucking-return' type='text' placeholder='Return'/>
                </Grid>
                <Grid>
                    <OutlinedInput id='environmental' type='text' placeholder='Environmental Fee'/>
                    <OutlinedInput id='fuel' type='text' placeholder='Fuel'/>
                    <OutlinedInput id='other' type='text' placeholder='Other'/>
                    <FormControlLabel control={<Checkbox/>} label='Damage Waiver 15%'/>
                    <FormControlLabel control={<Checkbox/>} label='Tax Exempt'/>
                </Grid>
                <Grid>
                    <Button type='submit' variant='contained'>Send</Button>
                </Grid>
            
    </Container>
    </>
  )
}
