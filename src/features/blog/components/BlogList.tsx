import Grid from '@mui/material/Grid'

import type { Post } from 'contentlayer/generated'
import BlogCard from './BlogCard'

// ─── Component ────────────────────────────────────────────────────────────────

interface BlogListProps {
    posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
    return (
        <Grid container spacing={3}>
            {posts.map((post) => (
                <Grid key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                    <BlogCard post={post} />
                </Grid>
            ))}
        </Grid>
    )
}
