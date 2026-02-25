import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import ThemeRegistry, { useColorMode } from '../ThemeRegistry'

// ─── Helper component to read context ────────────────────────────────────────

function ModeDisplay() {
    const { mode, toggleColorMode } = useColorMode()
    return (
        <div>
            <span data-testid="mode">{mode}</span>
            <button type="button" onClick={toggleColorMode}>
                toggle
            </button>
        </div>
    )
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ThemeRegistry', () => {
    it('renders children', () => {
        render(
            <ThemeRegistry>
                <span>hello</span>
            </ThemeRegistry>
        )
        expect(screen.getByText('hello')).toBeInTheDocument()
    })

    it('toggles color mode when toggle is called', async () => {
        const user = userEvent.setup()

        render(
            <ThemeRegistry>
                <ModeDisplay />
            </ThemeRegistry>
        )

        const modeEl = screen.getByTestId('mode')
        const initialMode = modeEl.textContent

        await act(async () => {
            await user.click(screen.getByRole('button', { name: /toggle/i }))
        })

        expect(modeEl.textContent).not.toBe(initialMode)
    })
})
