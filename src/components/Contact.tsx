import React from 'react'
import { Mail, Users, MessageSquare, Heart } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-sand">
      <div className="bb-container py-16 md:py-20 grid md:grid-cols-12 gap-12">
        <header className="md:col-span-4">
          <p className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.22em] text-stone">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-(family-name:--font-bebas-neue) text-navy text-[2.4rem] md:text-[2.9rem] leading-none tracking-wide"
          >
            Reach out to the Bulls.
          </h2>
          <p className="mt-5 bb-prose">
            Looking to learn about tryouts, divisions, or registering a player? The organization
            handles roster and schedule access directly with families. The fastest path is a quick
            email.
          </p>
        </header>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
          <article aria-labelledby="contact-email" className="border-l-4 border-navy pl-5">
            <h3
              id="contact-email"
              className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.2em] text-stone mb-3 flex items-center gap-2"
            >
              <Mail className="h-3.5 w-3.5 text-red shrink-0" aria-hidden="true" />
              Email the organization
            </h3>
            <p className="text-ink/90 leading-relaxed">
              <a
                href="mailto:info@bucktownbullsbaseball.org"
                className="underline underline-offset-4 decoration-rule hover:text-red hover:decoration-red break-all"
              >
                info@bucktownbullsbaseball.org
              </a>
            </p>
            <p className="mt-2 text-[0.9rem] text-stone">
              A coach or parent volunteer will follow up with details for current families and
              prospective players.
            </p>
          </article>

          <article aria-labelledby="contact-access" className="border-l-4 border-navy pl-5">
            <h3
              id="contact-access"
              className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.2em] text-stone mb-3 flex items-center gap-2"
            >
              <Users className="h-3.5 w-3.5 text-red shrink-0" aria-hidden="true" />
              Team roster &amp; schedules
            </h3>
            <p className="text-ink/90 leading-relaxed">
              Roster, practice and game schedules, and parent resources are shared through team
              communication channels rather than this public site.
            </p>
            <p className="mt-2 text-[0.9rem] text-stone">
              Current families: please use the channel your coach shared. New families: email us and
              we&rsquo;ll get you set up.
            </p>
          </article>

          <article aria-labelledby="contact-social" className="border-l-4 border-navy pl-5">
            <h3
              id="contact-social"
              className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.2em] text-stone mb-3 flex items-center gap-2"
            >
              <MessageSquare className="h-3.5 w-3.5 text-red shrink-0" aria-hidden="true" />
              Find us online
            </h3>
            <p className="text-ink/90 leading-relaxed">
              Contact the organization at the email above to ask about team social channels, game
              highlight posts, and online community access for families.
            </p>
          </article>

          <article aria-labelledby="contact-volunteer" className="border-l-4 border-navy pl-5">
            <h3
              id="contact-volunteer"
              className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.2em] text-stone mb-3 flex items-center gap-2"
            >
              <Heart className="h-3.5 w-3.5 text-red shrink-0" aria-hidden="true" />
              Want to volunteer or sponsor?
            </h3>
            <p className="text-ink/90 leading-relaxed">
              Youth baseball runs on volunteers and local sponsors. If you&rsquo;d like to help,
              please email the organization at the address above and mention how you&rsquo;d like to
              be involved.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
