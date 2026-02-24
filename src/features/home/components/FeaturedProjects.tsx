import Box from '@mui/material/Box'

import { ProjectList } from '@/features/projects'
import Section from '@/ui/Section'
import CallToAction from '@/ui/CallToAction'
import type { Project } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeaturedProjectsProps {
    projects: Project[]
    title: string
    subtitle: string
    viewAllLabel: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FeaturedProjects({
    projects,
    title,
    subtitle,
    viewAllLabel,
}: FeaturedProjectsProps) {
    if (projects.length === 0) return null

    return (
        <Section title={title} subtitle={subtitle} background="paper">
            <ProjectList projects={projects} />
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <CallToAction href="/projects" variant="outlined">
                    {viewAllLabel}
                </CallToAction>
            </Box>
        </Section>
    )
}
