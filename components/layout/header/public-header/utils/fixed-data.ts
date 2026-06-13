import { Briefcase, Cpu, Flashlight, Palette } from "lucide-react"

export const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Courses',
        link: '/courses'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Become an Instructor',
        link: '/become-instructor'
    },
]

export const currencies = ["usd", "egp"]
export const languages = ["english", "arabic"]

export const staticDropdown = [
    {
        value: "Development",
        Icon: Cpu,
        subValues: [
            { subValue: "development 1", href: "/category/development/dev1" },
            { subValue: "development 2", href: "/category/development/dev1" }
        ]
    },
    {
        value: "Medicine",
        Icon: Briefcase,
        subValues: [
            { subValue: "development 1", href: "/category/development/dev1" },
            { subValue: "development 2", href: "/category/development/dev1" }
        ]
    },
    {
        value: "Art",
        Icon: Palette,
        subValues: [
            { subValue: "development 1", href: "/category/development/dev1" },
            { subValue: "development 2", href: "/category/development/dev1" }
        ]
    },
    {
        value: "Science",
        href: "/category/Science",
        Icon: Flashlight,
    },
]