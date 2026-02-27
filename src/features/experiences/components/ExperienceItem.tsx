import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import type { Experience } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface ExperienceItemProps {
    experience: Experience
    presentLabel?: string
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <>
            <Typography variant="h6" component="h3">
                {experience.company}: {experience.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {experience.description}
            </Typography>
            <Box>
                <Chip
                    component="span"
                    label={experience.location}
                    size="small"
                    variant="outlined"
                    color="primary"
                />
            </Box>
        </>
    )
}
