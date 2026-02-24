import Grid from '@mui/material/Grid'

import type { Project } from 'contentlayer/generated'
import ProjectCard from './ProjectCard'

// ─── Component ────────────────────────────────────────────────────────────────

interface ProjectListProps {
    projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <Grid container spacing={3}>
            {projects.map((project) => (
                <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    )
}
