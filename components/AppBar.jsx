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
                    <Typography variant="h5" component="div" fontWeight="700">
                        OpenMug
                    </Typography>
                    <Typography
                        component="div"
                        sx={{
                            ml: 3,
                            mt: 0.75,
                            pt: 1.5,
                            pb: 1.5,
                            fontWeight: "600",
                        }}
                        fontSize="15px"
                        color="secondary"
                    >
                        Browse, find & download
                        <br /> open source videos.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
