import React, { useContext } from "react";
import videoData from "@/data/video.json";
import VideoGridPlayer from "./VideoGridPlayer";
import { SearchContext } from "@/context/SearchContext";
import { Grid } from "@mui/material";

function searchFunction(query) {
    return function (el) {
        return (
            el.title.includes(query) ||
            el.description.includes(query) ||
            el.subtitle.includes(query)
        );
    };
}

function VideoGrid() {
    const { query, setQuery } = useContext(SearchContext);

    const filteredVideos = !query
        ? videoData
        : videoData.filter(searchFunction(query));

    return (
        <Grid container sx={{ mt: 2, px: 2 }} spacing={3}>
            {filteredVideos.map((data, index) => (
                <Grid
                    sm={6}
                    md={4}
                    lg={4}
                    item
                    key={`video-player-${index}`}
                >
                    <VideoGridPlayer {...data} videoIndex={index} />
                </Grid>
            ))}
        </Grid>
    );
}

export default VideoGrid;
