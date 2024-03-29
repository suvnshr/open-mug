import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {
    const [query, setQuery] = useState("");

    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            {children}
        </SearchContext.Provider>
    );
}
