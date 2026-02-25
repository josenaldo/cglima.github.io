import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import type { Skill } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface SkillGroupProps {
    level: string
    levelLabel: string
    skills: Skill[]
}

export default function SkillGroup({ levelLabel, skills }: SkillGroupProps) {
    if (skills.length === 0) return null

    return (
        <Box>
            <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'primary.main',
                    fontSize: '0.85rem',
                }}
            >
                {levelLabel}
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
                {skills.map((skill) => (
                    <Chip
                        key={skill.slug}
                        label={`${skill.name}${skill.firstContact ? ` (${skill.firstContact})` : ''}`}
                        variant="outlined"
                        sx={{ fontSize: '0.8rem' }}
                    />
                ))}
            </Stack>
        </Box>
    )
}
