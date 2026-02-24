import CertificateIcon from '@mui/icons-material/EmojiEvents'
import LinkIcon from '@mui/icons-material/Link'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import type { Course } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface CourseCardProps {
    course: Course
    locale?: string
    workloadLabel?: string
}

export default function CourseCard({
    course,
    locale = 'pt',
    workloadLabel = 'h',
}: CourseCardProps) {
    const dateLocale = locale === 'pt' ? ptBR : undefined
    const formattedDate = format(
        new Date(course.completionDate),
        'MMM yyyy',
        { locale: dateLocale }
    )

    return (
        <Paper
            elevation={2}
            sx={{
                p: 2.5,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { sm: 'center' },
                gap: 2,
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: 4 },
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                    {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.institution}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexShrink: 0,
                }}
            >
                <Chip label={formattedDate} size="small" variant="outlined" />
                <Chip
                    label={`${course.workload}${workloadLabel}`}
                    size="small"
                    color="primary"
                    variant="outlined"
                />

                {course.courseLink && (
                    <Tooltip title="Ver curso">
                        <IconButton
                            href={course.courseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="View course"
                        >
                            <LinkIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}

                {course.certificateLink && (
                    <Tooltip title="Ver certificado">
                        <IconButton
                            href={course.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="View certificate"
                        >
                            <CertificateIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>
        </Paper>
    )
}
