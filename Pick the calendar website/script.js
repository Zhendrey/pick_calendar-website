//Defining elements
const wrapper = document.querySelector('.wrapper');
const body = document.body;
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const pickTheCalendar = document.querySelector('.pick-the-calendar');
const calendarAndDate = document.querySelector('.calendar-and-date');
const themeNumbers = document.querySelector('.theme-numbers');
const calendarFrame = document.querySelector('.calendar-frame');
const websiteName = document.querySelector('.website-name');
const websiteDescription = document.querySelector('.website-description');
const decoratives = document.querySelector('.decoratives');
const decorativeCalendars = document.querySelector('.decoratives__calendars');
const curvedShapes = document.querySelector('.curved-shapes');
const curvedShape1 = document.querySelector('.curved-shape-1');
const curvedShape2 = document.querySelector('.curved-shape-2');
const modePreferences = document.querySelector('.mode-preferences');
const buttons = document.querySelector('.buttons');
const wavies = document.querySelector('.wavies');
const logInLogOut = document.querySelector('.log-in-log-out');
calendarFrame.style.display = `none`;
//!JUST PICK TRHE CALENDAR BUTTON!
//Create the pick the theme button
const pickTheTheme = document.createElement("button");
function pickTheThemeBtn(){
    pickTheCalendar.style.opacity = 0;
    calendarAndDate.style.opacity = 0;
    modePreferences.style.opacity = 0;
    modePreferences.style.transition = `none`
    pickTheCalendar.disabled = true;
    pickTheTheme.classList.add('pick-the-theme');
    pickTheTheme.textContent = `Click to pick the random calendar’s theme`;
    pickTheTheme.style.fontSize = '24.7px';
    pickTheTheme.style.display = `flex`;
    pickTheTheme.style.justifyContent = `center`;
    pickTheTheme.style.alignContent = `center`;
    pickTheTheme.style.color = "#000000";
    pickTheTheme.style.backgroundColor = "#CCA881";
    pickTheTheme.style.borderColor = `#CCA881`;
    pickTheTheme.style.borderRadius = "30px";
    pickTheCalendar.style.pointerEvents = `none`;
    calendarAndDate.style.pointerEvents = `none`;
    pickTheCalendar.after(pickTheTheme);
    pickTheTheme.style.opacity = 1;
}
//Animate the elements after all the elements are loaded
const transitionForElements = `all 0.9s ease 0s`;
window.addEventListener("load", animateElements);


function animateElements(){
    header.style.opacity = 1;
    header.style.top = `-10px`;
    header.style.transition = transitionForElements;
    websiteName.style.top = `-165px`;
    websiteName.style.transition = transitionForElements;
    main.style.opacity = 1;
    main.style.transition = transitionForElements;
    curvedShape1.style.left = `-10px`;
    curvedShape1.style.transition = transitionForElements;
    curvedShape2.style.left = `10px`;
    curvedShape2.style.transition = transitionForElements;
    websiteDescription.style.top = `-500px`;
    websiteDescription.style.transition = transitionForElements;
    logInLogOut.style.top = `-5px`;
    logInLogOut.style.transition = transitionForElements;
    modePreferences.style.top = `0px`;
    modePreferences.style.transition = transitionForElements;
    buttons.style.top = `0px`;
    buttons.style.transition = transitionForElements;
    wavies.style.top = `10px`;
    wavies.style.transition = transitionForElements;
}

