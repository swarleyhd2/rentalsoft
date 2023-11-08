'use client'
import { Option, Button, Container, Divider, FormControl, FormGroup, FormLabel, Paper, Select, TextField, MenuItem, InputLabel, Grid, InputBase, Input, OutlinedInput, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { CreateQuote } from '../../components/ServerForm'
import NewAddressModal from '../../components/NewAddressModal'
import { getCustomerList, getShippingList, getCustomerList } from '@/firebase/getData'
import { useEffect } from 'react'
const equipmentTypes =[
    {
        value: '19scissor',
        label: "19' Scissor Lift",
        lastPrices: {
            day: 125,
            week: 250,
            fourWeek: 500
        }
    },
    {
        value: '26scissor',
        label: "26' Scissor Lift",
        lastPrices: {
            day: 200,
            week: 300,
            fourWeek: 650
        }
    }
]

export default function page() {
    const [ customer, setCustomer ] = useState('')
    const [ shipping, setShipping ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ equipment, setEquipment ] = useState('')
    const [ lastDayRate, setLastDayRate ] = useState('')
    const [ lastWeekRate, setLastWeekRate ] = useState('')
    const [ lastFourWeekRate, setLastFourWeekRate ] = useState('')
    const [ unitCount, setUnitCount ] = useState(1)
    const [ customerMenuItems, setCustomerMenuItems ] = useState([])
    const [ shippingMenuItems, setShippingMenuItems ] = useState([])
    const [ contactMenuItems, setContactMenuItems ] = useState([])
    const [ addressModalOpen, setAddressModalOpen ] = useState(false)

    const auth = getAuth()
    const user = auth.currentUser.email
    const createQuoteFormWithUser = CreateQuote.bind(null, user)
    const closeAddressModal = () => {
        setAddressModalOpen(false)
    }
    const handleCustomerChange = (event) => {
        setCustomer(event.target.value);
        getShippingList(event.target.value).then((res) => {
            const snapshot = res.result;
            if (snapshot.docs.length > 0) {
                setShippingMenuItems(snapshot.docs.map(doc => <MenuItem  key={doc.id} value={doc.id}>{doc.data().name}</MenuItem>))
            } else {console.log('no docs here')}
        });
        getContactList(event.target.value).then((res) => {
            const snapshot = res.result;
            if (snapshot.docs.length > 0) {
                setContactMenuItems(snapshot.docs.map(docs => <MenuItem  key={doc.id} value={doc.id}>{doc.data().name}</MenuItem>))
            }
        });
    }
    const handleShippingChange = (event) => {
        if (event.target.value == 0) {
            setAddressModalOpen(true)
        }
    }
    const handleContactChange = (event) => {

    }
    const handleEquipmentChange = (event) => {

    }
    useEffect(() => {
        getCustomerList().then((res) => {
            if (res.error == null){
                const snapshot = res.result;
                setCustomerMenuItems(snapshot.docs.map(doc => <MenuItem  key={doc.id} value={doc.id}>{doc.data().name}</MenuItem>))    
            }
        })
    }, [])
    
  return  (
    <>
        {user}
        <Container maxWidth='md'>
            <NewAddressModal customerID={1} open={addressModalOpen} handleClose={closeAddressModal}/>
            <form action={createQuoteFormWithUser}>
            <h1>New Order</h1>
            <Grid>
                <FormControl fullWidth>
                    <InputLabel id="customer">Customer</InputLabel>
                    <Select
                        labelId='customer'
                        id='customer-select'
                        label='Customer'
                        value= {customer}
                        onChange={handleCustomerChange}
                        fullWidth
                    >
                        <MenuItem value={0}>+ Add Customer</MenuItem>
                        {customerMenuItems}
                        
                    </Select>
                </FormControl>
            </Grid>
            <Grid>
            <InputLabel id="shipping">Shipping Info</InputLabel>
                <Select
                    labelId='shipping'
                    id='shipping-select'
                    label='Shipping Info'
                    value={shipping}
                    onChange={handleShippingChange}
                    fullWidth
                >
                    <MenuItem value={10}>address go here</MenuItem>
                    <MenuItem value={0}>+ Add Address</MenuItem>
                </Select>
            </Grid>
            <Grid>
                <InputLabel id="contact">Contact</InputLabel>
                    <Select
                        labelId='contact'
                        id='contact-select'
                        label='Contact'
                        value={contact}
                        onChange={handleContactChange}
                        fullWidth
                    >
                        <MenuItem value={10}>contacts go here</MenuItem>
                        <MenuItem value={1}>+ Add Contact</MenuItem>
                    </Select>
            </Grid>
            <Grid>
                <OutlinedInput id='start-date' type='date' xs={4}/>
                <OutlinedInput id='end-date' type='date' xs={4} />
            </Grid>
            <Grid>
                <InputLabel id="equipment">Equipment Type</InputLabel>
                <Select
                    labelId='equipment'
                    id='equipment-select'
                    label='Equipment Type'
                    value={equipment}
                    fullWidth
                >
                        {equipmentTypes.map((option,index)=>
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        )}
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
            </form>
        </Container>
    </>
  )
}
