import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative bg-navy text-paper border-b-4 border-red"
    >
      <div className="bb-container py-20 md:py-28 lg:py-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          <p className="font-(family-name:--font-inter) text-[0.78rem] tracking-[0.28em] uppercase text-paper/70 mb-5 flex items-center gap-3">
            <span className="bb-diamond" aria-hidden="true" />
            Youth Baseball Organization
          </p>
          <h1
            id="welcome-heading"
            className="font-(family-name:--font-bebas-neue) text-[3rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6rem] leading-[0.95] tracking-[0.01em]"
          >
            Bucktown Bulls
            <span className="block text-red">Baseball</span>
          </h1>
          <p className="mt-7 max-w-[58ch] text-[1.1rem] md:text-[1.18rem] leading-[1.7] text-paper/90">
            Building character, teamwork, and a love of the game — one season at a time. The
            Bucktown Bulls is a youth baseball organization committed to giving players a place to
            grow, compete, and have fun on the diamond.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5 font-(family-name:--font-inter) text-[0.95rem]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-deep text-paper px-5 py-3 rounded-sm transition-colors font-semibold tracking-wide"
            >
              Contact the organization
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-paper/85 hover:text-paper border-b border-paper/40 hover:border-paper pb-1 transition-colors"
            >
              About the Bulls
            </a>
          </div>
        </div>

        <aside
          aria-label="At a glance"
          className="md:col-span-4 md:pl-8 md:border-l md:border-paper/20"
        >
          <dl className="space-y-6 text-[0.98rem]">
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-paper/60 font-(family-name:--font-inter)">
                Program
              </dt>
              <dd className="mt-1 text-paper">Youth baseball</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-paper/60 font-(family-name:--font-inter)">
                Roster &amp; schedules
              </dt>
              <dd className="mt-1 text-paper">
                Shared with families through the organization. Please reach out for access.
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-paper/60 font-(family-name:--font-inter)">
                Get in touch
              </dt>
              <dd className="mt-1 text-paper">
                <a
                  href="#contact"
                  className="underline underline-offset-4 decoration-paper/40 hover:decoration-paper"
                >
                  See contact details
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default Hero
