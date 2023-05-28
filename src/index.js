const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('.greeting');
const greetingText = greeting.querySelector('h1');
const CLASS_HIEEN = 'hidden';
const logOut =  document.querySelector('#logout');
function onSubmitEvent(event) {

    event.preventDefault();   
    const data = new FormData(event.target);
    const userId = data.get('userId');  
    if (userId != '') {
        greeting.classList.remove(CLASS_HIEEN);

        loginForm.classList.add(CLASS_HIEEN);
        const postData =
        {
            'userId': userId,
            'message': `hello ${userId}`
        }

        localStorage.setItem(
            'userInfo', JSON.stringify(postData)
        );
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        greetingText.innerText = ` Hello ${userInfo.userId.toUpperCase()}`;
    } else {
        alert('Please enter your ID');
        return false;
    }

}

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo === null) {

    greeting.classList.add(CLASS_HIEEN);
    loginForm.classList.remove(CLASS_HIEEN);
} else {
    greeting.classList.remove(CLASS_HIEEN);
    loginForm.classList.add(CLASS_HIEEN);
    greetingText.innerText = ` Hello ${userInfo.userId.toUpperCase()}`;
}


function handleLogOut() {
    localStorage.removeItem('userInfo');
   
    window.location.reload();

}

loginForm.addEventListener("submit", onSubmitEvent);
logOut.addEventListener('click', handleLogOut);

