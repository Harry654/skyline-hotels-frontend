// const API_SERVER_URL = 'http://192.168.43.240:4000';
const API_SERVER_URL = 'https://skyline-hotels-backend.up.railway.app';
const signupForm = document.querySelector("#signup-form");

async function handleSubmit(event){
    event.preventDefault();
    const { target } = event;
    
    let userData = {};
    for(let index = 0; index < 4; index++){
        userData[target[index].name] = target[index].value
    }

    if( userData['password'] !== userData['password-confirm'] ) return alert("passwords don't match");
    delete userData['password-confirm'];
    try{
        let res = await fetch(`${API_SERVER_URL}/api/user/register`,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json;charset=UTF-8"
                },
                body: JSON.stringify(userData)
            }
        );
        res = await res.json();
        if(res.success) window.location.replace("./login.html");
        alert(res.message);
    }catch(error){
        // console.log(error);
        alert('something went wrong');
    }
}
    
signupForm.addEventListener('submit', handleSubmit);

