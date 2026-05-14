import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of use for the Bucktown Bulls Baseball website.',
}

export default function TermsOfService() {
  return (
    <div className="bg-cream">
      <article className="bb-container max-w-[760px] py-16 md:py-20 bb-prose">
        <p className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.22em] text-stone">
          Site Information
        </p>
        <h1 className="mt-3 font-(family-name:--font-bebas-neue) text-navy text-[2.6rem] md:text-[3rem] leading-none tracking-wide">
          Terms of Service
        </h1>
        <p className="mt-3 text-stone font-(family-name:--font-inter) text-[0.9rem]">
          Effective date: May 2026
        </p>

        <h2 className="text-[1.6rem] mt-10 mb-3">About this site</h2>
        <p>
          This is the public information website of Bucktown Bulls Baseball, a youth baseball
          organization. We publish a brief description of the program and contact information.
          Roster, schedules, and parent resources are handled through separate team communication
          channels. The information here is provided in good faith and as-is, with no warranty of
          any kind.
        </p>

        <h2 className="text-[1.6rem] mt-8 mb-3">Acceptable use</h2>
        <p>
          You are welcome to read, link to, and share material on this site. Please do not attempt
          to disrupt the site, misrepresent the organization, or use our name or content in a way
          that implies endorsement we have not given.
        </p>

        <h2 className="text-[1.6rem] mt-8 mb-3">External links</h2>
        <p>
          This site may contain links to outside organizations and services. We are not responsible
          for the content of those sites.
        </p>

        <h2 className="text-[1.6rem] mt-8 mb-3">Changes</h2>
        <p>
          We may revise these terms from time to time. The current version is always posted at this
          page.
        </p>

        <h2 className="text-[1.6rem] mt-8 mb-3">Contact</h2>
        <p>
          Bucktown Bulls Baseball ·{' '}
          <a
            href="mailto:info@bucktownbullsbaseball.org"
            className="underline underline-offset-4 hover:text-red"
          >
            info@bucktownbullsbaseball.org
          </a>
        </p>
      </article>
    </div>
  )
}
