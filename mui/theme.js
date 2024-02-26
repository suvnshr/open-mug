import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepOrange, deepPurple, purple } from '@mui/material/colors';

const FONT_FAMILY = '"Plus Jakarta Sans", sans-serif!important';

let theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[800],
        },

        secondary: {
            main: purple[100]
        }
    },
    typography: {
        fontFamily: FONT_FAMILY,
        h1: {
            fontFamily: FONT_FAMILY
        },
        h2: {
            fontFamily: FONT_FAMILY
        },
        h3: {
            fontFamily: FONT_FAMILY
        },
        h4: {
            fontFamily: FONT_FAMILY
        },
        h5: {
            fontFamily: FONT_FAMILY
        },
        h6: {
            fontFamily: FONT_FAMILY
        }
    }
});


theme = responsiveFontSizes(theme);

export default theme;