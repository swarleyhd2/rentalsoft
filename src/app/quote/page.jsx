'use client'
import { Button, Container, Divider, FormControl, FormGroup, FormLabel, Paper, Select, TextField, MenuItem, InputLabel } from '@mui/material'
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
export default function page() {
  return (
    <>
        <Container>
            <h1>Create Quote</h1>
            <Paper>
            <FormControl margin="normal">
                <FormGroup>
                   <InputLabel id='customer-select-label' size='small'>Customer Name</InputLabel>
                    <Select size='small' margin='dense' labelId='customer-select-label' label='Customer Name' variant='outlined'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField size='small' margin='dense' label='Customer Email'></TextField>
                    <TextField size='small' margin='normal' label='Site Name'></TextField>
                </FormGroup>
                <FormGroup>
                    <h3>Equipment</h3>
                    <TextField
                        select
                        label="Equipment Type"
                        size='small'
                    >
                        {equipmentTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormGroup>
                <FormGroup>
                    <h3>Rates</h3>

                    <TextField size='small' margin='normal' label='Day'></TextField>

                    <TextField size='small' margin='normal' label='Week'></TextField>

                    <TextField size='small' margin='normal' label='4 Week'></TextField>

                    <TextField size='small' margin='normal' label='Trucking (one way)'></TextField>
                </FormGroup>
                <Button variant="contained" fullWidth>Submit</Button>

            </FormControl>

            </Paper>
    </Container>
    </>
  )
}