const transitionWebsiteTheme = `all 0.5s ease 0s`;
//Change the website color theme
function changeWebsiteTheme(isThemeOrDateTheme, theme){
    header.style.transition = `none`;
    websiteName.style.transition = `none`;
    main.style.transition = `none`;
    curvedShape1.style.transition = `none`;
    curvedShape2.style.transition = `none`;
    websiteDescription.style.transition = `none`;
    logInLogOut.style.transition = `none`;
    modePreferences.style.transition = `none`;
    buttons.style.transition = `none`;
    wavies.style.transition = `none`;
    if(isThemeOrDateTheme === theme){
        if(theme === 0){
            body.style.background = ` rgba(30, 1, 34, 1)`;
            body.style.color = `rgb(248, 172, 29)`;
            decoratives.style.filter = `hue-rotate(232deg) brightness(0.4)`;
            decorativeCalendars.style.filter = `hue-rotate(16deg)`;
            curvedShapes.style.filter = `hue-rotate(16deg)`;
            logInLogOut.style.color = `rgb(248, 172, 29)`;
            wavies.style.filter = `hue-rotate(16deg)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 1){
            body.style.background = `rgb(23, 23, 23)`;
            body.style.color = `rgb(98, 172, 98)`;
            decoratives.style.filter = `grayscale(1) brightness(0.33)`;
            decorativeCalendars.style.filter = `hue-rotate(60deg) brightness(1.25)`;
            curvedShapes.style.filter = `hue-rotate(60deg) brightness(1.25)`;
            logInLogOut.style.color = `rgb(98, 172, 98)`;
            wavies.style.filter = `hue-rotate(60deg) brightness(1.5)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 2){
            body.style.background = `rgb(0, 0, 0)`;
            body.style.color = `rgb(255, 255, 0)`;
            decoratives.style.filter = `hue-rotate(322deg) brightness(0.65)`;
            decorativeCalendars.style.filter = `hue-rotate(10deg) brightness(1.3)`;
            curvedShapes.style.filter = `hue-rotate(313deg) brightness(0.8)`;
            logInLogOut.style.color = `rgb(255, 255, 0)`;
            wavies.style.filter = `hue-rotate(313deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 3){
            body.style.background = `rgb(255, 255, 255)`;
            body.style.color = `rgb(0, 0, 0)`;
            decoratives.style.filter = `grayscale(1) brightness(0.8)`;
            decorativeCalendars.style.filter = `grayscale(1) brightness(0.8)`;
            curvedShapes.style.filter = `grayscale(1) brightness(0.8)`;
            logInLogOut.style.color = `rgb(0, 0, 0)`;
            wavies.style.filter = `grayscale(1) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 4){
            body.style.background = `rgb(79, 84, 100)`;
            body.style.color = `rgb(125, 209, 125)`;
            decoratives.style.filter = `hue-rotate(65deg) brightness(0.6)`;
            decorativeCalendars.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            curvedShapes.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            logInLogOut.style.color = `rgb(1, 155, 1)`;
            wavies.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 5){
            body.style.background = `rgb(101, 155, 247)`;
            body.style.color = `rgb(255, 255, 255)`;
            decoratives.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            decorativeCalendars.style.filter = `brightness(10)`;
            curvedShapes.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            logInLogOut.style.color = `rgb(255, 255, 255)`;
            wavies.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 6){
            body.style.background = `rgb(255, 255, 255)`;
            body.style.color = `rgb(115, 80, 166)`;
            decoratives.style.filter = `hue-rotate(315deg) brightness(0.85)`;
            decorativeCalendars.style.filter = `hue-rotate(329deg)`;
            curvedShapes.style.filter = `hue-rotate(210deg) brightness(0.6)`;
            logInLogOut.style.color = `rgb(0, 0, 0)`;
            wavies.style.filter = `hue-rotate(360deg) brightness(1.3)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 7){
            body.style.background = `rgb(102, 48, 48)`;
            body.style.color = `rgb(255, 0, 144)`;
            decoratives.style.filter = `hue-rotate(315deg) brightness(0.35)`;
            decorativeCalendars.style.filter = `hue-rotate(305deg) brightness(1.1)`;
            curvedShapes.style.filter = `hue-rotate(305deg) brightness(0.7)`;
            logInLogOut.style.color = `rgb(255, 0, 144)`;
            wavies.style.filter = `hue-rotate(305deg) brightness(0.7)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 8){
            body.style.background = `linear-gradient(to bottom,  rgb(0,0,0) 0%,rgb(226,122,61) 100%)`;
            body.style.color = `rgb(253, 253, 189)`;
            decoratives.style.filter = `hue-rotate(351deg) brightness(1.3)`;
            decorativeCalendars.style.filter = `hue-rotate(351deg) brightness(1.4)`;
            curvedShapes.style.filter = `hue-rotate(351deg) brightness(1.4)`;
            logInLogOut.style.color = `rgb(253, 253, 189)`;
            wavies.style.filter = `hue-rotate(326deg) brightness(1.5) contrast(2)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 9){
            body.style.background = `rgb(154, 212, 231)`;
            body.style.color = `rgb(255 255 255)`;
            decoratives.style.filter = `hue-rotate(308deg) brightness(0.8) contrast(1.5)`;
            decorativeCalendars.style.filter = `hue-rotate(308deg) brightness(0.8) contrast(1.5)`;
            curvedShapes.style.filter = `hue-rotate(308deg) brightness(0.5) contrast(1.5)`;
            logInLogOut.style.color = `rgb(255 255 255)`;
            wavies.style.filter = `hue-rotate(308deg) brightness(0.5) contrast(1.5)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 10){
            body.style.background = `rgb(0 0 0)`;
            body.style.color = `rgb(255 0 0)`;
            decoratives.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            decorativeCalendars.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            curvedShapes.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            logInLogOut.style.color = `rgb(255 0 0)`;
            wavies.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 11){
            body.style.background = `rgb(255 183 196)`;
            body.style.color = `rgb(165 232 255)`;
            decoratives.style.filter = `hue-rotate(290deg) brightness(1.2)`;
            decorativeCalendars.style.filter = `hue-rotate(141deg) brightness(1.1) contrast(1.5)`;
            curvedShapes.style.filter = `hue-rotate(141deg) brightness(1.1) contrast(1.5)`;
            logInLogOut.style.color = `rgb(165 232 255)`;
            wavies.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }
    }else if(isThemeOrDateTheme === dateTheme){
        if(theme === 0){
            body.style.background = ` rgba(30, 1, 34, 1)`;
            body.style.color = `rgb(248, 172, 29)`;
            decoratives.style.filter = `hue-rotate(232deg) brightness(0.4)`;
            decorativeCalendars.style.filter = `hue-rotate(16deg)`;
            curvedShapes.style.filter = `hue-rotate(16deg)`;
            logInLogOut.style.color = `rgb(248, 172, 29)`;
            wavies.style.filter = `hue-rotate(16deg)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 1){
            body.style.background = `rgb(23, 23, 23)`;
            body.style.color = `rgb(98, 172, 98)`;
            decoratives.style.filter = `grayscale(1) brightness(0.33)`;
            decorativeCalendars.style.filter = `hue-rotate(60deg) brightness(1.25)`;
            curvedShapes.style.filter = ` hue-rotate(60deg) brightness(1.25)`;
            logInLogOut.style.color = `rgb(98, 172, 98)`;
            wavies.style.filter = `hue-rotate(60deg) brightness(1.5)`;
            body.style.transition = transitionWebsiteTheme;
        }
        else if(theme === 2){
            body.style.background = `rgb(0, 0, 0)`;
            body.style.color = `rgb(255, 255, 0)`;
            decoratives.style.filter = `hue-rotate(322deg) brightness(0.65)`;
            decorativeCalendars.style.filter = `hue-rotate(10deg) brightness(1.3)`;
            curvedShapes.style.filter = `hue-rotate(313deg) brightness(0.8)`;
            logInLogOut.style.color = `rgb(255, 255, 0)`;
            wavies.style.filter = `hue-rotate(313deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 3){
            body.style.background = `rgb(255, 255, 255)`;
            body.style.color = `rgb(0, 0, 0)`;
            decoratives.style.filter = `grayscale(1) brightness(0.8)`;
            decorativeCalendars.style.filter = `grayscale(1) brightness(0.8)`;
            curvedShapes.style.filter = `grayscale(1) brightness(0.8)`;
            logInLogOut.style.color = `rgb(0, 0, 0)`;
            wavies.style.filter = `grayscale(1) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 4){
            body.style.background = `rgb(79, 84, 100)`;
            body.style.color = `rgb(125, 209, 125)`;
            decoratives.style.filter = `hue-rotate(65deg) brightness(0.6)`;
            decorativeCalendars.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            curvedShapes.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            logInLogOut.style.color = `rgb(1, 155, 1)`;
            wavies.style.filter = `hue-rotate(45deg) brightness(1.1)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 5){
            body.style.background = `rgb(101, 155, 247)`;
            body.style.color = `rgb(255, 255, 255)`;
            decoratives.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            decorativeCalendars.style.filter = `brightness(10)`;
            curvedShapes.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            logInLogOut.style.color = `rgb(255, 255, 255)`;
            wavies.style.filter = `hue-rotate(13deg) brightness(1.5) opacity(0.75)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 6){
            body.style.background = `rgb(255, 255, 255)`;
            body.style.color = `rgb(115, 80, 166)`;
            decoratives.style.filter = `hue-rotate(315deg) brightness(0.85)`;
            decorativeCalendars.style.filter = `hue-rotate(329deg)`;
            curvedShapes.style.filter = `hue-rotate(210deg) brightness(0.6)`;
            logInLogOut.style.color = `rgb(0, 0, 0)`;
            wavies.style.filter = `hue-rotate(360deg) brightness(1.3)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 7){
            body.style.background = `rgb(102, 48, 48)`;
            body.style.color = `rgb(255, 0, 144)`;
            decoratives.style.filter = `hue-rotate(315deg) brightness(0.35)`;
            decorativeCalendars.style.filter = `hue-rotate(305deg) brightness(1.1)`;
            curvedShapes.style.filter = `hue-rotate(305deg) brightness(0.7)`;
            logInLogOut.style.color = `rgb(255, 0, 144)`;
            wavies.style.filter = `hue-rotate(305deg) brightness(0.7)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 8){
            body.style.background = `linear-gradient(to bottom,  rgb(0,0,0) 0%,rgb(226,122,61) 100%)`;
            body.style.color = `rgb(253, 253, 189)`;
            decoratives.style.filter = `hue-rotate(351deg) brightness(1.3)`;
            decorativeCalendars.style.filter = `hue-rotate(351deg) brightness(1.4)`;
            curvedShapes.style.filter = `hue-rotate(351deg) brightness(1.4)`;
            logInLogOut.style.color = `rgb(253, 253, 189)`;
            wavies.style.filter = `hue-rotate(326deg) brightness(1.5) contrast(2)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 9){
            body.style.background = `rgb(154, 212, 231)`;
            body.style.color = `rgb(255 255 255)`;
            decoratives.style.filter = `hue-rotate(308deg) brightness(0.8) contrast(1.5)`;
            decorativeCalendars.style.filter = `hue-rotate(308deg) brightness(0.8) contrast(1.5)`;
            curvedShapes.style.filter = `hue-rotate(308deg) brightness(0.5) contrast(1.5)`;
            logInLogOut.style.color = `rgb(255 255 255)`;
            wavies.style.filter = `hue-rotate(308deg) brightness(0.5) contrast(1.5)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 10){
            body.style.background = `rgb(0 0 0)`;
            body.style.color = `rgb(255 0 0)`;
            decoratives.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            decorativeCalendars.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            curvedShapes.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            logInLogOut.style.color = `rgb(255 0 0)`;
            wavies.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }else if(theme === 11){
            body.style.background = `rgb(255 183 196)`;
            body.style.color = `rgb(165 232 255)`;
            decoratives.style.filter = `hue-rotate(290deg) brightness(1.2)`;
            decorativeCalendars.style.filter = `hue-rotate(141deg) brightness(1.1) contrast(1.5)`;
            curvedShapes.style.filter = `hue-rotate(141deg) brightness(1.1) contrast(1.5)`;
            logInLogOut.style.color = `rgb(165 232 255)`;
            wavies.style.filter = `hue-rotate(266deg) brightness(0.8)`;
            body.style.transition = transitionWebsiteTheme;
        }
    }else{
        console.error(`Invalid values of isThemeOrDateTheme or theme`);
    }
}

//Make the pick the theme button appear
pickTheCalendar.addEventListener(`click`,(event) =>{
    if(event.target === pickTheCalendar){
        console.log(`1st calendar activated`)
        pickTheThemeBtn()
        pickTheTheme.addEventListener('click', pickThemeFunction)
    }
})

//Defining theme numbers
let numThemeOne = document.createElement("p");
numThemeOne.style.fontSize = `112px`;
numThemeOne.textContent = `1`;
numThemeOne.style.position = `absolute`;
numThemeOne.style.left = `50%`;
numThemeOne.style.top = `107%`;
numThemeOne.classList.add(`num-theme-one`);

let numThemeTwo = document.createElement("p");
numThemeTwo.style.fontSize = `112px`;
numThemeTwo.textContent = `2`;
numThemeTwo.style.position = `absolute`;
numThemeTwo.style.left = `50%`;
numThemeTwo.style.top = `107%`;
numThemeTwo.classList.add(`num-theme-two`);


let numThemeThree = document.createElement("p");
numThemeThree.style.fontSize = `112px`;
numThemeThree.textContent = `3`;
numThemeThree.style.position = `absolute`;
numThemeThree.style.left = `50%`;
numThemeThree.style.top = `107%`;
numThemeThree.classList.add(`num-theme-three`);



let numThemeFour = document.createElement("p");
numThemeFour.style.fontSize = `112px`;
numThemeFour.textContent = `4`;
numThemeFour.style.position = `absolute`;
numThemeFour.style.left = `50%`;
numThemeFour.style.top = `107%`;
numThemeFour.classList.add(`num-theme-four`);



let numThemeFive = document.createElement("p");
numThemeFive.style.fontSize = `112px`;
numThemeFive.textContent = `5`;
numThemeFive.style.position = `absolute`;
numThemeFive.style.left = `50%`;
numThemeFive.style.top = `107%`;
numThemeFive.classList.add(`num-theme-five`);



let numThemeSix = document.createElement("p");
numThemeSix.style.fontSize = `112px`;
numThemeSix.textContent = `6`;
numThemeSix.style.position = `absolute`;
numThemeSix.style.left = `50%`;
numThemeSix.style.top = `107%`;
numThemeSix.classList.add(`num-theme-six`);



let numThemeSeven = document.createElement("p");
numThemeSeven.style.fontSize = `112px`;
numThemeSeven.textContent = `7`;
numThemeSeven.style.position = `absolute`;
numThemeSeven.style.left = `50%`;
numThemeSeven.style.top = `107%`;
numThemeSeven.classList.add(`num-theme-seven`);



let numThemeEight = document.createElement("p");
numThemeEight.style.fontSize = `112px`;
numThemeEight.textContent = `8`;
numThemeEight.style.position = `absolute`;
numThemeEight.style.left = `50%`;
numThemeEight.style.top = `107%`;
numThemeEight.classList.add(`num-theme-eight`);

let numThemeNine = document.createElement("p");
numThemeNine.style.fontSize = `112px`;
numThemeNine.textContent = `9`;
numThemeNine.style.position = `absolute`;
numThemeNine.style.left = `50%`;
numThemeNine.style.top = `107%`;
numThemeNine.classList.add(`num-theme-nine`);



let numThemeTen = document.createElement("p");
numThemeTen.style.fontSize = `112px`;
numThemeTen.textContent = `10`;
numThemeTen.style.position = `absolute`;
numThemeTen.style.left = `50%`;
numThemeTen.style.top = `107%`;
numThemeTen.classList.add(`num-theme-ten`);



let numThemeEleven = document.createElement("p");
numThemeEleven.style.fontSize = `112px`;
numThemeEleven.textContent = `11`;
numThemeEleven.style.position = `absolute`;
numThemeEleven.style.left = `50%`;
numThemeEleven.style.top = `107%`;
numThemeEleven.classList.add(`num-theme-eleven`);



let numThemeTwelve = document.createElement("p");
numThemeTwelve.style.fontSize = `112px`;
numThemeTwelve.textContent = `12`;
numThemeTwelve.style.position = `absolute`;
numThemeTwelve.style.left = `50%`;
numThemeTwelve.style.top = `107%`;
numThemeTwelve.classList.add(`num-theme-twelve`);




//Create an array of theme numbers and delay
const themeNUms = [numThemeOne, numThemeTwo, numThemeThree, numThemeFour, numThemeFive, numThemeSix, numThemeSeven, numThemeEight, numThemeNine, numThemeTen, numThemeEleven, numThemeTwelve];
let themeNumberFrequency = 83.33;
let frequencyValue = themeNumberFrequency;
const calendars = ["url(Calendars/The%20calendar%20for%20January.jpg)", "url(Calendars/The%20calendar%20for%20February.jpg)", "url(Calendars/The%20calendar%20for%20March.jpg)","url(Calendars/The%20calendar%20for%20April.jpg)", "url(Calendars/The%20calendar%20for%20May.png)", "url(Calendars/The%20calendar%20for%20June.png)", "url(Calendars/The%20calendar%20for%20July.png)", "url(Calendars/The%20calendar%20for%20August.png)", "url(Calendars/The%20calendar%20for%20September.jpg)", "url(Calendars/The%20calendar%20for%20October.png)", "url(Calendars/The%20calendar%20for%20November.png)", "url(Calendars/The%20calendar%20for%20December.png)"];


let thePickedNumMessage = document.createElement("p");
let cancelThemeButton = document.createElement("button");
let confirmThemeButton = document.createElement("button");


//The loop index and the numbers random index
let ind = 0;
let themeLength = themeNUms.length - 1;
let theme;
//Create pick a theme function
function pickThemeFunction(){
    theme = Math.floor(Math.random () * themeLength);
    console.log(theme);
    pickTheCalendar.after(themeNUms[0])
    pickTheTheme.style.opacity = 0;
    pickTheTheme.style.display = `none`;
    buttons.style.top = `-300px`;
    buttons.style.transition = `none`;
    oneSecondThemeNumsChange(0,1);

    //Create the message for the theme button
    thePickedNumMessage.style.position = 'absolute';
    thePickedNumMessage.style.left = `30%`;
    thePickedNumMessage.style.top = `110%`;
    thePickedNumMessage.style.fontSize = `40px`;
    thePickedNumMessage.textContent = `The picked number is:`;
    thePickedNumMessage.style.color = `#BB8F3A`
    thePickedNumMessage.classList.add(`theme-message`);
    pickTheTheme.after(thePickedNumMessage);

    //Create the cancel button
    function cancelThemeBtnAppear(){
        cancelThemeButton.style.width = `266.9px`;
        cancelThemeButton.style.height = `71.3px`;
        cancelThemeButton.style.position = `absolute`;
        cancelThemeButton.style.top = `340%`;
        cancelThemeButton.style.left = `34%`;
        cancelThemeButton.style.backgroundColor = `#000000`;
        cancelThemeButton.textContent = `Cancel`;
        cancelThemeButton.classList.add(`cancel-button`);
        cancelThemeButton.style.color = `#BB8F3A`;
        cancelThemeButton.style.borderRadius = `30px`
        cancelThemeButton.style.fontSize = `40px`;
        thePickedNumMessage.after(cancelThemeButton);
    }
    setTimeout(cancelThemeBtnAppear, themeNumberFrequency)

    //Create the confirm button
    function confirmThemeButtonAppear(){
        confirmThemeBtnForDate.classList.remove();
        confirmThemeBtnForDate.remove();
        confirmThemeButton.style.width = `266.9px`;
        confirmThemeButton.style.height = `71.3px`;
        confirmThemeButton.textContent = `Confirm`;
        confirmThemeButton.classList.add(`confirm-button`);
        confirmThemeButton.style.borderRadius = `30px`;
        confirmThemeButton.style.fontSize = `40px`;
        confirmThemeButton.style.backgroundColor = `#CCA881`;
        confirmThemeButton.style.color = `#000000`;
        confirmThemeButton.style.position = `absolute`;
        confirmThemeButton.style.top = `340%`;
        confirmThemeButton.style.left = `34%`;
        confirmThemeButton.style.borderColor = `#CCA881`;
        confirmThemeButton.style.margin = `0px 0px 0px 300px`;
        cancelThemeButton.after(confirmThemeButton);
    }
    setTimeout(confirmThemeButtonAppear, themeNumberFrequency)
}

let themeLoopStatus = true;

//Change theme numbers
function changeThemeNums(previousThemeNum,themeNum){
        previousThemeNum.style.display = `none`;
        previousThemeNum.style.opacity = 0;
        themeNum.style.display = `block`;
        themeNum.style.opacity = 1;
        previousThemeNum.after(themeNum);
}
    //Change the numbers for 1 second
function oneSecondThemeNumsChange(less, more){
    if(theme === 0){
        themeLoopStatus = false;
        themeNUms[theme].style.display = `block`;
        pickTheCalendar.after(themeNUms[theme]);
    }else if(theme === 1){
        themeLoopStatus = false;
        themeNUms[theme].style.display = `block`;
        setTimeout(changeThemeNums, themeNumberFrequency, themeNUms[less], themeNUms[more])
        pickTheCalendar.after(themeNUms[theme])
    }
        while(ind < themeLength && themeLoopStatus === true){
            ind++;
            setTimeout(changeThemeNums, themeNumberFrequency, themeNUms[less++], themeNUms[more++])
            console.log(themeNUms[theme])
            if(theme === 2 && ind === 2){
                    break;
                }else if(theme === 3 && ind === 3){
                    break;
                }else if(theme === 4 && ind === 4){
                    break;
                }else if(theme === 5 && ind === 5){
                    break;
                }else if(theme === 6 && ind === 6){
                    break;
                }else if(theme === 7 && ind === 7){
                    break;
                }else if(theme === 8 && ind === 8){
                    break;
                }else if(theme === 9 && ind === 9){
                    break;
                }else if(theme === 10 && ind === 10){
                    break;
                }else if(theme === 11 && ind === 11){
                    break;
                }
        }
}

//Return the main buttons
function backTheButtons(){
    ind = 0;
    theme;
    pickTheTheme.parentNode.removeChild(pickTheTheme);
    thePickedNumMessage.parentNode.removeChild(thePickedNumMessage);
    themeNUms.forEach(numContainer => {
        numContainer.remove();
    })
    cancelThemeButton.parentNode.removeChild(cancelThemeButton);
    confirmThemeButton.remove();
    modePreferences.style.opacity = 1;
    buttons.style.top = `20px`;
    pickTheCalendar.style.opacity = 1;
    calendarAndDate.style.opacity = 1;
    pickTheCalendar.disabled = false;
    pickTheCalendar.style.pointerEvents = `all`;
    calendarAndDate.style.pointerEvents = `all`;
}

cancelThemeButton.addEventListener("click", backTheButtons);


//Create a confirm button function

function confirmTheCalendar(){
    thePickedNumMessage.remove();
        themeNUms.forEach(numContainer => {
            numContainer.remove();
        });
        cancelThemeButton.remove();
        confirmThemeButton.remove();
        pickTheCalendar.remove();
        pickTheTheme.remove();
        calendarAndDate.remove();
        calendarFrame.style.display = `block`;
    if(theme === 0){
        calendarFrame.style.backgroundImage = calendars[0];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 0);
    } else if(theme === 1){
        calendarFrame.style.backgroundImage = calendars[1];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 1);
    } else if(theme === 2){
        calendarFrame.style.backgroundImage = calendars[2];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 2);
    } else if(theme === 3){
        calendarFrame.style.backgroundImage = calendars[3];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 3);
    } else if(theme === 4){
        calendarFrame.style.backgroundImage = calendars[4];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 4);
    } else if(theme === 5){
        calendarFrame.style.backgroundImage = calendars[5];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 5);
    } else if(theme === 6){
        calendarFrame.style.backgroundImage = calendars[6];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 6);
    } else if(theme === 7){
        calendarFrame.style.backgroundImage = calendars[7];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 7);
    } else if(theme === 8){
        calendarFrame.style.backgroundImage = calendars[8];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 8);
    } else if(theme === 9){
        calendarFrame.style.backgroundImage = calendars[9];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 9);
    } else if(theme === 10){
        calendarFrame.style.backgroundImage = calendars[10];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 10);
    } else if(theme === 11){
        calendarFrame.style.backgroundImage = calendars[11];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
        changeWebsiteTheme(theme, 11);
    }
}

