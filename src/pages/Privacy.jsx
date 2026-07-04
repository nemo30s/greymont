import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly to us, such as your name, email address, and any details you share when booking a call or submitting a contact form. We also collect standard usage data — pages visited, time on site, browser type — through analytics tools to help us improve the experience.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to respond to your enquiries, schedule and manage calls, deliver the services you engage us for, send occasional updates if you have opted in, and improve our website and service quality. We do not sell, rent, or trade your personal information to any third party.`,
  },
  {
    title: 'Cookies',
    body: `Our website uses cookies to understand how visitors interact with our content. These are analytics cookies only — we do not use advertising or tracking cookies. You can disable cookies in your browser settings at any time without affecting your ability to use the site.`,
  },
  {
    title: 'Third-Party Services',
    body: `We use a small number of trusted third-party tools to operate our business, including Calendly for booking calls and standard analytics providers. These services have their own privacy policies and we encourage you to review them. We only share information with these services to the extent necessary for them to perform their functions.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected or to comply with legal obligations. If you would like us to delete your data, you can contact us at any time and we will act on your request promptly.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to access, correct, or delete any personal information we hold about you. You also have the right to withdraw consent for any processing based on consent, and to lodge a complaint with a supervisory authority. To exercise any of these rights, please contact us directly.`,
  },
  {
    title: 'Contact',
    body: `If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at hello@greymont.agency. We aim to respond to all enquiries within two business days.`,
  },
]

export default function Privacy() {
  return (
    <div className="bg-black min-h-screen">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 border-b border-white/5"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}>
        <Link to="/">
          <img src={logoIcon} alt="Greymont" className="h-12 w-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-body text-sm"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-8 pt-40 pb-32">
        <div className="mb-16">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-sm font-medium font-body">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading italic text-white leading-[0.88] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/40 font-body font-light text-sm">Last updated: April 2026</p>
        </div>

        <div className="flex flex-col gap-12">
          {SECTIONS.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <h2 className="text-white font-body font-medium text-lg">{title}</h2>
              <p className="text-white/55 font-body font-light text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <span className="text-white/30 text-xs font-body">© 2026 Greymont. All rights reserved.</span>
          <Link to="/terms" className="text-white/30 text-xs font-body hover:text-white/60 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}
