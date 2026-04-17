import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SECTIONS = [
  {
    title: 'Services',
    body: `Greymont provides web design and development, SEO management, and AI automation services to clients on a project or retainer basis. The specific scope, deliverables, and timelines for each engagement are defined in a separate proposal or statement of work agreed upon before work begins.`,
  },
  {
    title: 'Payment Terms',
    body: `Project work typically requires a deposit before commencement, with the remaining balance due upon completion or at milestones agreed in writing. Retainer engagements are billed monthly in advance. Invoices not paid within 14 days of their due date may result in work being paused until payment is received.`,
  },
  {
    title: 'Intellectual Property',
    body: `Upon receipt of full payment, you own all deliverables created specifically for your project, including design assets, code, and written content. Greymont retains the right to display work in its portfolio and case studies unless you request otherwise in writing. We retain ownership of any pre-existing tools, frameworks, or proprietary systems used in the delivery of your project.`,
  },
  {
    title: 'Revisions and Scope',
    body: `Each project proposal includes a defined number of revision rounds. Requests that fall outside the agreed scope — including additional features, redesigns, or changes to original briefs — may be subject to additional fees. We will always notify you before proceeding with out-of-scope work.`,
  },
  {
    title: 'Confidentiality',
    body: `Both parties agree to keep confidential any non-public business information shared during the course of the engagement. This includes business strategies, client data, pricing, and internal processes. This obligation survives the termination of any agreement between us.`,
  },
  {
    title: 'Limitation of Liability',
    body: `Greymont is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability in connection with any engagement shall not exceed the total fees paid by you in the three months preceding the claim. We make no guarantees regarding specific SEO rankings, traffic figures, or revenue outcomes, as these depend on factors outside our control.`,
  },
  {
    title: 'Termination',
    body: `Either party may terminate an ongoing engagement with 30 days written notice. In the event of termination, you are responsible for fees covering work completed up to the termination date. Deposits are non-refundable once work has commenced.`,
  },
  {
    title: 'Governing Law',
    body: `These terms are governed by the laws of Romania. Any disputes arising from our engagement shall first be subject to good-faith negotiation. If unresolved, disputes shall be referred to the courts of competent jurisdiction in Romania.`,
  },
  {
    title: 'Changes to These Terms',
    body: `We may update these Terms of Service from time to time. When we do, we will update the date at the top of this page. Continued use of our services after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: 'Contact',
    body: `If you have any questions about these Terms, please contact us at diaconu.ionut029@gmail.com.`,
  },
]

export default function Terms() {
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
            Terms of Service
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
          <Link to="/privacy" className="text-white/30 text-xs font-body hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
