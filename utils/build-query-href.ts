import { ReadonlyURLSearchParams } from 'next/navigation'

export function buildQueryHref(
    searchParams: ReadonlyURLSearchParams,
    key: string,
    value: string,
) {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)
    params.set(key, value)
    return `?${params.toString()}`
}
