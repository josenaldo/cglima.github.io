import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import { routing } from '@/i18n/routing'
import { getAllCourses, CourseList } from '@/features/courses'
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
    const t = await getTranslations({ locale, namespace: 'metadata.courses' })
    return { title: t('title'), description: t('description') }
}

interface CoursesPageProps {
    params: Promise<{ locale: string }>
}

export default async function CoursesPage({ params }: CoursesPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'courses' })
    const courses = getAllCourses(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')} maxWidth="md">
            <CourseList courses={courses} locale={locale} />
        </Section>
    )
}