confirmThemeButton.addEventListener('click', confirmTheCalendar)




//!CALENDAR AND DATE BUTTON!


const pickDateTheCalendar = document.createElement("button")
function pickTheThemeBtnForDate(){
    pickTheCalendar.style.opacity = 0;
    calendarAndDate.style.opacity = 0;
    modePreferences.style.opacity = 0;
    modePreferences.style.transition = `none`;
    pickTheCalendar.disabled = true;
    pickDateTheCalendar.classList.add('pick-the-theme-date');
    pickDateTheCalendar.textContent = `Click to pick the random calendar’s theme`;
    pickDateTheCalendar.style.fontSize = '24.7px';
    pickTheTheme.style.display = `flex`;
    pickTheTheme.style.justifyContent = `center`;
    pickTheTheme.style.alignContent = `center`;
    pickDateTheCalendar.style.color = "#000000";
    pickDateTheCalendar.style.backgroundColor = "#CCA881";
    pickDateTheCalendar.style.borderColor = `#CCA881`;
    pickDateTheCalendar.style.borderRadius = "30px";
    //pickTheCalendar.style.position = 'absolute';
    pickTheCalendar.after(pickDateTheCalendar);
    pickDateTheCalendar.style.opacity = 1;
}
//Check the button the user chose
calendarAndDate.addEventListener('click', (event) =>{
    if(event.target === calendarAndDate){
        console.log(`2nd button activated`)
        pickTheThemeBtnForDate()
    pickDateTheCalendar.addEventListener('click', pickThemeForDateFunction)
    }
})

