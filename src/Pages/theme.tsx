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
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        fontSize: '0.8rem'
                    }
                }
            },

           /* MuiPaper: {
                styleOverrides: {
                    elevation1: {
                        width: '80%',
                        height: '50%',
                        alignItems: 'right',
                    }
                }
            }
            */
     
        }

        

});

export default theme;



