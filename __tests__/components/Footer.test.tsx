import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('renders a contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the organization name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Bucktown Bulls Baseball/i).length).toBeGreaterThanOrEqual(1)
  })

  it('has an email contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const emailLink = links.find((link) => link.getAttribute('href')?.startsWith('mailto:'))
    expect(emailLink).toBeDefined()
  })

  it('links to the Free For Charity hosting site', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Free For Charity/i })
    expect(link).toHaveAttribute('href', 'https://freeforcharity.org')
  })

  it('shows the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('explains that roster/schedules are off-site', () => {
    render(<Footer />)
    expect(screen.getAllByText(/separate channels/i).length).toBeGreaterThanOrEqual(1)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
