'use client'

import React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// ─── Custom components ────────────────────────────────────────────────────────

const markdownComponents: Components = {
    // Headings
    h1: ({ children, ...props }) => (
        <Typography variant="h3" component="h1" gutterBottom {...props}>
            {children}
        </Typography>
    ),
    h2: ({ children, ...props }) => (
        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }} {...props}>
            {children}
        </Typography>
    ),
    h3: ({ children, ...props }) => (
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3 }} {...props}>
            {children}
        </Typography>
    ),
    h4: ({ children, ...props }) => (
        <Typography variant="h6" component="h4" gutterBottom sx={{ mt: 2 }} {...props}>
            {children}
        </Typography>
    ),

    // Paragraph
    p: ({ children, ...props }) => (
        <Typography variant="body1" paragraph {...props}>
            {children}
        </Typography>
    ),

    // Links
    a: ({ href, children, ...props }) => (
        <MuiLink href={href} {...props}>
            {children}
        </MuiLink>
    ),

    // Blockquote
    blockquote: ({ children }) => (
        <Box
            component="blockquote"
            sx={{
                borderLeft: 4,
                borderColor: 'primary.main',
                pl: 2,
                py: 0.5,
                my: 2,
                color: 'text.secondary',
                fontStyle: 'italic',
            }}
        >
            {children}
        </Box>
    ),

    // Horizontal rule
    hr: () => <Divider sx={{ my: 3 }} />,

    // Code blocks
    pre: ({ children }) => (
        <Box
            component="pre"
            sx={{
                overflowX: 'auto',
                bgcolor: 'background.paper',
                borderRadius: 1,
                p: 2,
                my: 2,
                fontSize: '0.875rem',
                '& code': { background: 'none', p: 0 },
            }}
        >
            {children}
        </Box>
    ),

    // Inline code
    code: ({ children, ...props }) => (
        <Box
            component="code"
            sx={{
                bgcolor: 'action.hover',
                borderRadius: 0.5,
                px: 0.75,
                py: 0.25,
                fontSize: '0.85em',
                fontFamily: 'monospace',
            }}
            {...props}
        >
            {children}
        </Box>
    ),

    // Table wrapper
    table: ({ children }) => (
        <Box sx={{ overflowX: 'auto', my: 2 }}>
            <Box
                component="table"
                sx={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    '& th, & td': {
                        border: 1,
                        borderColor: 'divider',
                        p: 1.5,
                        textAlign: 'left',
                    },
                    '& th': {
                        bgcolor: 'background.paper',
                        fontWeight: 700,
                    },
                    '& tr:nth-of-type(even)': {
                        bgcolor: 'action.hover',
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    ),

    // Lists
    ul: ({ children }) => (
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            {children}
        </Box>
    ),
    ol: ({ children }) => (
        <Box component="ol" sx={{ pl: 3, mb: 2 }}>
            {children}
        </Box>
    ),
    li: ({ children }) => (
        <Box component="li" sx={{ mb: 0.5 }}>
            <Typography variant="body1" component="span">
                {children}
            </Typography>
        </Box>
    ),

    // Image
    img: ({ src, alt, ...props }) => (
        <Box
            component="img"
            src={src}
            alt={alt}
            sx={{ maxWidth: '100%', height: 'auto', borderRadius: 1, my: 2 }}
            {...props}
        />
    ),
}

// ─── Component ────────────────────────────────────────────────────────────────

interface MDXContentProps {
    content: string
}

export default function MDXContent({ content }: MDXContentProps) {
    return (
        <Box sx={{ lineHeight: 1.8 }}>
            <ReactMarkdown
                components={markdownComponents}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeRaw,
                    [
                        rehypeExternalLinks,
                        {
                            target: '_blank',
                            rel: ['nofollow', 'noopener', 'noreferrer'],
                        },
                    ],
                    rehypePrism,
                ]}
                remarkRehypeOptions={{ allowDangerousHtml: true }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    )
}
