import { render, screen, fireEvent } from '@testing-library/react'
import MoodWizard from '../components/MoodWizard'

describe('MoodWizard Component', () => {
  it('renders all mood options and handles selection', () => {
    const onMoodSelectMock = jest.fn()
    render(<MoodWizard onMoodSelect={onMoodSelectMock} />)
    const moods = ['Relax', 'Adventure', 'Culture', 'Underwater', 'Family']

    moods.forEach(mood => {
      const btn = screen.getByRole('button', { name: mood })
      expect(btn).toBeInTheDocument()
      fireEvent.click(btn)
      expect(onMoodSelectMock).toHaveBeenCalledWith(mood)
    })
  })
})
