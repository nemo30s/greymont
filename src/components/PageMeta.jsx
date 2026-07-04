import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo } from '../seo-pages'

function upsertMeta({ name, property, content }) {
  const selector = property
    ? `meta[property="${property}"]`
    : `meta[name="${name}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    if (property) el.setAttribute('property', property)
    else el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, canonical } = getPageSeo(pathname)

    document.title = title
    upsertCanonical(canonical)
    upsertMeta({ name: 'description', content: description })
    upsertMeta({ property: 'og:url', content: canonical })
    upsertMeta({ property: 'og:title', content: title })
    upsertMeta({ property: 'og:description', content: description })
    upsertMeta({ name: 'twitter:title', content: title })
    upsertMeta({ name: 'twitter:description', content: description })
  }, [pathname])

  return null
}
