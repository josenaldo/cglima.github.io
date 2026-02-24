import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import type { Service } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent sx={{ p: 4 }}>
                {service.image && (
                    <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{ width: 64, height: 64, mb: 2, objectFit: 'contain' }}
                    />
                )}

                <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                    {service.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
