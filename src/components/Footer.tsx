import { Box } from "@mui/material"
import type React from "react"

export const Footer = ({ footerRef }: { footerRef: React.RefObject<HTMLDivElement | null> }) => {
    return(
        <Box ref={footerRef} sx={{minHeight: "50px", backgroundColor: "blue"}}>
        </Box>
    )
}