let confirmThemeBtnForDate = document.createElement("button");
let cancelDateThemeButton = document.createElement("button");
let dateTheme;
function pickThemeForDateFunction(){
    dateTheme = Math.floor(Math.random () * themeLength);
    console.log(dateTheme);
    pickTheCalendar.after(themeNUms[0])
    pickDateTheCalendar.style.opacity = 0;
    buttons.style.top = `-300px`;
    buttons.style.transition = `none`;
    oneSecondDateThemeNumsChange(0,1);

    //Create the message for the theme button
    thePickedNumMessage.style.position = 'absolute';
    thePickedNumMessage.style.left = `30%`;
    thePickedNumMessage.style.top = `105%`;
    thePickedNumMessage.style.fontSize = `40px`;
    thePickedNumMessage.textContent = `The picked number is:`;
    thePickedNumMessage.style.color = `#BB8F3A`
    thePickedNumMessage.classList.add(`theme-message`);
    pickDateTheCalendar.after(thePickedNumMessage);

    //Create the cancel button
    function cancelDateThemeBtnAppear(){
        cancelDateThemeButton.style.width = `266.9px`;
        cancelDateThemeButton.style.height = `71.3px`;
        cancelDateThemeButton.style.position = `absolute`;
        cancelDateThemeButton.style.top = `280%`;
        cancelDateThemeButton.style.left = `34%`;
        cancelDateThemeButton.style.backgroundColor = `#000000`;
        cancelDateThemeButton.textContent = `Cancel`;
        cancelDateThemeButton.classList.add(`cancel-button`);
        cancelDateThemeButton.style.color = `#BB8F3A`;
        cancelDateThemeButton.style.borderRadius = `30px`
        cancelDateThemeButton.style.fontSize = `40px`;
        thePickedNumMessage.after(cancelDateThemeButton);
    }
    setTimeout(cancelDateThemeBtnAppear, themeNumberFrequency);

    //Create the confirm button for date
    function confirmThemeBtnForDateAppear(){
        confirmThemeButton.classList.remove();
        confirmThemeButton.remove();
        confirmThemeBtnForDate.style.width = `266.9px`;
        confirmThemeBtnForDate.style.height = `71.3px`;
        confirmThemeBtnForDate.textContent = `Confirm`;
        confirmThemeBtnForDate.classList.add(`confirm-button-for-date`);
        confirmThemeBtnForDate.style.borderRadius = `30px`;
        confirmThemeBtnForDate.style.fontSize = `40px`;
        confirmThemeBtnForDate.style.backgroundColor = `#CCA881`;
        confirmThemeBtnForDate.style.color = `#000000`;
        confirmThemeBtnForDate.style.position = `absolute`;
        confirmThemeBtnForDate.style.top = `280%`;
        confirmThemeBtnForDate.style.left = `34%`;
        confirmThemeBtnForDate.style.borderColor = `#CCA881`;
        confirmThemeBtnForDate.style.margin = `0px 0px 0px 300px`;
        cancelDateThemeButton.after(confirmThemeBtnForDate);
    } setTimeout(confirmThemeBtnForDateAppear, themeNumberFrequency)
}

function oneSecondDateThemeNumsChange(less, more){
    if(dateTheme === 0){
        themeLoopStatus = false;
        themeNUms[dateTheme].style.display = `block`;
        pickTheCalendar.after(themeNUms[dateTheme]);
    }else if(dateTheme === 1){
        themeLoopStatus = false;
        setTimeout(changeThemeNums, themeNumberFrequency, themeNUms[less], themeNUms[more])
        pickTheCalendar.after(themeNUms[dateTheme])
    }else{
        themeNUms[0].style.display = `none`
        pickTheCalendar.after(themeNUms[dateTheme]);
    }
}

function confirmTheCalendarBeforeFinal(){
    thePickedNumMessage.remove();
        themeNUms.forEach(numContainer => {
            numContainer.remove();
        });
        cancelThemeButton.remove();
        confirmThemeButton.remove();
        calendarFrame.style.display = `block`;
    if(dateTheme === 0){
        calendarFrame.style.backgroundImage = calendars[0];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 1){
        calendarFrame.style.backgroundImage = calendars[1];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 2){
        calendarFrame.style.backgroundImage = calendars[2];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 3){
        calendarFrame.style.backgroundImage = calendars[3];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 4){
        calendarFrame.style.backgroundImage = calendars[4];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 5){
        calendarFrame.style.backgroundImage = calendars[5];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 6){
        calendarFrame.style.backgroundImage = calendars[6];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 7){
        calendarFrame.style.backgroundImage = calendars[7];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 8){
        calendarFrame.style.backgroundImage = calendars[8];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 9){
        calendarFrame.style.backgroundImage = calendars[9];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 10){
        calendarFrame.style.backgroundImage = calendars[10];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    } else if(dateTheme === 11){
        calendarFrame.style.backgroundImage = calendars[11];        
        calendarFrame.style.backgroundPosition = `0px 0px`;
        calendarFrame.style.backgroundSize = `1000px 500px`;
    }
}

function confirmForDate(){
    thePickedNumMessage.remove();
    themeNUms.forEach(numContainer => {
        numContainer.style.display = `none`;
    });
    cancelDateThemeButton.remove();
    confirmThemeBtnForDate.remove();
}
function backTheButtonsForDate(){
    pickDateTheCalendar.remove();
    thePickedNumMessage.remove();
    themeNUms.forEach(numContainer => {
        numContainer.remove();
    })
    cancelDateThemeButton.remove();
    confirmThemeBtnForDate.remove();
    modePreferences.style.opacity = 1;
    buttons.style.top = `20px`;
    pickTheCalendar.style.opacity = 1;
    calendarAndDate.style.opacity = 1;
    pickTheCalendar.disabled = false;
}

cancelDateThemeButton.addEventListener('click', backTheButtonsForDate)

const pickTheDate = document.createElement("button");


//Create the pick the date button
function pickTheDateBtn(){
    pickDateTheCalendar.remove();
    thePickedNumMessage.style.opacity = 0;
    cancelDateThemeButton.remove();
    confirmThemeBtnForDate.remove();
    themeNUms.forEach(numContainer => {
        numContainer.style.opacity = 0;
    })
    calendarAndDate.style.opacity = 0;
    calendarAndDate.disabled = true;
    pickTheDate.classList.add(`pick-the-date`);
    pickTheDate.textContent = `Click to pick the number`;
    pickTheDate.style.backgroundColor = `#000000`;
    pickTheDate.style.color = `#BB8F3A`;
    pickTheDate.style.borderColor = `#000000`;
    pickTheDate.style.borderRadius = `30px`;
    pickTheDate.style.fontSize = '24.7px';
    pickTheDate.style.position = 'absolute';
    pickTheDate.style.top = `240%`
    pickTheDate.style.left = '693px';
    pickTheCalendar.after(pickTheDate);
}
confirmThemeBtnForDate.addEventListener('click', pickTheDateBtn)


//Create numbers for the pick the date button

let one = document.createElement("p");
one.style.fontSize = `112px`;
one.textContent = `1`;
one.style.position = `absolute`;
one.style.left = `50%`;
one.style.top = `107%`;
one.classList.add(`num-one`);

let two = document.createElement("p");
two.style.fontSize = `112px`;
two.textContent = `2`;
two.style.position = `absolute`;
two.style.left = `50%`;
two.style.top = `107%`;
two.classList.add(`num-two`);

let three = document.createElement("p");
three.style.fontSize = `112px`;
three.textContent = `3`;
three.style.position = `absolute`;
three.style.left = `50%`;
three.style.top = `107%`;
three.classList.add(`num-three`);

let four = document.createElement("p");
four.style.fontSize = `112px`;
four.textContent = `4`;
four.style.position = `absolute`;
four.style.left = `50%`;
four.style.top = `107%`;
four.classList.add(`num-four`);

let five = document.createElement("p");
five.style.fontSize = `112px`;
five.textContent = `5`;
five.style.position = `absolute`;
five.style.left = `50%`;
five.style.top = `107%`;
five.classList.add(`num-five`);

let six = document.createElement("p");
six.style.fontSize = `112px`;
six.textContent = `6`;
six.style.position = `absolute`;
six.style.left = `50%`;
six.style.top = `107%`;
six.classList.add(`num-six`);

let seven = document.createElement("p");
seven.style.fontSize = `112px`;
seven.textContent = `7`;
seven.style.position = `absolute`;
seven.style.left = `50%`;
seven.style.top = `107%`;
seven.classList.add(`num-seven`);

let eight = document.createElement("p");
eight.style.fontSize = `112px`;
eight.textContent = `8`;
eight.style.position = `absolute`;
eight.style.left = `50%`;
eight.style.top = `107%`;
eight.classList.add(`num-eight`);

let nine = document.createElement("p");
nine.style.fontSize = `112px`;
nine.textContent = `9`;
nine.style.position = `absolute`;
nine.style.left = `50%`;
nine.style.top = `107%`;
nine.classList.add(`num-nine`);

let ten = document.createElement("p");
ten.style.fontSize = `112px`;
ten.textContent = `10`;
ten.style.position = `absolute`;
ten.style.left = `50%`;
ten.style.top = `107%`;
ten.classList.add(`num-ten`);

let eleven = document.createElement("p");
eleven.style.fontSize = `112px`;
eleven.textContent = `11`;
eleven.style.position = `absolute`;
eleven.style.left = `50%`;
eleven.style.top = `107%`;
eleven.classList.add(`num-eleven`);

let twelve = document.createElement("p");
twelve.style.fontSize = `112px`;
twelve.textContent = `12`;
twelve.style.position = `absolute`;
twelve.style.left = `50%`;
twelve.style.top = `107%`;
twelve.classList.add(`num-twelve`);

let thirteen = document.createElement("p");
thirteen.style.fontSize = "112px";
thirteen.textContent = "13";
thirteen.style.position = "absolute"; 
thirteen.style.left = "50%";
thirteen.style.top = "107%";
thirteen.classList.add("num-thirteen");

let fourteen = document.createElement("p");
fourteen.style.fontSize = "112px"; 
fourteen.textContent = "14";
fourteen.style.position = "absolute";
fourteen.style.left = "50%";
fourteen.style.top = "107%";
fourteen.classList.add("num-fourteen");

let fifteen = document.createElement("p");
fifteen.style.fontSize = "112px";
fifteen.textContent = "15"; 
fifteen.style.position = "absolute";
fifteen.style.left = "50%";
fifteen.style.top = "107%";
fifteen.classList.add("num-fifteen");

