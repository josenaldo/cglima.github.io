import Image, { ImageProps } from 'next/image'
import Box from '@mui/material/Box'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ResponsiveImageProps extends Omit<ImageProps, 'fill'> {
    aspectRatio?: string
    borderRadius?: number | string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ResponsiveImage({
    aspectRatio = '16/9',
    borderRadius = 1,
    alt,
    ...rest
}: ResponsiveImageProps) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                aspectRatio,
                borderRadius,
                overflow: 'hidden',
            }}
        >
            <Image fill alt={alt} style={{ objectFit: 'cover' }} {...rest} />
        </Box>
    )
}
