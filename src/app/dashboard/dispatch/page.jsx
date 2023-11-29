'use client'
import { Grid } from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";


export default function page() {
    const [ position, setPosition ] = useState({lat:41.562794, lng:-72.681610})
    
  return (
    <>
        <Grid container>
            <Grid item xs={12} md={4}>
                <Grid item xs={12}>
                    <h2>Unassigned</h2>
                </Grid>
                <Grid item xs={12}>
                    <h2>Pending Assignments</h2>
                </Grid>
                <Grid item xs={12}>
                    <h2>On Rent</h2>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
                <APIProvider apiKey={process.env.NEXT_PUBLIC_FIREBASE_API_KEY}>
                    <div style={{height: "100vh"}}>
                        <Map zoom={10} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID} disableDefaultUI={true}>

                        </Map>
                    </div>
                </APIProvider>
            </Grid>
        </Grid>
    </>
  )
}
