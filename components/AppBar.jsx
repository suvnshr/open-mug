import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function OMAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        OpenMug
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
