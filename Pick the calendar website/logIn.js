const mainLoginForm = document.forms.mainLogIn;
const logIn = mainLoginForm.logIn;
const email = mainLoginForm.email;
const password = mainLoginForm.password;
const logInAccount = mainLoginForm.logInButton;

const emailValidation = /\w+\d*\@\w{3,}\.\w{2,}/
const passwordValidation = /.{6,}/

console.log(logIn.value);

let errorLogIn = document.createElement("p");

if(logIn.value === '' || emailValidation.test(email.value) === false || passwordValidation.test(password.value) === false){
    mainLoginForm.addEventListener("submit", function(event){
        event.preventDefault();
        logIn.classList.add("focus");
        logIn.style.boxShadow = '0px 0px 30px red';
        logIn.style.border = `1px solid red`;
        
        email.classList.add("focus");
        email.style.boxShadow = '0px 0px 30px red';
        email.style.border = `1px solid red`;
        
        password.classList.add("focus");
        password.style.boxShadow = '0px 0px 30px red';
        password.style.border = '1px solid red';
        errorLogIn.style.position = 'absolute';
        errorLogIn.style.color = 'red';
        errorLogIn.style.fontSize = '30px';
        errorLogIn.style.left = '270px';
        errorLogIn.style.top = '0px';
        errorLogIn.style.width = '300px';
        errorLogIn.style.lineHeight = '50px'
        errorLogIn.textContent = `Please, fill out a form before logging in!`
        email.after(errorLogIn);
    })
}
        mainLoginForm.addEventListener("input", function(event){
        if(logIn.value !== '' && emailValidation.test(email.value) !== false && passwordValidation.test(password.value) !== false){
                logIn.classList.add("focus")
            logIn.style.boxShadow = '0px 0px 30px #B79040';
                logIn.style.border = `1px solid #B79040`;
        
                email.classList.add("focus");
                email.style.boxShadow = '0px 0px 30px #B79040';
                email.style.border = `1px solid #B79040`;
        
                password.classList.add("focus");
                password.style.boxShadow = '0px 0px 30px #B79040';
                password.style.border = '1px solid #B79040';
                errorLogIn.remove();

                mainLoginForm.addEventListener("submit", function(event){
                    event.preventDefault();
                    errorLogIn.remove();
                    logIn.classList.add("focus")
                    logIn.style.boxShadow = '0px 0px 30px #B79040';
                        logIn.style.border = `1px solid #B79040`;
                
                        email.classList.add("focus");
                        email.style.boxShadow = '0px 0px 30px #B79040';
                        email.style.border = `1px solid #B79040`;
                
                        password.classList.add("focus");
                        password.style.boxShadow = '0px 0px 30px #B79040';
                        password.style.border = '1px solid #B79040';
                        location.href = `http://127.0.0.1:5501/index.html`
                })
            }else{
                if(logIn.value !== ''){
                    logIn.classList.add("focus");
                    logIn.style.boxShadow = `0px 0px 30px #B79040`;
                    logIn.style.border = `1px solid #B79040`;
                
                }
                if(emailValidation.test(email.value) === false && passwordValidation.test(password.value) === true){
                    email.classList.add("focus");
                    email.style.boxShadow = '0px 0px 30px red';
                    email.style.border = `1px solid red`;

                    password.classList.add("focus");
                    password.style.boxShadow = '0px 0px 30px #B79040';
                    password.style.border = '1px solid #B79040';
                }else if(emailValidation.test(email.value) !== false && passwordValidation.test(password.value) === false){
                    password.classList.add("focus");
                    password.style.boxShadow = '0px 0px 30px red';
                    password.style.border = '1px solid red';

                    email.classList.add("focus");
                    email.style.boxShadow = '0px 0px 30px #B79040';
                    email.style.border = `1px solid #B79040`;
                }else if(logIn.value === ''){
                    logIn.classList.add("focus");
                    logIn.style.boxShadow = `0px 0px 30px red`;
                    logIn.style.border = `1px solid red`;
                }
            }
        })