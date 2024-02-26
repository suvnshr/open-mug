import { Box, Card, Typography } from "@mui/material";
import React from "react";

function VideoGridPlayer({
    title,
    description,
    sources,
    thumb,
    subtitle,
    videoIndex,
}) {
    return (
        <Card
            elevation={2}
            sx={{
                p: 0,
                m: 1,
                borderRadius: "8px",
                height: "500px",
            }}
        >
            <video
                alt={title}
                // poster={thumb}
                style={{ borderRadius: "8px", objectFit: "cover" }}
                width="100%"
                height={"400px"}
                controls
                controlsList="nodownload"
                preload="metadata"
                loop
                // autoPlay
                muted
            >
                {sources.map((src, i) => (
                    <source
                        key={`video-${videoIndex}-source-${i}`}
                        src={src}
                        type={`video/${
                            src.split(".")[src.split(".").length - 1]
                        }`}
                    />
                ))}
                Your browser does not support the video tag.
            </video>

            <Typography sx={{ px: 2, pt: 2 }} variant="h6">
                {title}
            </Typography>
            <Typography
                color="text.secondary"
                sx={{ px: 2, pb: 2 }}
                variant="subtitle1"
            >
                {subtitle}
            </Typography>

            <Box sx={{ px: 2 }}>
                <Typography variant="body1" sx={{ pb: 2 }}>
                    {description}
                </Typography>
            </Box>
        </Card>
    );
}

export default VideoGridPlayer;
