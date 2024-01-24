//build services html page
// import { add } from 'lodash'
import assessment from './assets/img/assessment.jpg'
import fire from './assets/img/fire.gif'
import invasives from './assets/img/invasives.jpg'
import seeding from './assets/img/seeding.jpg'
import seeds from './assets/img/seedds.jpeg'






export default function runServicesPage(){
    let servicePage = new DocumentFragment;
    
    let serviceTitle = document.createElement('h2');
    serviceTitle.setAttribute('id', 'serviceTitle');
    serviceTitle.innerText = 'SERVICES';
    servicePage.appendChild(serviceTitle);
    
    addService('Prairie Seeds', seeds, 'various species of seeds provided by our nursery', 'Our dediciated seed production team provides 200 different species of prairie seeds for your restoration needs.');
    
    addService('Restoration Seeding', seeding, 'seeding prepared field by tractor', 'Our team can handle restoration seeding projects of any size and can customize a seed mix to match the unique requirements of your property' );
    
    addService('Prescribed Fire', fire, 'a member of our prescribed burn team monitors a burn in progress', 'Prescibed burns bring life back to degraded prairies and help new plantings establish by helping to control woody species and invasive plants. Fire also helps to invigorate the growth of the prairie and encourages the establishment and blooming of many species.');
    
    addService('Invasive Management', invasives, 'invasive plant management team hard at work', 'Some projects require focused attention on stubborn invasive species. Our team of invasive specialists has the technique and treatment to tackle even the most agressive and unpleasant invasive plant species that you may find in your prairie restoration.');
    
    addService('Land Assessment', assessment, 'land assessment in progress', 'Getting an in-depth understanding of your land and the plants and animals that share it with you can help you make the right management decisions. Assessments can be a great first step if you are thinking about restoring, developing, farming, or making any major land changes on your property.');
    
    
    pageBody.append(servicePage);

    function addService(title, img, imgDisc, disc){
        let serv = new DocumentFragment
        let div = document.createElement('div');
        div.setAttribute('class', 'serviceBlock');
        let name = document.createElement('h3');
        name.setAttribute('class', 'serviceHeader');
        name.innerText = title;
        let image = document.createElement('img');
        image.setAttribute('src', img);
        image.setAttribute('alt', imgDisc);
        image.setAttribute('class', 'servicePic')
        let jobDisc = document.createElement('h3');
        jobDisc.setAttribute('class', 'jobDisc');
        jobDisc.innerText = disc;
        let textBox = document.createElement('div');
        textBox.setAttribute('class','textbox');
        textBox.append(name, jobDisc)
        
        div.append(image, textBox);
        serv.append(div);
        servicePage.append(serv);
    }
}