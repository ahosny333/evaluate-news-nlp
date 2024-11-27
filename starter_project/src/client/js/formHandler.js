// Replace checkForName with a function that checks the URL
//import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

async function request_analysis(API_KEY){
    // const data_obj = {};
    // data_obj.msg = t;
    // //console.log(data_obj);

    // const response = await fetch('http://localhost:8000/analyze-sentiment',
    // {
    //     method: 'POST', 
    //     credentials: 'same-origin', 
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data_obj),   
    // });
    // try{
    //     console.log('start post');
    //     const data = await response.json();
    //     console.log('success post');
    //     //console.log(data);
    //     return data;
    // }
    // catch(error){
    //     console.log(error);
    // }
    const text = document.getElementById('name').value;
    const postData = new URLSearchParams({
        key: API_KEY,
        lang: 'en', // Language of the text, e.g., 'en' for English
        txt: text,  // The text to analyze
      });

      try {
        // Send POST request to MeaningCloud API
        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: postData.toString(),
        });
    
        // Parse the response
        const data = await response.json();
    
        if (data.status.code !== '0') {
          console.error('API Error:', data.status.msg);
          return {error:'api_error'};
        }
    
        // Log the result
        console.log('Sentiment Analysis Result:', data);
        return data;
      } catch (error) {
        console.error('Error while calling MeaningCloud API:', error.message);
        return {error:error.message};
      }

}

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    Client.checkForName(formText);
    
    // Check if the URL is valid
    
        // If the URL is valid, send it to the server using the serverURL constant above
        
        // post_data(formText).then(function(res) {
        //     document.getElementById('results').innerHTML = res.score_tag
        // })

    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    get_api().then(request_analysis)
    .then(function(res) {
        document.getElementById('results').innerHTML = 'score_tag :' + res.score_tag + '<br> subjectivity : ' + res.subjectivity
    })
}

const get_api = async () =>{
    const request = await fetch('/get_api');
    try {
        // Transform into JSON
        const api = await request.json()
        // console.log(api)
        // console.log(api.key);
        return api.key;

    }
    catch(error) {
        console.log("error", error);
    }
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

