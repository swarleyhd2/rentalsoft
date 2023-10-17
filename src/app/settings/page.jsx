'use client'
import { Button } from "@mui/material"
import qbConnect from "@/intuit/qbconnect"
export default function Page() {

    return <>
        <Button onClick={()=> qbConnect()}></Button>
    </>
}