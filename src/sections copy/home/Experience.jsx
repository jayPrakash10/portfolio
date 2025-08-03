import { Box, Chip, Link, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from "@mui/lab";

// Material Icons
import { History, Link as LinkIcon, LocationOn } from "@mui/icons-material";

// Custom Components
import Section from "../../components/Section";
import SectionHeader from "../../components/SectionHeader";

// Misc
import { resumeData } from "../../data/resumeData";
import { calculateTimePeriod, formatDuration } from "../../utils/dateUtils";

const Experience = () => {
  const { experience } = resumeData;

  return (
    <Section id="experience">
      <Box sx={{ py: { xs: 2, md: 12 } }}>
        <SectionHeader title="Experience" />

        <Stack mt={10}>
          {experience.map((item) => (
            <ExperienceCard
              key={item.company}
              position={item.position}
              company={item.company}
              location={item.location}
              website={item.website}
              duration={item.duration.duration}
              startDate={item.duration.start}
              endDate={item.duration.end}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </Stack>
      </Box>
    </Section>
  );
};

const ExperienceCard = ({
  position,
  company,
  location,
  website,
  duration,
  startDate,
  endDate,
  description,
  skills,
}) => {
  const { years, months } = calculateTimePeriod(startDate, endDate);

  return (
    <Timeline
      sx={{
        py: 0.5,
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.25,
        },
      }}
    >
      <TimelineItem sx={{ minHeight: "150px" }}>
        <TimelineOppositeContent>
          <Typography variant="h5" mb={1}>
            {position}
          </Typography>
          <Typography variant="h6">{duration}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack gap={2} pb={4}>
            <Typography variant="h5">{company}</Typography>
            {(location || website) && (
              <Stack direction="row" gap={2} flexWrap="wrap">
                {location && (
                  <EChip icon={<LocationOn fontSize="small" />}>
                    {location}
                  </EChip>
                )}
                {website && (
                  <EChip icon={<LinkIcon fontSize="small" />}>
                    <Link
                      href={website}
                      target="_blank"
                      sx={{ color: "currentColor" }}
                    >
                      {website}
                    </Link>
                  </EChip>
                )}
                {(years || months) && (
                  <EChip icon={<History fontSize="small" />}>
                    {formatDuration({ years, months })}
                  </EChip>
                )}
              </Stack>
            )}
            {description && (
              <Typography variant="body1" component="div" fontSize={{ xs: "1rem", md: "1.25rem" }}>
                {description}
              </Typography>
            )}
            {skills && (
              <Stack direction="row" gap={2} flexWrap="wrap">
                {skills.map((skill) => (
                  <Chip key={skill} color="primary" label={skill} />
                ))}
              </Stack>
            )}
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const EChip = ({ children, icon }) => {
  return (
    <Chip
      label={children}
      variant="outlined"
      icon={icon}
      color="currentColor"
      sx={{
        color: "currentColor",
        font0Weight: 600,
        py: 0,
        height: "1.75rem",
        fontSize: "0.875rem",
      }}
    />
  );
};

export default Experience;
