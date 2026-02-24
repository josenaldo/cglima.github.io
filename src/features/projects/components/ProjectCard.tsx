import GitHub from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import type { Project } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            {project.image && (
                <CardMedia
                    component="img"
                    height={180}
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                </Typography>

                {project.tags && project.tags.length > 0 && (
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                        {project.tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                variant="outlined"
                                sx={{ fontSize: '0.7rem' }}
                            />
                        ))}
                    </Stack>
                )}
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                <Box sx={{ flexGrow: 1 }} />
                {project.repositoryUrl && (
                    <Tooltip title="Repository">
                        <IconButton
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="View repository"
                        >
                            <GitHub fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
                {project.projectUrl && (
                    <Tooltip title="Live project">
                        <IconButton
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="View project"
                        >
                            <OpenInNewIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </CardActions>
        </Card>
    )
}
