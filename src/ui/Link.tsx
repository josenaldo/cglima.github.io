'use client'

import React from 'react'

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

import { Link as IntlLink } from '@/i18n/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

type IntlHref = React.ComponentProps<typeof IntlLink>['href']

interface LinkProps extends Omit<MuiLinkProps, 'href'> {
    href: IntlHref
    locale?: string
    external?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Link({
    href,
    locale,
    external,
    children,
    ...rest
}: LinkProps) {
    if (external) {
        return (
            <MuiLink
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                {...rest}
            >
                {children}
            </MuiLink>
        )
    }

    return (
        <MuiLink
            component={IntlLink}
            href={href}
            locale={locale}
            {...(rest as object)}
        >
            {children}
        </MuiLink>
    )
}
