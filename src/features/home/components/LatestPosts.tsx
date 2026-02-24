import Box from '@mui/material/Box'

import { BlogList } from '@/features/blog'
import Section from '@/ui/Section'
import CallToAction from '@/ui/CallToAction'
import type { Post } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

interface LatestPostsProps {
    posts: Post[]
    title: string
    subtitle: string
    viewAllLabel: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LatestPosts({
    posts,
    title,
    subtitle,
    viewAllLabel,
}: LatestPostsProps) {
    if (posts.length === 0) return null

    return (
        <Section title={title} subtitle={subtitle}>
            <BlogList posts={posts} />
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <CallToAction href="/blog" variant="outlined">
                    {viewAllLabel}
                </CallToAction>
            </Box>
        </Section>
    )
}
