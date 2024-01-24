//build contact html page
import wet from './assets/img/wet.jpg'

export default function runContactPage(){
    let contactPage = new DocumentFragment;

    let headline = document.createElement('h2');
        headline.setAttribute('id','contactHeadline');
        headline.innerText = 'CONTACT US';

        let address = document.createElement('div');
        address.setAttribute('id','address');
        let lineOne = document.createElement('h3');
        let lineTwo = document.createElement('h3');
        let lineThree = document.createElement('h3');
        lineOne.innerText = 'Prairie Project Services';
        lineTwo.innerText = '12345 Address Rd';
        lineThree.innerText= 'Prairie City, IA 50228';
    address.append(lineOne, lineTwo, lineThree);

    let contactForm = document.createElement('form');
        contactForm.setAttribute('method', 'get');
        contactForm.setAttribute('action', '');
        contactForm.setAttribute('id', 'contactForm');
        contactForm.setAttribute('class', 'contact');

        let entries = document.createElement('div');
        entries.setAttribute('id','formData');
            let nameL = document.createElement('label');
            nameL.setAttribute('for', 'name');
            nameL.innerText = "Full Name:";
            let nameI = document.createElement('input');
            nameI.setAttribute('id','name');
            nameI.setAttribute('type', 'text');
            nameI.setAttribute('name', 'name');
            let phoneL = document.createElement('label');
            phoneL.setAttribute('for','phone');
            phoneL.innerText = "Phone Number:";
            let phoneI = document.createElement('input');
            phoneI.setAttribute('id', 'phone');
            phoneI.setAttribute('type', 'tel');
            phoneI.setAttribute('name', 'phone');

            let blockL = document.createElement('label');
            blockL.setAttribute('for', 'block');
            blockL.innerText = 'Questions?/ Comments';
            let blockI = document.createElement('textarea');
            blockI.setAttribute('id', 'block');
            blockI.setAttribute('name','text');
            blockI.setAttribute('rows', '7');
            blockI.setAttribute('cols', '75')
            blockI.setAttribute('placeholder', 'Feel free to ask us any prairie related questions you have or share any project ideas you would like to take on')

            entries.append(nameL, nameI, phoneL, phoneI, blockL, blockI)
            
        let subButton = document.createElement('input');
        subButton.setAttribute('type', 'submit');
        subButton.setAttribute('value', 'Submit')

        contactForm.append(entries, subButton)

        let prairieImg = document.createElement('img');
        prairieImg.setAttribute('src', wet);
        prairieImg.setAttribute('id','prairieImg');
        prairieImg.setAttribute('alt', 'prairie landscape');


    contactPage.append(headline, address, contactForm, prairieImg)

    pageBody.appendChild(contactPage)

}