import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SideBar = () => {
    
  
      return (
        <>    
        <Box>
        <Checkbox {...label} defaultChecked />
        </Box>
        </>
      )
    };
    
    export default SideBar;