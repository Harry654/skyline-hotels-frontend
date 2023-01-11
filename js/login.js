const API_SERVER_URL = 'http://192.168.43.240:4000';
const loginForm = document.querySelector("#login-form");

async function handleSubmit(event){
    event.preventDefault();
    const { target } = event;
    
    let userData = {};
    for(let index = 0; index < 2; index++){
        userData[target[index].name] = target[index].value
    }

    try{
        let res = await fetch(`${API_SERVER_URL}/api/user/login`,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json;charset=UTF-8"
                },
                body: JSON.stringify(userData)
            }
        );
        res = await res.json();
        alert(res.message);
        if(res.success) window.location.replace(".");
    }catch(error){
        // console.log(error);
        alert('something went wrong');
    }
}


loginForm.addEventListener('submit', handleSubmit);