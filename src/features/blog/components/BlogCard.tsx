import type { Post } from 'contentlayer/generated'
import { ContentCard } from '@/features/content'

// ─── Component ────────────────────────────────────────────────────────────────

interface BlogCardProps {
    post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <ContentCard
            title={post.title}
            description={post.description}
            href={post.url}
            image={post.image}
            date={post.date}
            author={post.author}
            category={post.category}
            tags={post.tags}
            locale={post.locale}
        />
    )
}
