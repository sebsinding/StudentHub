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

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const numberOfAccordions = [1, 2, 3];



function skipLastTimelineItem(number) {
  if (number != weeks.length) {
    return <TimelineConnector />;
  } else {
    return;
  }
}

const rowItems = weeks.map((number) =>
  <div className="row">
    <div>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  />
          {skipLastTimelineItem(number)}
        </TimelineSeparator>
        <TimelineContent>Week {number}</TimelineContent>
      </TimelineItem>
    </div>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Topic of today is..</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>

        </AccordionDetails>
      </Accordion>
    </div>
    {/*{accordions}*/}
  </div>
);

const accordions = numberOfAccordions.map(() =>

  <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Topic of today is..</Typography>

      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>

      </AccordionDetails>
    </Accordion>
  </div>



);





const MyLessonPlanPage = () => {
  return (
    <>
     <Timeline position="left">
        {rowItems}
      </Timeline>
    </>
  )
};

export default MyLessonPlanPage;