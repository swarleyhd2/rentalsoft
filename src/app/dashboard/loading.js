import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Skeleton variant="rectangular" width='90vw' height='80vh'/>
            </div>
        </>
    )
}