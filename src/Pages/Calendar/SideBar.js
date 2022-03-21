import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import {useState, React} from 'react'
import './Styles/SideBar.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SideBar = () => {

  const [checkedStatus, setCheckedStatus] = useState('');
  
      return (
        <>    
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 1" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 2" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 3" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 4" />
      </FormGroup>
        </>
      )
    };
    
    export default SideBar;