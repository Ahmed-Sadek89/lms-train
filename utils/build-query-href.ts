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

export function getCommaSeparatedParam(
    searchParams: ReadonlyURLSearchParams,
    key: string,
) {
    return (searchParams.get(key.toLowerCase()) ?? '')
        .split(',')
        .filter(Boolean)
}

export function buildToggleCommaSeparatedHref(
    searchParams: ReadonlyURLSearchParams,
    key: string,
    value: string,
    checked: boolean,
) {
    const params = new URLSearchParams(searchParams.toString())
    const paramKey = key.toLowerCase()
    const paramValue = value.toLowerCase()
    const current = getCommaSeparatedParam(searchParams, paramKey)

    const updated = checked
        ? current.includes(paramValue) ? current : [...current, paramValue]
        : current.filter((item) => item !== paramValue)

    params.delete(paramKey)
    if (updated.length > 0) {
        params.set(paramKey, updated.join(','))
    }

    const query = params.toString()
    return query ? `?${query}` : ''
}
