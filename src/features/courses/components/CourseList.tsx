import Stack from '@mui/material/Stack'

import type { Course } from 'contentlayer/generated'
import CourseCard from './CourseCard'

interface CourseListProps {
    courses: Course[]
    locale?: string
}

export default function CourseList({ courses, locale }: CourseListProps) {
    return (
        <Stack spacing={2}>
            {courses.map((course) => (
                <CourseCard key={course.slug} course={course} locale={locale} />
            ))}
        </Stack>
    )
}
