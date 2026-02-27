'use client'

import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import NoSsr from '@mui/material/NoSsr'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import type { Experience } from 'contentlayer/generated'

import ExperienceItem from './ExperienceItem'

// ─── Component ────────────────────────────────────────────────────────────────

interface ExperienceTimelineProps {
    experiences: Experience[]
    presentLabel?: string
    showEllipsis?: boolean
}

export default function ExperienceTimeline({
    experiences,
    presentLabel,
    showEllipsis = false,
}: ExperienceTimelineProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <NoSsr>
            <Timeline position={isMobile ? 'right' : 'alternate'}>
                {experiences.map((exp) => (
                    <TimelineItem key={exp.slug}>
                        <TimelineOppositeContent
                            color="text.secondary"
                            variant="h6"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            {exp.period}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector sx={{ backgroundColor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{
                                pb: 4,
                                gap: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'revert',
                                p: 2,
                            }}
                        >
                            <ExperienceItem experience={exp} presentLabel={presentLabel} />
                        </TimelineContent>
                    </TimelineItem>
                ))}

                {showEllipsis && (
                    <TimelineItem>
                        <TimelineOppositeContent
                            color="text.secondary"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            ...
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography color="text.secondary">...</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )}
            </Timeline>
        </NoSsr>
    )
}