let sixteen = document.createElement("p");  
sixteen.style.fontSize = "112px";
sixteen.textContent = "16";
sixteen.style.position = "absolute";
sixteen.style.left = "50%";  
sixteen.style.top = "107%";
sixteen.classList.add("num-sixteen");

let seventeen = document.createElement("p");
seventeen.style.fontSize = "112px"; 
seventeen.textContent = "17";
seventeen.style.position = "absolute";
seventeen.style.left = "50%";
seventeen.style.top = "107%";
seventeen.classList.add("num-seventeen");

let eighteen = document.createElement("p");
eighteen.style.fontSize = "112px";  
eighteen.textContent = "18"; 
eighteen.style.position = "absolute";
eighteen.style.left = "50%"; 
eighteen.style.top = "107%";
eighteen.classList.add("num-eighteen");

let nineteen = document.createElement("p");
nineteen.style.fontSize = "112px";
nineteen.textContent = "19";
nineteen.style.position = "absolute";
nineteen.style.left = "50%";
nineteen.style.top = "107%";  
nineteen.classList.add("num-nineteen");

let twenty = document.createElement("p");  
twenty.style.fontSize = "112px"; 
twenty.textContent = "20";
twenty.style.position = "absolute";
twenty.style.left = "50%"; 
twenty.style.top = "107%";
twenty.classList.add("num-twenty");

let twentyOne = document.createElement("p"); 
twentyOne.style.fontSize = "112px";
twentyOne.textContent = "21"; 
twentyOne.style.position = "absolute"; 
twentyOne.style.left = "50%";
twentyOne.style.top = "107%";
twentyOne.classList.add("num-twentyOne");

let twentyTwo = document.createElement("p"); 
twentyTwo.style.fontSize = "112px"; 
twentyTwo.textContent = "22";
twentyTwo.style.position = "absolute";
twentyTwo.style.left = "50%";
twentyTwo.style.top = "107%";
twentyTwo.classList.add("num-twentyTwo");

let twentyThree = document.createElement("p");
twentyThree.style.fontSize = "112px";  
twentyThree.textContent = "23";
twentyThree.style.position = "absolute";
twentyThree.style.left = "50%";
twentyThree.style.top = "107%";
twentyThree.classList.add("num-twentyThree");

let twentyFour = document.createElement("p");
twentyFour.style.fontSize = "112px"; 
twentyFour.textContent = "24";
twentyFour.style.position = "absolute"; 
twentyFour.style.left = "50%";
twentyFour.style.top = "107%"; 
twentyFour.classList.add("num-twentyFour");

let twentyFive = document.createElement("p");
twentyFive.style.fontSize = "112px";
twentyFive.textContent = "25";  
twentyFive.style.position = "absolute";
twentyFive.style.left = "50%";
twentyFive.style.top = "107%";
twentyFive.classList.add("num-twentyFive");

let twentySix = document.createElement("p"); 
twentySix.style.fontSize = "112px";
twentySix.textContent = "26"; 
twentySix.style.position = "absolute";
twentySix.style.left = "50%"; 
twentySix.style.top = "107%";
twentySix.classList.add("num-twentySix");

let twentySeven = document.createElement("p");  
twentySeven.style.fontSize = "112px"; 
twentySeven.textContent = "27";
twentySeven.style.position = "absolute";  
twentySeven.style.left = "50%";
twentySeven.style.top = "107%";
twentySeven.classList.add("num-twentySeven");

let twentyEight = document.createElement("p");
twentyEight.style.fontSize = "112px";  
twentyEight.textContent = "28"; 
twentyEight.style.position = "absolute";
twentyEight.style.left = "50%";
twentyEight.style.top = "107%";
twentyEight.classList.add("num-twentyEight");

let twentyNine = document.createElement("p"); 
twentyNine.style.fontSize = "112px";
twentyNine.textContent = "29"; 
twentyNine.style.position = "absolute";  
twentyNine.style.left = "50%";
twentyNine.style.top = "107%"; 
twentyNine.classList.add("num-twentyNine");

let thirty = document.createElement("p");
thirty.style.fontSize = "112px";  
thirty.textContent = "30";
thirty.style.position = "absolute";
thirty.style.left = "50%"; 
thirty.style.top = "107%"; 
thirty.classList.add("num-thirty");

let thirtyOne = document.createElement("p");  
thirtyOne.style.fontSize = "112px"; 
thirtyOne.textContent = "31";
thirtyOne.style.position = "absolute"; 
thirtyOne.style.left = "50%";
thirtyOne.style.top = "107%";
thirtyOne.classList.add("num-thirtyOne");



const numsForDate = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
    thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, 
    twenty, twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, 
    twentySix, twentySeven, twentyEight, twentyNine, thirty, thirtyOne
];

let dateNumFrequency = 32.25;
let dateFrequencyValue = dateNumFrequency;
let numsForDateRealLength = numsForDate.length - 1;

if(theme === 1){
    numsForDateRealLength = numsForDate.length - 3;
}else if(theme === 3 || theme === 15 || theme === 27 || theme === 5 || theme === 17 || theme === 29 || theme === 8 || theme === 20 || theme === 32 || theme === 10 || theme === 22 || theme === 34){
    numsForDateRealLength = numsForDate.length - 2;
}
let date = Math.floor(Math.random() * numsForDateRealLength);

let loop = 0;
console.log(date)

const cancelDateBtn = document.createElement("button");
const confirmCalendarAndDate = document.createElement("button");
function pickTheDateFunction(){
    pickTheDate.after(numsForDate[0]);
    pickTheDate.remove();
    oneSecondDateChange(0,1);
    thePickedNumMessage.style.opacity = 1;

        //Create the cancel button
        function cancelDateBtnAppear(){
            cancelDateBtn.style.width = `266.9px`;
            cancelDateBtn.style.height = `71.3px`;
            cancelDateBtn.style.position = `absolute`;
            cancelDateBtn.style.top = `340%`;
            cancelDateBtn.style.left = `34%`;
            cancelDateBtn.style.backgroundColor = `#000000`;
            cancelDateBtn.textContent = `Cancel`;
            cancelDateBtn.classList.add(`cancel-date-button`);
            cancelDateBtn.style.color = `#BB8F3A`;
            cancelDateBtn.style.borderRadius = `30px`;
            cancelDateBtn.style.fontSize = `40px`;
            thePickedNumMessage.after(cancelDateBtn);
        }
        setTimeout(cancelDateBtnAppear, themeNumberFrequency)
    
        //Create the confirm button
        function confirmCalendarAndDateBtnAppear(){
            confirmCalendarAndDate.style.width = `266.9px`;
            confirmCalendarAndDate.style.height = `71.3px`;
            confirmCalendarAndDate.textContent = `Confirm`;
            confirmCalendarAndDate.classList.add(`confirm-date-and-calendar-button`);
            confirmCalendarAndDate.style.borderRadius = `30px`;
            confirmCalendarAndDate.style.fontSize = `40px`;
            confirmCalendarAndDate.style.backgroundColor = `#CCA881`;
            confirmCalendarAndDate.style.color = `#000000`;
            confirmCalendarAndDate.style.position = `absolute`;
            confirmCalendarAndDate.style.top = `340%`;
            confirmCalendarAndDate.style.left = `34%`;
            confirmCalendarAndDate.style.borderColor = `#CCA881`;
            confirmCalendarAndDate.style.margin = `0px 0px 0px 300px`;
            thePickedNumMessage.after(confirmCalendarAndDate);
        }
        setTimeout(confirmCalendarAndDateBtnAppear, themeNumberFrequency)
    
}

function backTheButtonsDate(){
    thePickedNumMessage.parentNode.removeChild(thePickedNumMessage);
    themeNUms.forEach(numContainer => {
        numContainer.remove();
    })
    numsForDate.forEach(dateNumContainer =>{
        dateNumContainer.remove();
    })
    cancelDateBtn.parentNode.removeChild(cancelDateBtn);
    confirmCalendarAndDate.remove();
    modePreferences.style.opacity = 1;
    pickTheCalendar.style.opacity = 1;
    calendarAndDate.style.opacity = 1;
    pickTheCalendar.disabled = false;
    calendarAndDate.disabled = false;
}

cancelDateBtn.addEventListener("click", backTheButtonsDate);
confirmCalendarAndDate.addEventListener("click", () =>{

})

function changeDate(previousDate,currentDate){
    previousDate.style.display = `none`;
    currentDate.style.display = `block`;
    previousDate.after(currentDate);
}

let isLoopDateWorking = true;

function oneSecondDateChange(decreaseDate,increaseDate){
    if(date === 0){
        isLoopDateWorking = false;
        pickTheDate.after(numsForDate[0])
    } else if(date === 1){
        isLoopDateWorking = false;
        setTimeout(changeDate, dateNumFrequency, numsForDate[0], numsForDate[1]);
        console.log(numsForDate[date])
            }

    dateLoop: while(loop < numsForDateRealLength && isLoopDateWorking){
        loop++;
        setTimeout(changeDate, dateNumFrequency, numsForDate[decreaseDate++], numsForDate[increaseDate++]);
        if(date === 2 && loop === 2){
            break;
        }else if(date === 3 && loop === 3){
            break;
        }else if(date === 4 && loop === 4){
            break;
        }else if(date === 5 && loop === 5){
            break;
        }else if(date === 6 && loop === 6){
            break;
        }else if(date === 7 && loop === 7){
            break;
        }else if(date === 8 && loop === 8){
            break;
        }
        else if(date === 9 && loop === 9){ 
            break; 
        }
else if(date === 10 && loop === 10){ 
    break; 
}
else if(date === 11 && loop === 11){ 
    break; 
}
else if(date === 12 && loop === 12){ 
    break;

}
else if(date === 13 && loop === 13){ 
    break; 
}
else if(date === 14 && loop === 14){ 
    break; 
}
else if(date === 15 && loop === 15){ 
    break; 
}

else if(date === 16 && loop === 16){ 
    break; 
}
else if(date === 17 && loop === 17){ 
    break; 
}
else if(date === 18 && loop === 18){ 
    break; 
}
else if(date === 19 && loop === 19){ 
    break; 
}
else if(date === 20 && loop === 20){ 
    break; 
}
else if(date === 21 && loop === 21){ 
    break; 
}
else if(date === 22 && loop === 22){ 
    break; 
}
else if(date === 23 && loop === 23){ 
    break; 
}
else if(date === 24 && loop === 24){ 
    break; 
}
else if(date === 25 && loop === 25){ 
    break; 
}
else if(date === 26 && loop === 26){ 
    break; 
}
else if(date === 27 && loop === 27){ 
    break; 
}
else if(date === 28 && loop === 28){ 
    break; 
}
else if(date === 29 && loop === 29){ 
    break; 
}
else if(date === 30 && loop === 30){ 
    break; 
}
}
}


