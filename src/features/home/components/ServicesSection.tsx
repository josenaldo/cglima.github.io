import { ServiceList } from '@/features/services'
import Section from '@/ui/Section'
import type { Service } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServicesSectionProps {
    services: Service[]
    title: string
    subtitle: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection({
    services,
    title,
    subtitle,
}: ServicesSectionProps) {
    if (services.length === 0) return null

    return (
        <Section title={title} subtitle={subtitle}>
            <ServiceList services={services} />
        </Section>
    )
}
