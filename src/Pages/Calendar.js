import './Pages.css'; 
import calendarImg from '../Resources/calendar.png';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  MonthView,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-03-14';
const schedulerData = [
  { startDate: '2022-03-14T09:45', endDate: '2022-03-14T11:00', title: "Doctor's appointment" },
  { startDate: '2022-03-14T13:00', endDate: '2022-03-14T17:00', title: 'Front end web development' },
];

const Calendar = () => {
  return (
    <>    
    <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <MonthView
        startDayHour={7}
        endDayHour={18}
      />
      <Appointments />
      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <Appointments />
    </Scheduler>
  </Paper>
    </>
  )
};

export default Calendar;