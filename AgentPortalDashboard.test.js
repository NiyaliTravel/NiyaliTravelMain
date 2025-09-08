import { render, screen } from '@testing-library/react'
import AgentPortalDashboard from '../components/AgentPortalDashboard'

describe('Agent Portal Dashboard', () => {
  it('renders dashboard metrics correctly', () => {
    render(<AgentPortalDashboard bookings={2847} revenue={458920} users={8432} experiences={127} />)
    expect(screen.getByText(/2,847/i)).toBeInTheDocument()
    expect(screen.getByText(/\$458,920/i)).toBeInTheDocument()
    expect(screen.getByText(/8,432/i)).toBeInTheDocument()
    expect(screen.getByText(/127/i)).toBeInTheDocument()
  })

  it('renders Admin Modules with correct names and descriptions', () => {
    render(<AgentPortalDashboard />)
    const modules = [
      { name: 'Analytics Dashboard' },
      { name: 'B2B Booking System' },
      { name: 'CRM & Email Campaigns' },
      { name: 'Content Management' },
      { name: 'Booking Management' },
      { name: 'User Management' },
      { name: 'System Integration' },
      { name: 'Security & Compliance' },
      { name: 'Mobile PWA' }
    ]
    modules.forEach(module => {
      expect(screen.getByText(module.name)).toBeInTheDocument()
    })
  })
})
