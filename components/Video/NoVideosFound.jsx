import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function NoVideosFound() {
    return (
        <Grid
            container
            height="80vh"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={6} md={4}>
                <Box>
                    <img
                        alt="No videos found"
                        src="/assets/icons/search/videos_not_found.svg"
                        width="100%"
                        height="300px"
                    />
                </Box>

                <Typography
                    fontSize="22px"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ py: 2 }}
                >
                    No videos found
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NoVideosFound;
