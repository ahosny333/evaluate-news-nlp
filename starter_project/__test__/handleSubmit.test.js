
import * as formHandler from '../src/client/js/formHandler'; 


global.fetch = jest.fn(() =>
  Promise.resolve({
      json: () => Promise.resolve({ score_tag: 'POSITIVE',subjectivity:'subjective' }),
  })
);


test('handleSubmit is imported', () => {
  console.log('handleSubmit:', formHandler.handleSubmit);
  expect(typeof formHandler.handleSubmit).toBe('function');
});



test('handleSubmit calls with valid url and updates the DOM', async () => {
    document.body.innerHTML = `
        <form id="urlForm">
            <input id="name" value="http://www.valid_url.com" />
            <div id="results"></div>
        </form>
    `;
    const event = { preventDefault: jest.fn() };

    await formHandler.handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/analyze-sentiment', expect.any(Object));
    expect(document.getElementById('results').innerHTML).toBe('score_tag :POSITIVE<br> subjectivity : subjective');
});

test('handleSubmit calls post_data and updates the DOM when call by invalid url', async () => {
  document.body.innerHTML = `
      <form id="urlForm">
          <input id="name" value="invalid url" />
          <div id="results"></div>
      </form>
  `;
  const event = { preventDefault: jest.fn() };

  await formHandler.handleSubmit(event);

  expect(event.preventDefault).toHaveBeenCalled();
  expect(document.getElementById('results').innerHTML).toBe('not valid url');
});