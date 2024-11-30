
# Evaluate a News Article with Natural Language Processing

This project is a simple web application designed to leverage the power of Natural Language Processing (NLP), a subset of Artificial Intelligence (AI) that enables computers to process and interact with human language. Users can submit a URL to an article, which is then processed by a Node.js Express server. The server communicates with the MeaningCloud API to perform sentiment analysis on the article's content. Through NLP, which utilizes machine learning and deep learning techniques to interpret the nuances of human speech, this application extracts meaningful insights from text data. The resulting sentiment evaluation is dynamically presented on the front-end, showcasing real-time AI-driven content analysis.

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#Project-main-files)
3. [Configuration](#configuration)
4. [Running the Project](#running-the-project)
5. [Testing](#testing)
6. [Dependencies](#dependencies)

## Installation

To get started with this project, clone the repository to your local machine and install the necessary dependencies.

```bash
git clone https://github.com/ahosny333/evaluate-news-nlp.git
cd starter_project
npm install
```

## Project main files

- `src/client`: Contains client-side code including HTML, CSS, and JavaScript files.
- `src/server`: Contains server-side code for the Express server.
- `webpack.dev.js`: Webpack configuration for development.
- `webpack.prod.js`: Webpack configuration for production.

## Configuration

1. **API Key**: 
   - Acquire an API key from MeaningCloud. Create a `.env` file in the root of your project and add your API key:
     ```plaintext
     API_KEY=your_meaningcloud_api_key
     ```

2. **Webpack Configurations**:
   - **Development**: `webpack.dev.js` handles development settings.
   - **Production**: `webpack.prod.js` handles production settings.

## Running the Project

- **Development Mode**: This mode starts a development server with live reloading:
  ```bash
  npm run build-dev
  ```
  Access the application at [http://localhost:3000](http://localhost:3000).

- **Production Mode**: Compiles the project for production:
  ```bash
  npm run build-prod
  ```
  To start the production server, run:
  ```bash
  npm start
  ```
  Access the application at [http://localhost:8000](http://localhost:8000).

## Testing

This project uses Jest for testing the handle submit function and the URL validation function.

To run tests, use:
```bash
npm test
```

## Dependencies

- **axios**: For making HTTP requests from the server.
- **express**: Web framework for Node.js.
- **html-webpack-plugin**: Simplifies creation of HTML files to serve webpack bundles.
- **clean-webpack-plugin**: Removes/cleans build folders.
- **dotenv**: Loads environment variables.
- **jest**: JavaScript testing framework.
- **webpack**: Module bundler.
- **workbox-webpack-plugin**: Integrates Workbox with webpack for service workers.

For a complete list of dependencies and their versions, see the `package.json` file.


```

