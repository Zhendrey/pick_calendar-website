const mainForm = document.getElementById('mainRegistration'); 
const logIn = document.getElementById('main0');
const email = document.getElementById('main1'); 
const password = document.getElementById('main2'); 
const createNewAccount = document.getElementById('main3');
const checkmarkRegistration = document.createElement("img");
const checkmarkClone1 = checkmarkRegistration.cloneNode(true);
const checkmarkClone2 = checkmarkRegistration.cloneNode(true);
const checkmarkClone3 = checkmarkRegistration.cloneNode(true);


const nthInput1 = document.querySelector(`form :nth-child(1)`);
const nthInput2 = document.querySelector(`form :nth-child(2)`);
const nthInput3 = document.querySelector(`form :nth-child(3)`);

console.log(nthInput2);
const guest = {
    logIn: '',
    email: '',
    password: '',
};

const user = {
    logIn: '',
    email: '',
    password: '',
};

const emailValidation = /\w+\d*\@\w{3,}\.\w{2,}/
const passwordValidation = /.{6,}/

        mainForm.addEventListener('input', function(){
            user.logIn = logIn.value
            user.email = email.value
            user.password = password.value;

            console.log(user);

    if(logIn.value !== '' && emailValidation.test(email.value) !== false && passwordValidation.test(password.value) !== false){
            email.classList.add("focus");
            email.style.boxShadow = `0px 0px 30px #B79040`;
            email.style.border = `1px solid #B79040`;
        
            password.classList.add("focus");
            password.style.boxShadow = `0px 0px 30px #B79040`;
            password.style.border = `1px solid #B79040`;

            logIn.classList.add("focus");
            logIn.style.boxShadow = `0px 0px 30px #B79040`;
            logIn.style.border = `1px solid #B79040`;

                checkmarkRegistration.src = `checkmark-registration.png`;
                checkmarkRegistration.style.content = ""
                    checkmarkRegistration.style.position = `absolute`;
                    checkmarkRegistration.style.left = `694px`;
                    checkmarkRegistration.style.margin = `-6px 0px 0px 0px`;

                    checkmarkClone2.src = `checkmark-registration.png`;
                    checkmarkClone2.style.content = "";
                    checkmarkClone2.style.position = `absolute`;
                    checkmarkClone2.style.left = `694px`;
                    checkmarkClone2.style.margin = `-6px 0px 0px 0px`;

                    checkmarkClone3.src = `checkmark-registration.png`;
                    checkmarkClone3.style.content = "";
                    checkmarkClone3.style.position = `absolute`;
                    checkmarkClone3.style.left = `694px`;
                    checkmarkClone3.style.margin = `-6px 0px 0px 0px`;

                    nthInput1.prepend(checkmarkRegistration)
                    nthInput2.prepend(checkmarkClone2);
                    nthInput3.prepend(checkmarkClone3);

        mainForm.addEventListener('submit', function(event){
            event.preventDefault();
            location.href = `http://127.0.0.1:5501/index.html`;
            user.logIn = logIn.value
            user.email = email.value
            user.password = password.value;
        })
    }else{
        user.logIn = '';
        user.email = '';
        user.password = '';
        
        mainForm.addEventListener('submit', function(event){
            event.preventDefault();
            location.href = `http://127.0.0.1:5501/registration.html`;
            console.log(user)
        })
        logIn.classList.add("focus");
        logIn.style.boxShadow = `0px 0px 30px red`;
        logIn.style.border = `1px solid red`;

        email.classList.add("focus");
        email.style.boxShadow = `0px 0px 30px red`;
        email.style.border = `1px solid red`;

        password.classList.add("focus");
        password.style.boxShadow = `0px 0px 30px red`;
        password.style.border = `1px solid red`;

        checkmarkRegistration.style.content = `url(crossmarkRegistration.png)`
        checkmarkRegistration.style.position = `absolute`;
        checkmarkRegistration.style.left = `694px`;
        checkmarkRegistration.style.margin = `-4px 0px 0px 0px`;
        checkmarkRegistration.style.height = `33px`;

        checkmarkClone2.style.content = `url(crossmarkRegistration.png)`;
        checkmarkClone2.style.position = `absolute`;
        checkmarkClone2.style.left = `694px`;
        checkmarkClone2.style.margin = `-4px 0px 0px 0px`;
        checkmarkClone2.style.height = `33px`;

        checkmarkClone3.style.content = `url(crossmarkRegistration.png)`;
        checkmarkClone3.style.position = `absolute`;
        checkmarkClone3.style.left = `694px`;
        checkmarkClone3.style.margin = `-4px 0px 0px 0px`;
        checkmarkClone3.style.height = `33px`;

        nthInput1.prepend(checkmarkRegistration);
        nthInput2.prepend(checkmarkClone2);
        nthInput3.prepend(checkmarkClone3);

        if(emailValidation.test(email.value) === false && passwordValidation.test(password.value) === true){
            email.classList.add("focus");
            email.style.boxShadow = `0px 0px 30px red`;
            email.style.border = `1px solid red`;

            password.classList.add("focus");
            password.style.boxShadow = `0px 0px 30px #B79040`;
            password.style.border = `1px solid #B79040`;

            checkmarkClone2.style.content = `url(crossmarkRegistration.png)`
            checkmarkClone2.style.position = `absolute`;
            checkmarkClone2.style.left = `694px`;
            checkmarkClone2.style.margin = `-4px 0px 0px 0px`;
            checkmarkClone2.style.height = `33px`;
            nthInput2.prepend(checkmarkClone2);


            checkmarkClone3.src = `checkmark-registration.png`;
            checkmarkClone3.style.content = "";
            checkmarkClone3.style.position = `absolute`;
            checkmarkClone3.style.left = `694px`;
            checkmarkClone3.style.margin = `-6px 0px 0px 0px`;
            nthInput3.prepend(checkmarkClone3)
            
}
else if(passwordValidation.test(password.value) === false && emailValidation.test(email.value) === true){
    email.classList.add("focus");
    email.style.boxShadow = `0px 0px 30px #B79040`;
    email.style.border = `1px solid #B79040`;


    password.classList.add("focus");
    password.style.boxShadow = `0px 0px 30px red`;
    password.style.border = `1px solid red`;
    checkmarkClone3.style.content = `url(crossmarkRegistration.png)`;
    checkmarkClone3.style.position = `absolute`;
    checkmarkClone3.style.left = `694px`;
    checkmarkClone3.style.margin = `-4px 0px 0px 0px`;
    checkmarkClone3.style.height = `33px`;

    nthInput3.prepend(checkmarkClone3);

    checkmarkClone2.src = `checkmark-registration.png`;
    checkmarkClone2.style.content = "";
    checkmarkClone2.style.position = `absolute`;
    checkmarkClone2.style.left = `694px`;
    checkmarkClone2.style.margin = `-6px 0px 0px 0px`;

    nthInput2.prepend(checkmarkClone2)

}else if(logIn.value === '' && emailValidation.test(email.value) === true && passwordValidation.test(password.value) === true){
    email.classList.add("focus");
    email.style.boxShadow = `0px 0px 30px #B79040`;
    email.style.border = `1px solid #B79040`;
    
    checkmarkClone2.src = `checkmark-registration.png`;
    checkmarkClone2.style.content = "";
    checkmarkClone2.style.position = `absolute`;
    checkmarkClone2.style.left = `694px`;
    checkmarkClone2.style.margin = `-6px 0px 0px 0px`;

    nthInput2.prepend(checkmarkClone2)

    password.classList.add("focus");
    password.style.boxShadow = `0px 0px 30px red`;
    password.style.border = `1px solid #B79040`;

    checkmarkClone3.src = `checkmark-registration.png`
    checkmarkClone3.style.content = "";
    checkmarkClone3.style.position = `absolute`;
    checkmarkClone3.style.left = `694px`;
    checkmarkClone3.style.margin = `-4px 0px 0px 0px`;
    checkmarkClone3.style.height = `33px`;

    nthInput3.prepend(checkmarkClone3);

    logIn.classList.add("focus");
    logIn.style.boxShadow = `0px 0px 30px red`;
    logIn.style.border = `1px solid red`;

    checkmarkRegistration.style.content = `url(crossmarkRegistration.png)`
    checkmarkRegistration.style.position = `absolute`;
    checkmarkRegistration.style.left = `694px`;
    checkmarkRegistration.style.margin = `-4px 0px 0px 0px`;
    checkmarkRegistration.style.height = `33px`;
}

if(logIn.value !== ''){
    logIn.classList.add("focus");
    logIn.style.boxShadow = `0px 0px 30px #B79040`;
    logIn.style.border = `1px solid #B79040`;

    checkmarkRegistration.src = `checkmark-registration.png`;
    checkmarkRegistration.style.content = `url(checkmark-registration.png)`;
    checkmarkRegistration.style.position = `absolute`;
    checkmarkRegistration.style.left = `694px`;
    checkmarkRegistration.style.margin = `-4px 0px 0px 0px`;
    checkmarkRegistration.style.height = `33px`;
    nthInput1.prepend(checkmarkRegistration);
}
}
})
