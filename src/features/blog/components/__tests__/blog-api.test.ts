import { describe, expect, it, vi } from 'vitest'

import { getAllPosts, getAllPostsPaths, getPostBySlug, getSortedPosts } from '../../api/blog'

// Mock contentlayer/generated before importing our modules
vi.mock('contentlayer/generated', () => ({
    allPosts: [
        {
            title: 'Post 3 (newest)',
            description: 'Desc 3',
            date: '2024-03-01',
            author: 'Author',
            category: 'Tech',
            image: '/img/3.png',
            locale: 'pt',
            slug: 'post-3',
            url: '/blog/post-3',
            body: { raw: '# Post 3' },
            tags: ['tag1'],
        },
        {
            title: 'Post 1 (oldest)',
            description: 'Desc 1',
            date: '2024-01-01',
            author: 'Author',
            category: 'Tech',
            image: '/img/1.png',
            locale: 'pt',
            slug: 'post-1',
            url: '/blog/post-1',
            body: { raw: '# Post 1' },
            tags: [],
        },
        {
            title: 'Post 2',
            description: 'Desc 2',
            date: '2024-02-01',
            author: 'Author',
            category: 'Tech',
            image: '/img/2.png',
            locale: 'pt',
            slug: 'post-2',
            url: '/blog/post-2',
            body: { raw: '# Post 2' },
            tags: [],
        },
        {
            title: 'EN Post',
            description: 'English post',
            date: '2024-01-15',
            author: 'Author',
            category: 'Tech',
            image: '/img/en.png',
            locale: 'en',
            slug: 'en-post',
            url: '/blog/en-post',
            body: { raw: '# EN Post' },
            tags: [],
        },
    ],
}))

describe('blog api', () => {
    it('getAllPosts returns all posts when no locale filter', () => {
        expect(getAllPosts()).toHaveLength(4)
    })

    it('getAllPosts filters by locale', () => {
        const ptPosts = getAllPosts('pt')
        expect(ptPosts).toHaveLength(3)
        ptPosts.forEach((p) => expect(p.locale).toBe('pt'))
    })

    it('getSortedPosts returns posts in descending date order', () => {
        const posts = getSortedPosts('pt')
        expect(posts[0].title).toBe('Post 3 (newest)')
        expect(posts[2].title).toBe('Post 1 (oldest)')
    })

    it('getSortedPosts respects limit', () => {
        expect(getSortedPosts('pt', 2)).toHaveLength(2)
    })

    it('getAllPostsPaths returns correct urls', () => {
        const paths = getAllPostsPaths('pt')
        expect(paths).toContain('/blog/post-1')
        expect(paths).toContain('/blog/post-2')
        expect(paths).toContain('/blog/post-3')
    })

    it('getPostBySlug returns post with navigation', () => {
        const post = getPostBySlug('post-2', 'pt')
        expect(post).toBeDefined()
        expect(post?.title).toBe('Post 2')
        expect(post?.previous).toBeDefined()
        expect(post?.next).toBeDefined()
    })

    it('getPostBySlug returns undefined for unknown slug', () => {
        expect(getPostBySlug('nonexistent', 'pt')).toBeUndefined()
    })
})
