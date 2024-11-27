/**
 * @jest-environment jsdom
 */
// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

// Mock the `fetch` function to simulate API calls
global.fetch = jest.fn();

// Mock `document.getElementById` for accessing and updating DOM elements
document.getElementById = jest.fn((id) => {
  const elements = {
    name: { value: 'I like football' }, // Simulated input field value
    results: { innerHTML: '' }, // Simulated results area
  };
  return elements[id];
});

describe('handleSubmit', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  test('sends API request and updates the DOM with results', async () => {
    // Mock API responses
    fetch
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ key: 'mock_api_key' }),
      }) // First fetch for `/get_api`
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({
          status: { code: '0' },
          score_tag: 'P+',
          subjectivity: 'SUBJECTIVE',
        }),
      }); // Second fetch for MeaningCloud API

    // Mock event
    const mockEvent = { preventDefault: jest.fn() };

    // Call the handleSubmit function
    await handleSubmit(mockEvent);

    // Assertions
    expect(mockEvent.preventDefault).toHaveBeenCalled(); // Check event default is prevented
    expect(fetch).toHaveBeenCalledTimes(2); // Ensure two fetch calls are made
    expect(fetch).toHaveBeenCalledWith('/get_api'); // First call is to `/get_api`
    expect(document.getElementById('results').innerHTML).toBe(
      'score_tag :P+<br> subjectivity : SUBJECTIVE'
    ); // Check results area is updated
  });

  test('handles API error gracefully', async () => {
    fetch
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ key: 'mock_api_key' }),
      }) // First fetch for `/get_api`
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({
          status: { code: '1', msg: 'Error occurred' },
        }),
      }); // Second fetch for MeaningCloud API with an error

    const mockEvent = { preventDefault: jest.fn() };

    // Call the handleSubmit function
    await handleSubmit(mockEvent);

    // Check that results are not updated with valid data
    expect(document.getElementById('results').innerHTML).toBe(
      'score_tag :undefined<br> subjectivity : undefined'
    );
  });
});