'use client'
import { Button, Card, FormControl, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function page() {
    const [inputFields, setInputFields] = useState([{part:''},{part:''},{part:''},{part:''},{part:''},])
    const poNumber = 1;

    const addFields = () => {
        let newField = { part: ''}
        setInputFields([...inputFields, newField])
    }
    return (
        <>
        <Paper>
            <h1>New Purchase Order {poNumber}</h1>
            <form>
                {inputFields.map((input, index) => {
                    return (
                        <div key = {index}>
                            <TextField
                                name="part"
                                variant="outlined"
                                placeholder="Part Number"
                            />
                        </div>
                    )
                })}
                <p>
                    <Button onClick={addFields} variant="outlined">Add Rows</Button>
                    <Button onClick={addFields} variant="contained">Save</Button>
                </p>
            </form>
            
        </Paper>
        </>
  )
}
