import { render, screen, fireEvent } from '@testing-library/react'
import Homepage from '../components/Homepage'

describe('Homepage Component', () => {
  beforeEach(() => {
    render(<Homepage />)
  })

  it('renders hero headline and subhead', () => {
    expect(screen.getByText(/Let the Indian Ocean Carry Your Story/i)).toBeInTheDocument()
    expect(screen.getByText(/Personalized Maldives journeys/i)).toBeInTheDocument()
  })

  it('renders "Plan My Trip" and "Chat with Neo" CTAs', () => {
    const planTripBtn = screen.getByRole('button', { name: /Plan My Trip/i })
    const chatNeoBtn = screen.getByRole('button', { name: /Chat with Neo/i })
    expect(planTripBtn).toBeVisible()
    expect(chatNeoBtn).toBeVisible()
  })

  it('renders Mood Wizard with all moods', () => {
    const moods = ['Relax', 'Adventure', 'Culture', 'Underwater', 'Family']
    moods.forEach(mood => {
      expect(screen.getByText(mood)).toBeInTheDocument()
    })
  })

  it('renders interactive atoll map', () => {
    expect(screen.getByTestId('interactive-atoll-map')).toBeInTheDocument()
  })

  it('renders Experience bundles', () => {
    const bundles = ['Freediving', 'Island Hopping', 'Local Culture']
    bundles.forEach(bundle => {
      expect(screen.getByText(bundle)).toBeInTheDocument()
    })
  })

  it('renders Neo explainer section with 3-step process', () => {
    expect(screen.getByText(/Neo/i)).toBeInTheDocument()
    expect(screen.getByText(/3-step process/i)).toBeInTheDocument()
  })

  it('renders real-time ferry/transport alerts', () => {
    expect(screen.getByTestId('ferry-alerts')).toBeInTheDocument()
  })

  it('renders testimonials with schema markup', () => {
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    // Additional check for schema could be added if HTML or props exposed
  })

  it('renders "Join as an Agent" B2B CTA', () => {
    expect(screen.getByRole('link', { name: /Join as an Agent/i })).toBeInTheDocument()
  })
})
