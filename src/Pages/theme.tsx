import {createTheme} from '@mui/material';
import {red, orange, yellow} from '@mui/material/colors';

const primaryColor = red[700]
const secondaryColor = orange[500]

const theme = createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
        },
    
});

export default theme;