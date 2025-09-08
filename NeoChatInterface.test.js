import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import NeoChatInterface from '../components/NeoChatInterface'
import fetchMock from 'jest-fetch-mock'

describe('NeoChatInterface Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('renders chat input and send button', () => {
    render(<NeoChatInterface />)
    expect(screen.getByPlaceholderText(/Ask Neo/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument()
  })

  it('sends query and receives response', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ reply: "Welcome! How can I assist?" }))
    render(<NeoChatInterface />)
    
    fireEvent.change(screen.getByPlaceholderText(/Ask Neo/i), { target: { value: 'When to visit Maldives?' } })
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    await waitFor(() => expect(screen.getByText(/Welcome! How can I assist?/i)).toBeInTheDocument())
  })

  it('handles errors gracefully', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'))
    render(<NeoChatInterface />)
    
    fireEvent.change(screen.getByPlaceholderText(/Ask Neo/i), { target: { value: 'Book a trip' } })
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    await waitFor(() =>
      expect(screen.getByText(/Sorry, something went wrong/i)).toBeInTheDocument()
    )
  })
})
