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

export interface NavItem {
    key: string
    href: string
    icon: SvgIconComponent
}

export const navItems: NavItem[] = [
    { key: 'home', href: '/', icon: HomeIcon },
    { key: 'blog', href: '/blog', icon: ArticleIcon },
    { key: 'projects', href: '/projects', icon: StarIcon },
    { key: 'experiences', href: '/experiences', icon: WorkIcon },
    { key: 'skills', href: '/skills', icon: SettingsIcon },
    { key: 'courses', href: '/courses', icon: MenuBookIcon },
    { key: 'services', href: '/services', icon: PeopleIcon },
    { key: 'presentations', href: '/presentations', icon: PresentationIcon },
    { key: 'publications', href: '/publications', icon: ArticleIcon },
    { key: 'search', href: '/search', icon: SearchIcon },
    { key: 'contact', href: '/contact', icon: ContactMailIcon },
]
