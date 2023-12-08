'use client'
import { useEffect, useState } from "react";
import { getCustomerList } from "@/firebase/getData";
import { Card, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

export default function page() {
    const [ customerList, setCustomerList ] = useState([])
    const [ customerListItems, setCustomerListItems ] = useState()
    const [ newCustomerItem, setNewCustomerItem ] = useState()
    useEffect(() => {
        getCustomerList().then((res) => {
            if (res.error == null){
                const snapshot = res.result;
                setCustomerListItems(snapshot.docs.map(doc => <ListItem divider key={doc.data().id}><ListItemButton><Link href={{pathname:`/dashboard/customer/${doc.id}`,query:{name:doc.data().name, address:doc.data().address}}}>{doc.data().name}</Link></ListItemButton></ListItem>)) 
                setNewCustomerItem(<ListItem divider><ListItemButton href="#"><ListItemText primary="Add New Customer"/></ListItemButton></ListItem>)
            }
        })
    }, [])



    return(
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={12} md={6} lg={4} sx={{'justifyContent':'center'}}>
                    <Card>    
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