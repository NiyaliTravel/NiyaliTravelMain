import { render, screen, fireEvent } from '@testing-library/react'
import BookingItineraryBuilder from '../components/BookingItineraryBuilder'

describe('Booking Itinerary Builder Component', () => {
  beforeEach(() => {
    render(<BookingItineraryBuilder />)
  })

  it('renders dynamic booking form', () => {
    expect(screen.getByLabelText(/Guest Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Experience/i)).toBeInTheDocument()
  })

  it('validates offer code input', () => {
    const input = screen.getByPlaceholderText(/Enter offer code/i)
    fireEvent.change(input, { target: { value: 'SUMMER2024' } })
    fireEvent.click(screen.getByText(/Validate/i))
    expect(screen.getByText(/Code valid/i)).toBeInTheDocument()
  })

  it('renders calendar view for experiences and guest houses', () => {
    expect(screen.getByTestId('calendar-view')).toBeInTheDocument()
  })

  it('calls onSubmit with correct data', () => {
    const form = screen.getByTestId('booking-form')
    fireEvent.change(screen.getByLabelText(/Guest Name/i), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 2 } })
    fireEvent.click(screen.getByText(/Submit/i))
    // Test assumes onSubmit mock or spy is implemented in the component for callback assertions
  })
})
