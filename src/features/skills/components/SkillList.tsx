import Stack from '@mui/material/Stack'

import type { SkillsByLevel, SkillLevel } from '../api/skills'
import SkillGroup from './SkillGroup'

// ─── Component ────────────────────────────────────────────────────────────────

interface SkillListProps {
    skillsByLevel: SkillsByLevel
    levelLabels: Record<SkillLevel, string>
}

const LEVEL_ORDER: SkillLevel[] = ['expert', 'advanced', 'intermediate', 'basic']

export default function SkillList({ skillsByLevel, levelLabels }: SkillListProps) {
    return (
        <Stack spacing={4}>
            {LEVEL_ORDER.map((level) => (
                <SkillGroup
                    key={level}
                    level={level}
                    levelLabel={levelLabels[level]}
                    skills={skillsByLevel[level] ?? []}
                />
            ))}
        </Stack>
    )
}
