import Grid from '@mui/material/Grid'

import type { Service } from 'contentlayer/generated'
import ServiceCard from './ServiceCard'

interface ServiceListProps {
    services: Service[]
}

export default function ServiceList({ services }: ServiceListProps) {
    return (
        <Grid container spacing={3}>
            {services.map((service, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    )
}
