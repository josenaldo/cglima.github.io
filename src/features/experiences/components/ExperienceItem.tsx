import BusinessIcon from '@mui/icons-material/Business'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import type { Experience } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface ExperienceItemProps {
    experience: Experience
    presentLabel?: string
}

export default function ExperienceItem({
    experience,
    presentLabel = 'Atual',
}: ExperienceItemProps) {
    return (
        <Paper
            elevation={2}
            sx={{
                p: 3,
                position: 'relative',
                borderLeft: 4,
                borderColor: 'primary.main',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: 4 },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <BusinessIcon color="primary" sx={{ mt: 0.5 }} />

                <Box sx={{ flex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 0.5,
                        }}
                    >
                        <Typography variant="h6" component="h3" fontWeight={600}>
                            {experience.title}
                        </Typography>
                        <Chip
                            label={experience.period}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    </Box>

                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {experience.company} — {experience.location}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {experience.description}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}
