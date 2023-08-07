import { render, screen } from  '@testing-library/react'
import BookingForm from './components/BookingForm'
import '@testing-library/jest-dom'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    BookingForm.defaultProps = { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
    const headingElement = screen.getByText('Make Your Reservation');
    expect(headingElement).toBeInTheDocument()
})