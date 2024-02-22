"use client";

import OMAppBar from "@/components/AppBar";
import SearchField from "@/components/SearchField";
import VideoGrid from "@/components/VideoGrid";
import SearchContextProvider from "@/context/SearchContext";
import theme from "@/mui/theme";
import { ThemeProvider } from "@emotion/react";

export default function Home({ }) {
  return (
    <ThemeProvider theme={theme}>
      <SearchContextProvider>
        <OMAppBar />
        <SearchField />
        <VideoGrid />
      </SearchContextProvider>
    </ThemeProvider>
  );
}
