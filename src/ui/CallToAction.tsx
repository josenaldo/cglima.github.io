'use client'

import Button, { ButtonProps } from '@mui/material/Button'

import { Link } from '@/i18n/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CallToActionProps extends Omit<ButtonProps, 'component'> {
    href: string
    external?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

// MUI Button polymorphic typing requires casting when using custom components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnyButton = Button as any

export default function CallToAction({
    href,
    external,
    children,
    variant = 'contained',
    ...rest
}: CallToActionProps) {
    if (external) {
        return (
            <AnyButton
                variant={variant}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...rest}
            >
                {children}
            </AnyButton>
        )
    }

    return (
        <AnyButton variant={variant} component={Link} href={href} {...rest}>
            {children}
        </AnyButton>
    )
}
