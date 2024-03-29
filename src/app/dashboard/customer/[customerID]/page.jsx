'use client'
import { getCustomer } from '@/firebase/getData'
import { Button, Card, Grid, Stack, Paper, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConstructionIcon from '@mui/icons-material/Construction';
import PlaceIcon from '@mui/icons-material/Place';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ExpandMore } from '@mui/icons-material';

export default function page({ params }) {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const [ history, setHistory ] = useState()

  return (
    <Grid container justifyContent='center' minHeight='100vh'>
      <Grid item xs={12}>
      <Link href='/dashboard/customerselect'><Button variant='text'><ChevronLeftIcon fontSize='inherit'/>Customer Select</Button></Link>
      </Grid>
      <Grid item xs={10} md={8} lg={2}>
          <Stack spacing={2}>
            <h2 style={{'text-align':'center'}}>{name}</h2>
            <Link href='#'><Button variant='contained' sx={{'width':'100%', 'font-weight':'bold', 'justifyContent': 'center'}}><CalendarMonthIcon fontSize='large'/> New Order</Button></Link>
            <Link href='#'><Button variant='contained' sx={{'width':'100%', 'font-weight':'bold'}}><RequestQuoteIcon fontSize='large'/> Create Quote</Button></Link>
            <Link href='#'><Button variant='contained' sx={{'width':'100%', 'font-weight':'bold'}}><PlaceIcon fontSize='large'/> Request Move</Button></Link>
            <Link href='#'><Button variant='contained' sx={{'width':'100%', 'font-weight':'bold'}}><ConstructionIcon fontSize='large'/> Request Service</Button></Link>
          </Stack>
      </Grid>
      <Grid item xs={12} justifyContent='center'>
        <Grid item xs={12} md={8} lg={2} justifyContent='center'>
          <Stack>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore/>}
              >
                Open Quotes
              </AccordionSummary>
              <AccordionDetails>
                Open Quotes
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore/>}
              >
                Recent Rates
              </AccordionSummary>
              <AccordionDetails>
               Recent Rates
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore/>}
              >
                On Rent
              </AccordionSummary>
              <AccordionDetails>
                On Rent
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore/>}
              >
                History
              </AccordionSummary>
              <AccordionDetails>
                History
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
    
  )
}
