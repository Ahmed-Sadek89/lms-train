import { buildQueryHref } from "@/utils/build-query-href"
import { ReadonlyURLSearchParams } from "next/navigation"

export const suggestionsData = [
    "Developments",
    "UI/UX Design",
    "Marketing",
    "Programming",
    "Business",
]

export const sortByData =(searchParams: ReadonlyURLSearchParams) =>[
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