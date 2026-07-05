export const SITE_ORIGIN = 'https://greymont.agency'

/** @type {Record<string, { title: string, description: string }>} */
export const PAGE_SEO = {
  '/': {
    title: 'Webdesign & SEO bureau Antwerpen — Greymont',
    description:
      'Digitaal bureau in Antwerpen voor webdesign, lokale SEO en AI-automatisering. Wij bouwen websites die klanten opleveren voor lokale dienstverleners. Plan een gratis gesprek.',
  },
  '/web-design-antwerpen': {
    title: 'Web Design Antwerpen — Greymont',
    description:
      'Professionele webdesign in Antwerpen. Greymont bouwt snelle, conversiegerichte websites voor lokale en internationale bedrijven.',
  },
  '/seo-antwerpen': {
    title: 'SEO Antwerpen — Greymont',
    description:
      'SEO bureau in Antwerpen. Greymont helpt lokale bedrijven hoger ranken op Google met technische SEO, content en lokale zoekmachine marketing.',
  },
  '/webshop-antwerpen': {
    title: 'Webshop Antwerpen — Greymont',
    description:
      'E-commerce en webshops in Antwerpen. Greymont bouwt snelle webshops die converteren, met SEO en automatisering vanaf dag één.',
  },
  '/ai-automatisering': {
    title: 'AI Automatisering — Greymont',
    description:
      'AI-automatisering voor groeiende bedrijven. Greymont bouwt workflows die tijd besparen en leads opvolgen zonder extra personeel.',
  },
  '/book': {
    title: 'Gratis adviesgesprek inplannen — Greymont',
    description:
      'Plan een gratis gesprek van 30 minuten met Greymont. Geen verplichtingen — een eerlijke blik op wat jouw bedrijf nodig heeft.',
  },
  '/over-ons': {
    title: 'Over Greymont — de persoon achter het bureau',
    description:
      'Greymont is Ionuț Diaconu — één bouwer die je website ontwerpt, bouwt, live zet en maandelijks rapporteert. Het vakmanschap van een bureau, de directheid van één aanspreekpunt.',
  },
  '/contact': {
    title: 'Contact — Greymont Antwerpen',
    description:
      'Neem contact op met Greymont in Antwerpen. Bel +32 491 91 66 06, mail hello@greymont.agency of plan direct een gratis gesprek in.',
  },
  '/privacy': {
    title: 'Privacybeleid — Greymont',
    description:
      'Privacybeleid van Greymont.agency — hoe wij persoonsgegevens verzamelen, gebruiken en beschermen.',
  },
  '/terms': {
    title: 'Algemene voorwaarden — Greymont',
    description:
      'Algemene voorwaarden voor een samenwerking met Greymont voor webdesign, SEO en AI-automatisering.',
  },
}

export function pageUrl(pathname) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  return path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`
}

export function getPageSeo(pathname) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/'
  const meta = PAGE_SEO[path] ?? PAGE_SEO['/']
  return {
    ...meta,
    canonical: pageUrl(path),
  }
}
