import { SearchContext } from "@/context/SearchContext";
import { Search } from "@mui/icons-material";
import { Container, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useContext } from "react";

function SearchField() {
    const { query, setQuery } = useContext(SearchContext);

    return (
        <Container maxWidth="sm">
            <Grid
                container
                sx={{ mt: 2 }}
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    label="Search Open Source Videos"
                    fullWidth
                    onChange={(ev) => setQuery(ev.target.value)}
                    value={query}
                    autoFocus
                    placeholder="Eg: Big Buck Bunny, Google"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Grid>
        </Container>
    );
}

export default SearchField;
