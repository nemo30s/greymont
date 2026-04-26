const CALENDLY_URL = 'https://calendly.com/diaconu-ionut029/30min'

export function openCalendly(e) {
  if (e) e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}
