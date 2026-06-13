import { buildQueryHref } from "@/utils/build-query-href"
import { BarChart, Cpu, PenTool } from "lucide-react"
import { ReadonlyURLSearchParams } from "next/navigation"

export const suggestionsData = [
    "Developments",
    "UI/UX Design",
    "Marketing",
    "Programming",
    "Business",
]

export const sortByData = (searchParams: ReadonlyURLSearchParams) => [
    {
        value: "Trending",
        href: buildQueryHref(searchParams, "sort_by", "trending"),
    },
    {
        value: "Newest",
        href: buildQueryHref(searchParams, "sort_by", "newest"),
    },
    {
        value: "Oldest",
        href: buildQueryHref(searchParams, "sort_by", "oldest"),
    },
]

export const categoriesData = [
    {
        title: 'Developments',
        Icon: Cpu,
        contents: [
            {
                title: 'CI/CD',
                count: '152'
            },
            {
                title: 'UI/UX Design',
                count: '152'
            },
            {
                title: 'Marketing',
                count: '152'
            },
            {
                title: 'Sales',
                count: '152'
            }
        ]
    },
    {
        title: 'UI/UX Design',
        Icon: PenTool,
        contents: [
            {
                title: 'UI/UX Design',
                count: '152'
            },
            {
                title: 'Marketing',
                count: '152'
            }
        ]
    },
    {
        title: 'Marketing',
        Icon: BarChart,
        contents:
            [
                {
                    title: 'Marketing',
                    count: '152'
                },
                {
                    title: 'Marketing',
                    count: '152'
                }
            ]
    }
]
export const toolsData = [{
    title: 'Tools',
    contents: [
        {
            title: 'Git',
            count: '152'
        },
        {
            title: 'Docker',
            count: '152'
        },
        {
            title: 'Kubernetes',
            count: '152'
        },
        {
            title: 'Jenkins',
            count: '152'
        }
    ]
}]

export const ratingData = [
    {
        title: 'Rating',
        contents: [
            {
                title: '5',
                count: '152'
            },
            {
                title: '4',
                count: '152'
            },
            {
                title: '3',
                count: '152'
            },
            {
                title: '2',
                count: '152'
            },
            {
                title: '1',
                count: '152'
            }
        ]
    }
]

export const courseLevelData = [
    {
        title: 'Course Level',
        contents: [
            {
                title: 'Beginner',
                count: '152'
            },
            {
                title: 'Intermediate',
                count: '152'
            },
            {
                title: 'Advanced',
                count: '152'
            },
            {
                title: 'Expert',
                count: '152'
            }
        ]
    }
]

export const PriceRange = [
    {
        title: 'Price Range',
        contents: [
            {
                title: '100-200',
                count: '152'
            },  
            {
                title: '200-300',
                count: '152'
            },
            {
                title: '300-400',
                count: '152'
            },
            {
                title: '400-500',
                count: '152'
            },
            {
                title: '500-600',
                count: '152'
            },
            {
                title: '600-700',
                count: '152'
            },
            {
                title: '700-800',
                count: '152'
            },
        ]
    }
]
export const durationData = [
    {
        title: 'Duration',
        contents: [
            {
                title: '1 hour',
                count: '152'
            },  
            {
                title: '2 hours',
                count: '152'
            },
            {
                title: '3 hours',
                count: '152'
            },
            {
                title: '4 hours',
                count: '152'
            },
            {
                title: '5 hours',
                count: '152'
            }, 
        ]
    }
]