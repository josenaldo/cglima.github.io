import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import MDXContent from '../MDXContent'

describe('MDXContent', () => {
    it('renders markdown text as HTML', () => {
        render(<MDXContent content="# Hello World" />)
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Hello World'
        )
    })

    it('renders paragraphs', () => {
        render(<MDXContent content="A simple paragraph." />)
        expect(screen.getByText('A simple paragraph.')).toBeInTheDocument()
    })

    it('renders bold text', () => {
        render(<MDXContent content="**bold text**" />)
        expect(screen.getByText('bold text')).toBeInTheDocument()
    })
})
