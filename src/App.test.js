import { render, screen } from '@testing-library/react';
import BookingForm from './pages/BookingForm';
import { initializeTimes } from './Main'
import { updatedTimes } from './Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
})


test('initializeTimes should return the initial array of times', () => {
  const expectedTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});


test('Test updatedTimes function', () => {
  const state = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"]
  const result = updatedTimes(state);
  expect (result).toEqual(state);
});

describe('updatedTimes', () => {
  test('should return correct times for 2024-09-12', () => {
      const selectedDate = "2024-09-12";
      const expectedTimes = ["6:00 PM", "7:00 PM", "9:00 PM"];
      const result = updatedTimes(selectedDate);
      expect(result).toEqual(expectedTimes);
  });

  test('should return correct times for 2024-09-14', () => {
      const selectedDate = "2024-09-14";
      const expectedTimes = ["7:00PM", "10:00 PM"];
      const result = updatedTimes(selectedDate);
      expect(result).toEqual(expectedTimes);
  });

  test('should return default times for other dates', () => {
      const selectedDate = "2024-09-13"; // Any date that is not explicitly handled
      const expectedTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
      const result = updatedTimes(selectedDate);
      expect(result).toEqual(expectedTimes);
  });
});