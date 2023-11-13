import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export default function CustomSnackbar(props={open: false,severity:'error', message:'', handleClose}) {

    const vertical = 'top'
    const horizontal = 'center'


    return (
        <Snackbar anchorOrigin={{vertical, horizontal}} open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
            <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}