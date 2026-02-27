import type { SvgIconComponent } from '@mui/icons-material'
import ArticleIcon from '@mui/icons-material/Article'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import PeopleIcon from '@mui/icons-material/People'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import PresentationIcon from '@mui/icons-material/Slideshow'
import StarIcon from '@mui/icons-material/Star'
import WorkIcon from '@mui/icons-material/Work'

import AppConfig from './AppConfig'

export interface NavItem {
    key: string
    href: string
    icon: SvgIconComponent
}

// Registry of all available nav items keyed by their route key.
// Order and visibility come from AppConfig.navigation in site/config.json.
const navRegistry: Record<string, NavItem> = {
    home: { key: 'home', href: '/', icon: HomeIcon },
    blog: { key: 'blog', href: '/blog', icon: ArticleIcon },
    projects: { key: 'projects', href: '/projects', icon: StarIcon },
    experiences: { key: 'experiences', href: '/experiences', icon: WorkIcon },
    skills: { key: 'skills', href: '/skills', icon: SettingsIcon },
    courses: { key: 'courses', href: '/courses', icon: MenuBookIcon },
    services: { key: 'services', href: '/services', icon: PeopleIcon },
    presentations: { key: 'presentations', href: '/presentations', icon: PresentationIcon },
    publications: { key: 'publications', href: '/publications', icon: ArticleIcon },
    search: { key: 'search', href: '/search', icon: SearchIcon },
    contact: { key: 'contact', href: '/contact', icon: ContactMailIcon },
}

// Build the final nav list from config:
// - order comes from AppConfig.navigation array
// - items with visible: false are excluded
// - unknown keys are silently ignored
export const navItems: NavItem[] = AppConfig.navigation
    .filter((entry) => entry.visible && navRegistry[entry.key])
    .map((entry) => navRegistry[entry.key])
