import { buildQueryHref } from "@/utils/build-query-href";
import { ReadonlyURLSearchParams } from "next/navigation";

export const ratingData = (searchParams: ReadonlyURLSearchParams) => [
    {
        value: "5 Star Rating",
        href: buildQueryHref(searchParams, "rating", "5 Star Rating"),
    },
    {
        value: "4 Star Rating",
        href: buildQueryHref(searchParams, "rating", "4 Star Rating"),
    },
    {
        value: "3 Star Rating",
        href: buildQueryHref(searchParams, "rating", "3 Star Rating"),
    },
    {
        value: "2 Star Rating",
        href: buildQueryHref(searchParams, "rating", "2 Star Rating"),
    },
    {
        value: "1 Star Rating",
        href: buildQueryHref(searchParams, "rating", "1 Star Rating"),
    },
]