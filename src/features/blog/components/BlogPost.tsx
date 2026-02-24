import { ContentView } from '@/features/content'
import type { PostWithNav } from '../api/blog'

// ─── Component ────────────────────────────────────────────────────────────────

interface BlogPostProps {
    post: PostWithNav
}

export default function BlogPost({ post }: BlogPostProps) {
    return (
        <ContentView
            title={post.title}
            description={post.description}
            content={post.body.raw}
            date={post.date}
            author={post.author}
            category={post.category}
            tags={post.tags}
            image={post.image}
            previous={post.previous}
            next={post.next}
            locale={post.locale}
        />
    )
}
