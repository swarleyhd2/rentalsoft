'use client'
import { Option, Button, Container, Divider, FormControl, FormGroup, FormLabel, Paper, Select, TextField, MenuItem, InputLabel, Grid, InputBase, Input, OutlinedInput, FormControlLabel, Checkbox, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { CreateQuote } from '@/components/ServerForms'
import NewAddressModal from '@/components/NewAddressModal'
import { getCustomerList, getShippingList, getContactList } from '@/firebase/getData'
import { useEffect } from 'react'
import CustomSnackbar from '@/components/CustomSnackbar'
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
    const [defaultRates, setDefaultRates] = useState({dayRate:null, weekRate:null, FourWeekRate:null})
    const [ unitCount, setUnitCount ] = useState(1)
    const [ customerMenuItems, setCustomerMenuItems ] = useState([])
    const [ shippingMenuItems, setShippingMenuItems ] = useState([])
    const [ contactMenuItems, setContactMenuItems ] = useState([])
    const [ addressModalOpen, setAddressModalOpen ] = useState(false)
    const [ snackbar, setSnackbar ] = useState({ open: false,severity:'error', message:''})
    
    const auth = getAuth()
    const user = auth.currentUser.email
    const createQuoteFormWithUser = CreateQuote.bind(null, user)
    const closeAddressModal = () => {
        setAddressModalOpen(false)
    }
    const handleCustomerChange = (event) => {
        setSnackbar({ open:true,severity:'success', message:'way to go!'})
        setCustomer(event.target.value);
        getShippingList(event.target.value).then((res) => {
            const snapshot = res.result;
            if (snapshot.docs.length > 0) {
                setShippingMenuItems(snapshot.docs.map(doc => <MenuItem  key={doc.id} value={doc.id}>{doc.data().name}</MenuItem>))
            } else {setShippingMenuItems([<MenuItem key={0} value={null}>No Jobsites Available</MenuItem>])}
        });
        getContactList(event.target.value).then((res) => {
            const snapshot = res.result;
            if (snapshot.docs.length > 0) {
                setContactMenuItems(snapshot.docs.map(doc => <MenuItem  key={doc.id} value={doc.id}>{doc.data().name}</MenuItem>))
            } else {setContactMenuItems([<MenuItem key={0} value={null}>No Contacts Available</MenuItem>])}
        });
    }
    const handleShippingChange = (event) => {
        if (event.target.value == 0) {
            setAddressModalOpen(true)
        }
    }
    const handleContactChange = (event) => {
        setContact(event.target.value);
    }
    const handleEquipmentChange = (event) => {
        setEquipment(event.target.value);
    }
    const snackbarHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({open:false})
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
        <CustomSnackbar open={snackbar.open} severity={snackbar.severity} message={snackbar.message} handleClose={snackbarHandleClose}/>
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
                        name='customer'
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
                    name='shipping'
                    label='Shipping Info'
                    value={shipping}
                    onChange={handleShippingChange}
                    fullWidth
                >
                    <MenuItem value={0}>+ Add Address</MenuItem>
                    {shippingMenuItems}
                </Select>
            </Grid>
            <Grid>
                <InputLabel id="contact">Contact</InputLabel>
                    <Select
                        labelId='contact'
                        id='contact-select'
                        name='contact'
                        label='Contact'
                        value={contact}
                        onChange={handleContactChange}
                        fullWidth
                    >
                        <MenuItem value={1}>+ Add Contact</MenuItem>
                        {contactMenuItems}
                    </Select>
            </Grid>
            <Grid>
                <OutlinedInput id='start-date' type='date' name='startDate' xs={4}/>
                <OutlinedInput id='end-date' type='date' name='endDate' xs={4} />
            </Grid>
            <Grid>
                <InputLabel id="equipment">Equipment Type</InputLabel>
                <Select
                    labelId='equipment'
                    id='equipment-select'
                    name='equipment'
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
                <OutlinedInput id='day-rate' type='text' name='dayRate' placeholder='Day'/>
                <OutlinedInput id='week-rate' type='text' name='weekRate' placeholder='Week'/>
                <OutlinedInput id='4-week-rate' type='text' name='4WeekRate'placeholder='4 Week'/>
            </Grid>
            <Grid>
                <Button type='button'>Add Another Unit</Button>
            </Grid>
            <Grid>
                <OutlinedInput id='trucking-delivery' type='text' name='delivery' placeholder='Delivery'/>
                <OutlinedInput id='trucking-return' type='text' name='return' placeholder='Return'/>
            </Grid>
            <Grid>
                <OutlinedInput id='environmental' type='text' name='environmental' placeholder='Environmental Fee'/>
                <OutlinedInput id='fuel' type='text' name='fuel' placeholder='Fuel'/>
                <OutlinedInput id='other' type='text' name='other' placeholder='Other'/>
                <FormControlLabel control={<Checkbox/>} label='Damage Waiver 15%' name='waiver'/>
                <FormControlLabel control={<Checkbox/>} label='Tax Exempt' name='tax'/>
            </Grid>
            <Grid>
                <Button type='submit' variant='contained'>Send</Button>
            </Grid>
            </form>
        </Container>
    </>
  )
}
