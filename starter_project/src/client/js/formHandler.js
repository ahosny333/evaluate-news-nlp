// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'


// Only add the event listener if the DOM is fully loaded and not in a test environment
if (typeof document !== 'undefined') {
    const form = document.getElementById('urlForm');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  }
  


    export async function post_data(t){
    const data_obj = {};
    data_obj.msg = t;


    const response = await fetch('http://localhost:8000/analyze-sentiment',
    {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_obj),   
    });
    try{
        const data = await response.json();

        return data;
    }
    catch(error){
        console.log(error);
    }

}

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    if(checkForName(formText))
    {
        const res = await post_data(formText);
        document.getElementById('results').innerHTML = 'score_tag :' + res.score_tag + '<br> subjectivity : ' + res.subjectivity;//res.score_tag; // This should update the DOM

    }
    else
    {
        document.getElementById('results').innerHTML = "not valid url";

    }

    
        
}
// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };
// export { post_data };
