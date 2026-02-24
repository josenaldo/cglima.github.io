import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import { routing } from '@/i18n/routing'
import { getServices, ServiceList } from '@/features/services'
import Section from '@/ui/Section'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'metadata.services' })
    return { title: t('title'), description: t('description') }
}

interface ServicesPageProps {
    params: Promise<{ locale: string }>
}

export default async function ServicesPage({ params }: ServicesPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'services' })
    const services = getServices(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')}>
            <ServiceList services={services} />
        </Section>
    )
}
