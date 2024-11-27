// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

const post_data = async function(t){
    const data_obj = {};
    data_obj.msg = t;
    //console.log(data_obj);

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
        console.log('start post');
        const data = await response.json();
        console.log('success post');
        //console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }

}

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    checkForName(formText);
    
    // Check if the URL is valid
    
        // If the URL is valid, send it to the server using the serverURL constant above
        
        post_data(formText).then(function(res) {
            document.getElementById('results').innerHTML = res.score_tag
        })
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

