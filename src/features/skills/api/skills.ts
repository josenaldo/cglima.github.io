import { allSkills, type Skill } from 'contentlayer/generated'

export type SkillLevel = 'basic' | 'intermediate' | 'advanced' | 'expert'
export type SkillsByLevel = Record<SkillLevel, Skill[]>

export function getAllSkills(locale?: string): Skill[] {
    if (locale) {
        return allSkills.filter((s) => s.locale === locale)
    }
    return allSkills
}

export function getSkillsByLevel(locale?: string): SkillsByLevel {
    const skills = getAllSkills(locale)

    const grouped = skills.reduce<SkillsByLevel>(
        (acc, skill) => {
            const level = skill.level as SkillLevel
            if (!acc[level]) acc[level] = []
            acc[level].push(skill)
            return acc
        },
        { basic: [], intermediate: [], advanced: [], expert: [] }
    )

    // Sort each level by year of first contact
    ;(Object.keys(grouped) as SkillLevel[]).forEach((level) => {
        grouped[level].sort((a, b) => a.firstContact - b.firstContact)
    })

    return grouped
}
