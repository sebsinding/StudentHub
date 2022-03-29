//Timeline mui
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
//Accordion mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Styles/LessonPlan.css';


function skipLastTimelineItem(number) {
  if (number != weeks.length) {
    return <TimelineConnector />;
  } else {
    return;
  }
}

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const timelineItems = weeks.map((number) =>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      {skipLastTimelineItem(number)}
    </TimelineSeparator>
    <TimelineContent>Week {number}</TimelineContent>
  </TimelineItem>
);

const accordionItems = weeks.map((number) =>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>)


const MyLessonPlanPage = () => {
  return (
    <>
      <div className='row'>
        <Timeline>
          {timelineItems}
        </Timeline>
        {accordionItems}
      </div>
    </>
  )
};

export default MyLessonPlanPage;