pickTheDate.addEventListener("click", pickTheDateFunction);

//Create a calendar circle
const calendarCircle = document.createElement("img");
calendarCircle.src = `calendar-circle.png`;
calendarCircle.classList.add('calendar-circle');
calendarCircle.style.width = `210px`;
calendarCircle.style.height = `185px`;
calendarCircle.style.position = `relative`;

function showFinalCalenarAndDate(){
    confirmTheCalendar();
    confirmTheCalendarBeforeFinal();
    cancelDateBtn.remove();
    confirmCalendarAndDate.remove();
    pickTheCalendar.remove();
    calendarAndDate.remove();
    pickTheDate.remove();
    numsForDate.forEach(dateNumContainer =>{
        dateNumContainer.remove();
    })
    //Paste a calendar circle
    calendarFrame.append(calendarCircle)

    //Create conditions for the circle

    //If the month is January
    if(dateTheme === 0){
        calendarCircle.style.left = `-38px`;
        calendarCircle.style.top = `240px`;
        changeWebsiteTheme(dateTheme, 0);
    if(date === 1){
        calendarCircle.style.left = `106px`;
    }else if(date === 2){
        calendarCircle.style.left = `253px`;
    }else if(date === 3){
        calendarCircle.style.left = `397px`;
    }else if(date === 4){
        calendarCircle.style.left = `545px`;
    }else if(date === 5){
        calendarCircle.style.left = `719px`;
    }else if(date === 6){
        calendarCircle.style.left = `908px`;
        calendarCircle.style.top = `241px`;
    }else if(date === 7){
        calendarCircle.style.left = `-43px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 8){
        calendarCircle.style.left = `109px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 9){
        calendarCircle.style.left = `255px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 10){
        calendarCircle.style.left = `396px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 11){
        calendarCircle.style.left = `548px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 12){
        calendarCircle.style.left = `722px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 13){
        calendarCircle.style.left = `906px`;
        calendarCircle.style.top = `299px`;
    }else if(date === 14){
        calendarCircle.style.left = `-39px`;
        calendarCircle.style.top = `359px`;
    }else if(date === 15){
        calendarCircle.style.left = `106px`;
        calendarCircle.style.top = `359px`;
    }else if(date === 16){
        calendarCircle.style.left = `251px`;
        calendarCircle.style.top = `359px`;
    }else if(date === 17){
        calendarCircle.style.left = `396px`;
        calendarCircle.style.top = `358px`;
    }else if(date === 18){
        calendarCircle.style.left = `545px`;
        calendarCircle.style.top = `360px`;
    }else if(date === 19){
        calendarCircle.style.left = `723px`;
        calendarCircle.style.top = `358px`;
    }else if(date === 20){
        calendarCircle.style.left = `906px`;
        calendarCircle.style.top = `358px`;
    }else if(date === 21){
        calendarCircle.style.left = `-39px`;
        calendarCircle.style.top = `413px`;
    }else if(date === 22){
        calendarCircle.style.left = `104px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 23){
        calendarCircle.style.left = `251px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 24){
        calendarCircle.style.left = `396px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 25){
        calendarCircle.style.left = `545px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 26){
        calendarCircle.style.left = `716px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 27){
        calendarCircle.style.left = `906px`;
        calendarCircle.style.top = `414px`;
    }else if(date === 28){
        calendarCircle.style.left = `-11px`;
        calendarCircle.style.top = `486px`;
        calendarCircle.style.width = `155px`;
        calendarCircle.style.height = `125px`;
    }else if(date === 29){
        calendarCircle.style.left = `132px`;
        calendarCircle.style.top = `486px`;
        calendarCircle.style.width = `155px`;
        calendarCircle.style.height = `125px`;
    }else if(date === 30){
        calendarCircle.style.left = `275px`;
        calendarCircle.style.top = `486px`;
        calendarCircle.style.width = `155px`;
        calendarCircle.style.height = `125px`;
    }
    }

    //If the month is February
    if(dateTheme === 1){
        calendarCircle.style.top = `196px`;
        calendarCircle.style.left = `398px`;
        changeWebsiteTheme(dateTheme, 1);
        if(date === 1){
            calendarCircle.style.left = `570px`;
        }else if(date === 2){
            calendarCircle.style.left = `742px`;
        }else if(date === 3){
            calendarCircle.style.top = `194px`;
            calendarCircle.style.left = `918px`;
        }else if(date === 4){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `-57px`;
        }else if(date === 5){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `75px`;
        }else if(date === 6){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `232px`;
        }else if(date === 7){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `394px`;
        }else if(date === 8){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `569px`;
        }else if(date === 9){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `743px`;
        }else if(date === 10){
            calendarCircle.style.top = `261px`;
            calendarCircle.style.left = `918px`;
        }else if(date === 11){
            calendarCircle.style.top = `330px`;
            calendarCircle.style.left = `-56px`;
        }else if(date === 12){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `74px`;
        }else if(date === 13){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `233px`;
        }else if(date === 14){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `396px`;
        }else if(date === 15){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `570px`;
        }else if(date === 16){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `744px`;
        }else if(date === 17){
            calendarCircle.style.top = `329px`;
            calendarCircle.style.left = `918px`;
        }else if(date === 18){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `-56px`;
        }else if(date === 19){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `73px`;
        }else if(date === 20){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `228px`;
        }else if(date === 21){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `394px`;
        }else if(date === 22){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `569px`;
        }else if(date === 23){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `742px`;
        }else if(date === 24){
            calendarCircle.style.top = `398px`;
            calendarCircle.style.left = `916px`;
        }else if(date === 25){
            calendarCircle.style.top = `490px`;
            calendarCircle.style.left = `-34px`;
            calendarCircle.style.width = `165px`;
            calendarCircle.style.height = `122px`;
        }else if(date === 26){
            calendarCircle.style.top = `490px`;
            calendarCircle.style.left = `91px`;
            calendarCircle.style.width = `170px`;
            calendarCircle.style.height = `122px`;
        }else if(date === 28){
            calendarCircle.style.top = `490px`;
            calendarCircle.style.left = `408px`;
            calendarCircle.style.width = `170px`;
            calendarCircle.style.height = `122px`;
        }
    }
    //if the month in March
    if(dateTheme === 2){
        calendarCircle.style.left = `579px`;
        calendarCircle.style.top = `200px`;
        changeWebsiteTheme(dateTheme, 2);
        if(date === 1){
            calendarCircle.style.left = `738px`;
        }else if(date === 2){
            calendarCircle.style.left = `909px`;
        }else if(date === 3){
            calendarCircle.style.left = `-40px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 4){
            calendarCircle.style.left = `104px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 5){
            calendarCircle.style.left = `261px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 6){
            calendarCircle.style.left = `418px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 7){
            calendarCircle.style.left = `575px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 8){
            calendarCircle.style.left = `737px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 9){
            calendarCircle.style.left = `910px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 10){
            calendarCircle.style.left = `-45px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 11){
            calendarCircle.style.left = `105px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 12){
            calendarCircle.style.left = `250px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 13){
            calendarCircle.style.left = `418px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 14){
            calendarCircle.style.left = `576px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 15){
            calendarCircle.style.left = `739px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 16){
            calendarCircle.style.left = `908px`;
            calendarCircle.style.top = `315px`;
        }else if(date === 17){
            calendarCircle.style.left = `-45px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 18){
            calendarCircle.style.left = `105px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 19){
            calendarCircle.style.left = `259px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 20){
            calendarCircle.style.left = `422px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 21){
            calendarCircle.style.left = `576px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 22){
            calendarCircle.style.left = `740px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 23){
            calendarCircle.style.left = `908px`;
            calendarCircle.style.top = `369px`;
        }else if(date === 24){
            calendarCircle.style.left = `-47px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 25){
            calendarCircle.style.left = `105px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 26){
            calendarCircle.style.left = `259px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 27){
            calendarCircle.style.left = `418px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 28){
            calendarCircle.style.left = `576px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 29){
            calendarCircle.style.left = `740px`;
            calendarCircle.style.top = `422px`;
        }else if(date === 30){
            calendarCircle.style.left = `909px`;
            calendarCircle.style.top = `422px`;
        }
    }
    //If the month is April
    if(dateTheme === 3){
        calendarCircle.style.top = `207px`;
        calendarCircle.style.left = `709px`;
        changeWebsiteTheme(dateTheme, 3);
    if(date === 1){
        calendarCircle.style.left = `890px`;
    }else if(date === 2){
        calendarCircle.style.left = `-43px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 3){
        calendarCircle.style.left = `108px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 4){
        calendarCircle.style.left = `263px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 5){
        calendarCircle.style.left = `416px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 6){
        calendarCircle.style.left = `557px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 7){
        calendarCircle.style.left = `708px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 8){
        calendarCircle.style.left = `890px`;
        calendarCircle.style.top = `270px`;
    }else if(date === 9){
        calendarCircle.style.left = `-43px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 10){
        calendarCircle.style.left = `108px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 11){
        calendarCircle.style.left = `263px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 12){
        calendarCircle.style.left = `416px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 13){
        calendarCircle.style.left = `562px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 14){
        calendarCircle.style.left = `709px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 15){
        calendarCircle.style.left = `890px`;
        calendarCircle.style.top = `328px`;
    }else if(date === 16){
        calendarCircle.style.left = `-43px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 17){
        calendarCircle.style.left = `108px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 18){
        calendarCircle.style.left = `260px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 19){
        calendarCircle.style.left = `420px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 20){
        calendarCircle.style.left = `560px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 21){
        calendarCircle.style.left = `706px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 22){
        calendarCircle.style.left = `892px`;
        calendarCircle.style.top = `386px`;
    }else if(date === 23){
        calendarCircle.style.left = `-26px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 24){
        calendarCircle.style.left = `128px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 25){
        calendarCircle.style.left = `280px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 26){
        calendarCircle.style.left = `437px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 27){
        calendarCircle.style.left = `576px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 28){
        calendarCircle.style.left = `724px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }else if(date === 29){
        calendarCircle.style.left = `908px`;
        calendarCircle.style.top = `475px`;
        calendarCircle.style.width = `174px`;
        calendarCircle.style.height = `133px`;
    }
}
    //If the month is May
    if(dateTheme === 4){
        calendarCircle.style.left = `290px`;
        calendarCircle.style.top = `180px`;
        changeWebsiteTheme(dateTheme, 4);
    if(date === 1){
            calendarCircle.style.left = `465px`;
        }else if(date === 2){
            calendarCircle.style.left = `635px`;
        }else if(date === 3){
            calendarCircle.style.left = `795px`;
        }else if(date === 4){
            calendarCircle.style.left = `935px`;
        }else if(date === 5){
            calendarCircle.style.left = `-50px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 6){
            calendarCircle.style.left = `115px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 7){
            calendarCircle.style.left = `287px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 8){
            calendarCircle.style.left = `463px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 9){
            calendarCircle.style.left = `635px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 10){
            calendarCircle.style.left = `795px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 11){
            calendarCircle.style.left = `934px`;
            calendarCircle.style.top = `253px`;
        }else if(date === 12){
            calendarCircle.style.left = `-50px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 13){
            calendarCircle.style.left = `117px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 14){
            calendarCircle.style.left = `287px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 15){
            calendarCircle.style.left = `465px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 16){
            calendarCircle.style.left = `635px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 17){
            calendarCircle.style.left = `795px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 18){
            calendarCircle.style.left = `934px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 19){
            calendarCircle.style.left = `-50px`;
            calendarCircle.style.top = `323px`;
        }else if(date === 20){
            calendarCircle.style.left = `117px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 21){
            calendarCircle.style.left = `285px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 22){
            calendarCircle.style.left = `465px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 23){
            calendarCircle.style.left = `636px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 24){
            calendarCircle.style.left = `795px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 25){
            calendarCircle.style.left = `934px`;
            calendarCircle.style.top = `393px`;
        }else if(date === 26){
            calendarCircle.style.width = `195px`;
            calendarCircle.style.height = `133px`;
            calendarCircle.style.left = `-45px`;
            calendarCircle.style.top = `481px`;
        }else if(date === 27){
            calendarCircle.style.width = `195px`;
            calendarCircle.style.height = `133px`;
            calendarCircle.style.left = `130px`;
            calendarCircle.style.top = `475px`;
        }else if(date === 28){
            calendarCircle.style.width = `195px`;
            calendarCircle.style.height = `133px`;
            calendarCircle.style.left = `295px`;
            calendarCircle.style.top = `475px`;
        }else if(date === 29){
            calendarCircle.style.width = `195px`;
            calendarCircle.style.height = `133px`;
            calendarCircle.style.left = `473px`;
            calendarCircle.style.top = `479px`;
        }else if(date === 30){
            calendarCircle.style.width = `195px`;
            calendarCircle.style.height = `133px`;
            calendarCircle.style.left = `643px`;
            calendarCircle.style.top = `481px`;
        }
    }
    //If the month is June
    if(dateTheme === 5){
        calendarCircle.style.left = `715px`;
        calendarCircle.style.top = `170px`;
        changeWebsiteTheme(dateTheme, 5);
        if(date === 1){
            calendarCircle.style.left = `890px`;
        }else if(date === 2){
            calendarCircle.style.left = `-41px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 3){
            calendarCircle.style.left = `97px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 4){
            calendarCircle.style.left = `245px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 5){
            calendarCircle.style.left = `397px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 6){
            calendarCircle.style.left = `547px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 7){
            calendarCircle.style.left = `714px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 8){
            calendarCircle.style.left = `890px`;
            calendarCircle.style.top = `235px`;
        }else if(date === 9){
            calendarCircle.style.left = `-43px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 10){
            calendarCircle.style.left = `98px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 11){
            calendarCircle.style.left = `247px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 12){
            calendarCircle.style.left = `397px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 13){
            calendarCircle.style.left = `549px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 14){
            calendarCircle.style.left = `716px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 15){
            calendarCircle.style.left = `891px`;
            calendarCircle.style.top = `305px`;
        }else if(date === 16){
            calendarCircle.style.left = `-41px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 17){
            calendarCircle.style.left = `98px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 18){
            calendarCircle.style.left = `247px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 19){
            calendarCircle.style.left = `397px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 20){
            calendarCircle.style.left = `552px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 21){
            calendarCircle.style.left = `716px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 22){
            calendarCircle.style.left = `891px`;
            calendarCircle.style.top = `375px`;
        }else if(date === 23){
            calendarCircle.style.left = `-42px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 24){
            calendarCircle.style.left = `97px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 25){
            calendarCircle.style.left = `247px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 26){
            calendarCircle.style.left = `397px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 27){
            calendarCircle.style.left = `551px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 28){
            calendarCircle.style.left = `714px`;
            calendarCircle.style.top = `444px`;
        }else if(date === 29){
            calendarCircle.style.left = `890px`;
            calendarCircle.style.top = `444px`;
        }
    }
    //If the month is July
    if(dateTheme === 6){
        calendarCircle.style.top = `180px`;
        calendarCircle.style.left = `-41px`;
        changeWebsiteTheme(dateTheme, 6);
        if(date === 1){
            calendarCircle.style.left = `102px`;
        }else if(date === 2){
            calendarCircle.style.left = `247px`;
        }else if(date === 3){
            calendarCircle.style.left = `393px`;
        }else if(date === 4){
            calendarCircle.style.left = `546px`;
        }else if(date === 5){
            calendarCircle.style.left = `722px`;
        }else if(date === 6){
            calendarCircle.style.left = `908px`;
        }else if(date === 7){
            calendarCircle.style.left = `908px`;
        }else if(date === 7){
            calendarCircle.style.top = `249px`;
            calendarCircle.style.left = `-41px`;
        }else if(date === 8){
            calendarCircle.style.left = `102px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 9){
            calendarCircle.style.left = `247px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 10){
            calendarCircle.style.left = `393px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 11){
            calendarCircle.style.left = `546px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 12){
            calendarCircle.style.left = `722px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 13){
            calendarCircle.style.left = `909px`;
            calendarCircle.style.top = `249px`;
        }else if(date === 14){
            calendarCircle.style.left = `-41px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 15){
            calendarCircle.style.left = `101px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 16){
            calendarCircle.style.left = `246px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 17){
            calendarCircle.style.left = `392px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 18){
            calendarCircle.style.left = `546px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 19){
            calendarCircle.style.left = `722px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 20){
            calendarCircle.style.left = `909px`;
            calendarCircle.style.top = `320px`;
        }else if(date === 21){
            calendarCircle.style.left = `-41px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 22){
            calendarCircle.style.left = `101px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 23){
            calendarCircle.style.left = `246px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 24){
            calendarCircle.style.left = `392px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 25){
            calendarCircle.style.left = `547px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 26){
            calendarCircle.style.left = `722px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 27){
            calendarCircle.style.left = `909px`;
            calendarCircle.style.top = `392px`;
        }else if(date === 28){
            calendarCircle.style.width = `190px`;
            calendarCircle.style.height = `145px`;
            calendarCircle.style.left = `-33px`;
            calendarCircle.style.top = `472px`;
        }else if(date === 29){
            calendarCircle.style.width = `190px`;
            calendarCircle.style.height = `145px`;
            calendarCircle.style.left = `110px`;
            calendarCircle.style.top = `472px`;
        }else if(date === 30){
            calendarCircle.style.width = `190px`;
            calendarCircle.style.height = `145px`;
            calendarCircle.style.left = `255px`;
            calendarCircle.style.top = `472px`;
        }
    }
    //If the month is August
    if(dateTheme === 7){
        calendarCircle.style.top = `190px`;
        calendarCircle.style.left = `466px`;
        changeWebsiteTheme(dateTheme, 7);
        if(date === 1){
            calendarCircle.style.left = `618px`;
        }else if(date === 2){
            calendarCircle.style.left = `796px`;
        }else if(date === 3){
            calendarCircle.style.left = `935px`;
        }else if(date === 4){
            calendarCircle.style.left = `-29px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 5){
            calendarCircle.style.left = `135px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 6){
            calendarCircle.style.left = `302px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 7){
            calendarCircle.style.left = `466px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 8){
            calendarCircle.style.left = `618px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 9){
            calendarCircle.style.left = `799px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 10){
            calendarCircle.style.left = `935px`;
            calendarCircle.style.top = `260px`;
        }else if(date === 11){
            calendarCircle.style.left = `-28px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 12){
            calendarCircle.style.left = `136px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 13){
            calendarCircle.style.left = `303px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 14){
            calendarCircle.style.left = `467px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 15){
            calendarCircle.style.left = `619px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 16){
            calendarCircle.style.left = `799px`;
            calendarCircle.style.top = `330px`;
        }else if(date === 17){
            calendarCircle.style.left = `935px`;
            calendarCircle.style.top = `30px`;
        }else if(date === 18){
            calendarCircle.style.left = `-27px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 19){
            calendarCircle.style.left = `138px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 20){
            calendarCircle.style.left = `303px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 21){
            calendarCircle.style.left = `467px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 22){
            calendarCircle.style.left = `623px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 23){
            calendarCircle.style.left = `800px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 24){
            calendarCircle.style.left = `935px`;
            calendarCircle.style.top = `400px`;
        }else if(date === 25){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `135px`;
            calendarCircle.style.left = `-12px`;
            calendarCircle.style.top = `479px`;
        }else if(date === 26){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `135px`;
            calendarCircle.style.left = `155px`;
            calendarCircle.style.top = `479px`;
        }else if(date === 27){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `120px`;
            calendarCircle.style.left = `322px`;
            calendarCircle.style.top = `490px`;
        }else if(date === 28){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `135px`;
            calendarCircle.style.left = `482px`;
            calendarCircle.style.top = `478px`;
        }else if(date === 29){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `135px`;
            calendarCircle.style.left = `639px`;
            calendarCircle.style.top = `478px`;
        }else if(date === 30){
            calendarCircle.style.width = `175px`;
            calendarCircle.style.height = `135px`;
            calendarCircle.style.left = `815px`;
            calendarCircle.style.top = `478px`;
        }
    }
    //If the month is September
    if(dateTheme === 8){
        calendarCircle.style.left = `915px`;
        calendarCircle.style.top = `190px`;
        changeWebsiteTheme(dateTheme, 8);
    if(date === 1){
            calendarCircle.style.left = `-40px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 2){
            calendarCircle.style.left = `112px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 3){
            calendarCircle.style.left = `264px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 4){
            calendarCircle.style.left = `420px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 5){
            calendarCircle.style.left = `588px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 6){
            calendarCircle.style.left = `752px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 7){
            calendarCircle.style.left = `916px`;
            calendarCircle.style.top = `247px`;
        }else if(date === 8){
            calendarCircle.style.left = `-40px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 9){
            calendarCircle.style.left = `111px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 10){
            calendarCircle.style.left = `267px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 11){
            calendarCircle.style.left = `421px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 12){
            calendarCircle.style.left = `588px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 13){
            calendarCircle.style.left = `755px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 14){
            calendarCircle.style.left = `916px`;
            calendarCircle.style.top = `302px`;
        }else if(date === 15){
            calendarCircle.style.left = `-40px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 16){
            calendarCircle.style.left = `111px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 17){
            calendarCircle.style.left = `267px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 18){
            calendarCircle.style.left = `421px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 19){
            calendarCircle.style.left = `587px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 20){
            calendarCircle.style.left = `755px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 21){
            calendarCircle.style.left = `916px`;
            calendarCircle.style.top = `358px`;
        }else if(date === 22){
            calendarCircle.style.left = `-40px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 23){
            calendarCircle.style.left = `114px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 24){
            calendarCircle.style.left = `268px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 25){
            calendarCircle.style.left = `423px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 26){
            calendarCircle.style.left = `587px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 27){
            calendarCircle.style.left = `755px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 28){
            calendarCircle.style.left = `917px`;
            calendarCircle.style.top = `412px`;
        }else if(date === 29){
            calendarCircle.style.width = `190px`;
            calendarCircle.style.height = `155px`;
            calendarCircle.style.left = `-30px`;
            calendarCircle.style.top = `466px`;
        }
    }
        //If the month is October
        if(dateTheme === 9){
            calendarCircle.style.width = `125px`;
            calendarCircle.style.height = `125px`
            calendarCircle.style.left = `676px`;
            calendarCircle.style.top = `230px`;
            changeWebsiteTheme(dateTheme, 9);
            if(date === 1){
                calendarCircle.style.left = `753px`;
            }else if(date === 2){
                calendarCircle.style.left = `819px`;
            }else if(date === 3){
                calendarCircle.style.left = `889px`;
            }else if(date === 4){
                calendarCircle.style.left = `950px`;
            }else if(date === 5){
                calendarCircle.style.left = `1010px`;
            }else if(date === 6){
                calendarCircle.style.left = `608px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 7){
                calendarCircle.style.left = `676px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 8){
                calendarCircle.style.left = `753px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 9){
                calendarCircle.style.left = `819px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 10){
                calendarCircle.style.left = `889px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 11){
                calendarCircle.style.left = `950px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 12){
                calendarCircle.style.left = `1010px`;
                calendarCircle.style.top = `292px`;
            }else if(date === 13){
                calendarCircle.style.left = `608px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 14){
                calendarCircle.style.left = `678px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 15){
                calendarCircle.style.left = `750px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 16){
                calendarCircle.style.left = `819px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 17){
                calendarCircle.style.left = `889px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 18){
                calendarCircle.style.left = `953px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 19){
                calendarCircle.style.left = `1010px`;
                calendarCircle.style.top = `354px`;
            }else if(date === 20){
                calendarCircle.style.left = `608px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 21){
                calendarCircle.style.left = `678px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 22){
                calendarCircle.style.left = `753px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 23){
                calendarCircle.style.left = `819px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 24){
                calendarCircle.style.left = `889px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 25){
                calendarCircle.style.left = `953px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 26){
                calendarCircle.style.left = `1010px`;
                calendarCircle.style.top = `419px`;
            }else if(date === 27){
                calendarCircle.style.left = `608px`;
                calendarCircle.style.top = `485px`;
            }else if(date === 28){
                calendarCircle.style.left = `678px`;
                calendarCircle.style.top = `485px`;
            }else if(date === 29){
                calendarCircle.style.left = `753px`;
                calendarCircle.style.top = `485px`;
            }else if(date === 30){
                calendarCircle.style.left = `821px`;
                calendarCircle.style.top = `485px`;
            }
        }
        
        //If the month is November
        if(dateTheme === 10){
            calendarCircle.style.left = `537px`;
            calendarCircle.style.top = `210px`;
            changeWebsiteTheme(dateTheme, 10);
            if(date === 1){
                calendarCircle.style.left = `715px`;
            }else if(date === 2){
                calendarCircle.style.left = `896px`;
            }else if(date === 3){
                calendarCircle.style.left = `-43px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 4){
                calendarCircle.style.left = `93px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 5){
                calendarCircle.style.left = `230px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 6){
                calendarCircle.style.left = `364px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 7){
                calendarCircle.style.left = `538px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 8){
                calendarCircle.style.left = `713px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 9){
                calendarCircle.style.left = `896px`;
                calendarCircle.style.top = `278px`;
            }else if(date === 10){
                calendarCircle.style.left = `-43px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 11){
                calendarCircle.style.left = `93px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 12){
                calendarCircle.style.left = `230px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 13){
                calendarCircle.style.left = `367px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 14){
                calendarCircle.style.left = `538px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 15){
                calendarCircle.style.left = `715px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 16){
                calendarCircle.style.left = `896px`;
                calendarCircle.style.top = `344px`;
            }else if(date === 17){
                calendarCircle.style.left = `-43px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 18){
                calendarCircle.style.left = `93px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 19){
                calendarCircle.style.left = `230px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 20){
                calendarCircle.style.left = `370px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 21){
                calendarCircle.style.left = `539px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 22){
                calendarCircle.style.left = `716px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 23){
                calendarCircle.style.left = `896px`;
                calendarCircle.style.top = `405px`;
            }else if(date === 24){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `125px`;
                calendarCircle.style.left = `-25px`;
                calendarCircle.style.top = `487px`;
            }else if(date === 25){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `122px`;
                calendarCircle.style.left = `107px`;
                calendarCircle.style.top = `489px`;
            }else if(date === 26){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `122px`;
                calendarCircle.style.left = `243px`;
                calendarCircle.style.top = `489px`;
            }else if(date === 27){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `122px`;
                calendarCircle.style.left = `384px`;
                calendarCircle.style.top = `489px`;
            }else if(date === 28){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `122px`;
                calendarCircle.style.left = `554px`;
                calendarCircle.style.top = `489px`;
            }else if(date === 29){
                calendarCircle.style.width = `180px`;
                calendarCircle.style.height = `122px`;
                calendarCircle.style.left = `731px`;
                calendarCircle.style.top = `489px`;
            }
        }

        //If the month is December
        if(dateTheme === 11){
            calendarCircle.style.left = `917px`;
            calendarCircle.style.top = `182px`;
            changeWebsiteTheme(dateTheme, 11);
            if(date === 1){
                calendarCircle.style.left = `-23px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 2){
                calendarCircle.style.left = `132px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 3){
                calendarCircle.style.left = `290px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 4){
                calendarCircle.style.left = `446px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 5){
                calendarCircle.style.left = `605px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 6){
                calendarCircle.style.left = `754px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 7){
                calendarCircle.style.left = `917px`;
                calendarCircle.style.top = `242px`;
            }else if(date === 8){
                calendarCircle.style.left = `-23px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 9){
                calendarCircle.style.left = `132px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 10){
                calendarCircle.style.left = `290px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 11){
                calendarCircle.style.left = `446px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 12){
                calendarCircle.style.left = `605px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 13){
                calendarCircle.style.left = `754px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 14){
                calendarCircle.style.left = `918px`;
                calendarCircle.style.top = `297px`;
            }else if(date === 15){
                calendarCircle.style.left = `-24px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 16){
                calendarCircle.style.left = `132px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 17){
                calendarCircle.style.left = `290px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 18){
                calendarCircle.style.left = `446px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 19){
                calendarCircle.style.left = `605px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 20){
                calendarCircle.style.left = `754px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 21){
                calendarCircle.style.left = `918px`;
                calendarCircle.style.top = `353px`;
            }else if(date === 22){
                calendarCircle.style.left = `-24px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 23){
                calendarCircle.style.left = `132px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 24){
                calendarCircle.style.left = `290px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 25){
                calendarCircle.style.left = `446px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 26){
                calendarCircle.style.left = `605px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 27){
                calendarCircle.style.left = `755px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 28){
                calendarCircle.style.left = `917px`;
                calendarCircle.style.top = `410px`;
            }else if(date === 29){
                calendarCircle.style.width = `160px`;
                calendarCircle.style.height = `105px`;
                calendarCircle.style.left = `1px`;
                calendarCircle.style.top = `501px`;
            }else if(date === 30){
                calendarCircle.style.width = `160px`;
                calendarCircle.style.height = `105px`;
                calendarCircle.style.left = `156px`;
                calendarCircle.style.top = `501px`;
            }
        }
}
confirmCalendarAndDate.addEventListener("click", showFinalCalenarAndDate);