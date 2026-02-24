import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import ContentMeta from './ContentMeta'
import ContentNavButton from './ContentNavButton'
import MDXContent from './MDXContent'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavTarget {
    url: string
    title?: string
}

interface ContentViewProps {
    title: string
    description?: string
    content: string
    date?: string | Date
    author?: string
    category?: string
    tags?: string[]
    image?: string
    previous?: NavTarget | null
    next?: NavTarget | null
    locale?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContentView({
    title,
    description,
    content,
    date,
    author,
    category,
    tags,
    image,
    previous,
    next,
    locale,
}: ContentViewProps) {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
            {/* Header */}
            <Box component="header" sx={{ mb: 4 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                >
                    {title}
                </Typography>

                {description && (
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        gutterBottom
                        sx={{ fontWeight: 400 }}
                    >
                        {description}
                    </Typography>
                )}

                <ContentMeta
                    date={date}
                    author={author}
                    category={category}
                    tags={tags}
                    locale={locale}
                />
            </Box>

            {/* Cover image */}
            {image && (
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: { xs: 200, md: 400 },
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 4,
                    }}
                />
            )}

            {/* Markdown body */}
            <Box component="article">
                <MDXContent content={content} />
            </Box>

            {/* Prev / Next navigation */}
            {(previous !== undefined || next !== undefined) && (
                <ContentNavButton
                    previous={previous}
                    next={next}
                    locale={locale}
                />
            )}
        </Container>
    )
}
