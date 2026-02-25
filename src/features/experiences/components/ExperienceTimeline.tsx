import Stack from '@mui/material/Stack'

import type { Experience } from 'contentlayer/generated'

import ExperienceItem from './ExperienceItem'

// ─── Component ────────────────────────────────────────────────────────────────

interface ExperienceTimelineProps {
    experiences: Experience[]
    presentLabel?: string
}

export default function ExperienceTimeline({ experiences, presentLabel }: ExperienceTimelineProps) {
    return (
        <Stack spacing={3}>
            {experiences.map((exp) => (
                <ExperienceItem key={exp.slug} experience={exp} presentLabel={presentLabel} />
            ))}
        </Stack>
    )
}
