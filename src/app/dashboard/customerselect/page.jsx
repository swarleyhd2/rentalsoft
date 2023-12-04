'use client'
import { useEffect, useState } from "react";
import { getCustomerList } from "@/firebase/getData";
import { Card, FormControl, Grid, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";

export default function page() {
    const [ customerListItems, setCustomerListItems ] = useState()
    const [ newCustomerItem, setNewCustomerItem ] = useState()
    const [query, setQuery] = useState()
    useEffect(() => {
        getCustomerList().then((res) => {
            if (res.error == null){
                const snapshot = res.result;
                setCustomerListItems(snapshot.docs.map(doc => <ListItem divider key={doc.id}><ListItemButton><Link href={{pathname:`/dashboard/customer/${doc.id}`,query:{name:doc.data().name, address:doc.data().address}}}>{doc.data().name}</Link></ListItemButton></ListItem>)) 
                setNewCustomerItem(<ListItem divider><ListItemButton href="#"><ListItemText primary="Add New Customer"/></ListItemButton></ListItem>)
            }
        })
    }, [])



    return(
        <>
            <Grid container justifyContent='center' paddingTop='20px'>
                <Grid item xs={12} md={6} lg={4} sx={{'justifyContent':'center'}}>
                    <Card>  
                        <FormControl fullWidth>
                            <OutlinedInput
                                id="search"
                                startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                                sx={{marginTop:'20px'}}
                            />
                        </FormControl>     
                        <List>
                            {newCustomerItem}
                            {customerListItems}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}