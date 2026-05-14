import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream border-b border-rule">
      <div className="bb-container py-16 md:py-20 grid md:grid-cols-12 gap-12">
        <header className="md:col-span-4">
          <p className="font-(family-name:--font-inter) text-[0.72rem] uppercase tracking-[0.22em] text-stone">
            About the Bulls
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-(family-name:--font-bebas-neue) text-navy text-[2.4rem] md:text-[2.9rem] leading-none tracking-wide"
          >
            A team for players, by their community.
          </h2>
        </header>

        <div className="md:col-span-8 space-y-6 bb-prose">
          <p>
            The Bucktown Bulls is a youth baseball organization. We are a place for young players to
            learn the fundamentals of the game, develop as teammates, and compete with effort and
            pride.
          </p>
          <p>
            Like most youth baseball programs, day-to-day team information — practice times, game
            schedules, rosters, coach communication, snack-bar duty, and the like — lives where
            families actually use it: text threads, team apps, and emails between coaches and
            parents. This public page is intentionally light on those details.
          </p>

          <figure className="mt-10 border-l-4 border-red pl-6">
            <blockquote className="text-[1.05rem] md:text-[1.12rem] leading-[1.7] text-ink/85 italic">
              &ldquo;Players first. Effort over ego. The game gives back what you put in.&rdquo;
            </blockquote>
            <figcaption className="mt-3 not-italic font-(family-name:--font-inter) text-[0.78rem] uppercase tracking-[0.18em] text-stone">
              Bucktown Bulls — guiding principles
            </figcaption>
          </figure>

          <p className="text-[0.95rem] text-stone">
            More detail about the program — divisions, coaches, sponsors, and history — will be
            added here as we work with the organization to confirm the right information for a
            public page. In the meantime, please use the contact section below.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
