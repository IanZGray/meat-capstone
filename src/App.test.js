import { fireEvent, render, screen } from  '@testing-library/react'
import BookingForm from './components/BookingForm'
import '@testing-library/jest-dom'

test('Renders the BookingForm Header', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument()
})

// test('Times initialized', () => {
//     render(<BookingForm />);
//     // BookingForm.defaultProps = { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
//     const calendar = screen.getByTestId("calendar")
//     const times = screen.getByTestId('time-pulldown')
//     const option = screen.getAllByTestId('times')
//     // fireEvent.change(calendar)
//     expect(times).toContainElement(option)
// })