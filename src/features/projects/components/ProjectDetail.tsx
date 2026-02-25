import GitHub from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { MDXContent } from '@/features/content'

import type { Project } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface ProjectDetailProps {
    project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
            {project.image && (
                <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                        width: '100%',
                        height: { xs: 200, md: 400 },
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 4,
                    }}
                />
            )}

            <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
                {project.title}
            </Typography>

            <Typography variant="h6" color="text.secondary" gutterBottom fontWeight={400}>
                {project.description}
            </Typography>

            {project.tags && project.tags.length > 0 && (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ my: 2 }}>
                    {project.tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Stack>
            )}

            <Stack direction="row" spacing={2} sx={{ my: 3 }}>
                {project.repositoryUrl && (
                    <Button
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHub />}
                        variant="outlined"
                    >
                        Repository
                    </Button>
                )}
                {project.projectUrl && (
                    <Button
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<OpenInNewIcon />}
                        variant="contained"
                    >
                        Live Project
                    </Button>
                )}
            </Stack>

            <Box component="article" sx={{ mt: 4 }}>
                <MDXContent content={project.body.raw} />
            </Box>
        </Container>
    )
}
