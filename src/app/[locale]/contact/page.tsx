import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { ReactNode } from 'react'

import AppConfig from '@/config/AppConfig'
import { routing } from '@/i18n/routing'
import Section from '@/ui/Section'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'metadata.contact' })
    return { title: t('title'), description: t('description') }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface ContactPageProps {
    params: Promise<{ locale: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'contact' })

    const { email, github, linkedin, twitter } = AppConfig.owner

    const links = [
        email && {
            label: t('email'),
            href: `mailto:${email}`,
            icon: <EmailIcon />,
        },
        github && {
            label: t('github'),
            href: github,
            icon: <GitHubIcon />,
        },
        linkedin && {
            label: t('linkedin'),
            href: linkedin,
            icon: <LinkedInIcon />,
        },
        twitter && {
            label: t('twitter'),
            href: twitter,
            icon: <XIcon />,
        },
    ].filter(Boolean) as { label: string; href: string; icon: ReactNode }[]

    return (
        <Section title={t('title')} subtitle={t('subtitle')} maxWidth="sm">
            {links.length > 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 4,
                    }}
                >
                    {links.map(({ label, href, icon }) => (
                        <Button
                            key={href}
                            variant="outlined"
                            size="large"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={icon}
                            sx={{ justifyContent: 'flex-start' }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
            ) : (
                <Typography color="text.secondary" sx={{ mt: 4 }}>
                    {t('noLinks')}
                </Typography>
            )}
        </Section>
    )
}
