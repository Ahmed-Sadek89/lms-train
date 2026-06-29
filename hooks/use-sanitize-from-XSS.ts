"use client"
import { useMemo } from 'react'
import DOMPurify from 'dompurify'

const useSanitizeFromXSS = (dangerousHtmlTesting: string) => {
    const sanitizedHtml = useMemo(() => {
        return DOMPurify.sanitize(dangerousHtmlTesting, { USE_PROFILES: { html: true } });
    }, [dangerousHtmlTesting]);

    return sanitizedHtml
}

export default useSanitizeFromXSS