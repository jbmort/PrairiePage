import './style.css';
import runMainPage from './home.js';
import runContactPage from './contact.js';
import runServicesPage from './services.js';
console.log('running index')

const content = document.getElementById('content');

// CREATE TOP MENU //
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = 'Prairie Project Services'

const menuBar = document.createElement('div');
menuBar.setAttribute('id','menu');

const menuButtons = document.createElement('div');
menuButtons.setAttribute('id', 'menuButtons');

const homeBtn = document.createElement('button');
homeBtn.setAttribute('id','home');
homeBtn.textContent = 'HOME';

const servicesBtn = document.createElement('button');
servicesBtn.setAttribute('id','services');
servicesBtn.textContent = 'SERVICES';

const contactBtn = document.createElement('button');
contactBtn.setAttribute('id','contact');
contactBtn.textContent = 'CONTACT';

menuButtons.append(homeBtn, servicesBtn, contactBtn)
menuBar.append(title, menuButtons);
content.appendChild(menuBar);

let pageBody = document.createElement('div');
pageBody.setAttribute('id','pageBody');
content.append(pageBody);

let foot = document.createElement('footer');
foot.setAttribute('id','footer');
foot.innerHTML = 'Mortensen &copy 2024'
content.appendChild(foot);


// PAGE CONTENTS LOGIC
runMainPage();
let pageContent = {
value: 'HOME',
getValue(){return this.value;},
setValue(button){this.value = button;},
};

homeBtn.addEventListener('click', ()=>{
    if (pageContent.getValue() !== homeBtn.textContent){
        pageContent.setValue(homeBtn.textContent);
        while(pageBody.firstChild){pageBody.removeChild(pageBody.firstChild)};
        console.log(pageContent.getValue())
        runMainPage();
    }
})

servicesBtn.addEventListener('click', ()=>{
    if (pageContent.getValue() !== servicesBtn.textContent){
        pageContent.setValue(servicesBtn.textContent)
        while(pageBody.firstChild){pageBody.removeChild(pageBody.firstChild)};
        console.log(pageContent.getValue())
        runServicesPage();
    }
})

contactBtn.addEventListener('click', ()=>{
    if (pageContent.getValue() !== contactBtn.textContent){
        pageContent.setValue(contactBtn.textContent)
        while(pageBody.firstChild){pageBody.removeChild(pageBody.firstChild)};
        console.log(pageContent.getValue())
        runContactPage();

    }
})