import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="bb-container py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-(family-name:--font-bebas-neue) text-[1.5rem] text-paper tracking-wide">
            Bucktown Bulls Baseball
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/80">
            A youth baseball organization. Roster, schedules, and parent resources are shared
            through team communication channels — please contact the organization for access.
          </p>
        </div>

        <div>
          <h2 className="font-(family-name:--font-bebas-neue) text-[1.5rem] text-paper tracking-wide">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <a
                href="mailto:info@bucktownbullsbaseball.org"
                className="text-paper/85 hover:text-red underline underline-offset-4 decoration-paper/30 hover:decoration-red break-all"
              >
                info@bucktownbullsbaseball.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-(family-name:--font-bebas-neue) text-[1.5rem] text-paper tracking-wide">
            Site information
          </h2>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <Link
                href="/privacy-policy"
                className="text-paper/85 hover:text-red underline underline-offset-4 decoration-paper/30 hover:decoration-red"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-paper/85 hover:text-red underline underline-offset-4 decoration-paper/30 hover:decoration-red"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-[0.8rem] text-paper/55 font-(family-name:--font-inter)">
            Website hosted by{' '}
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-paper/30 hover:text-red hover:decoration-red"
            >
              Free For Charity
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bb-rule opacity-20" />
      <div className="bb-container py-5 text-center text-[0.85rem] text-paper/65 font-(family-name:--font-inter)">
        © {year} Bucktown Bulls Baseball. Team roster, schedules, and parent resources are
        accessible via separate channels — contact the organization for access.
      </div>
    </footer>
  )
}

export default Footer
