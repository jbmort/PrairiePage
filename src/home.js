// build home page html
import main from './assets/img/main.jpg';

const mainImg = new Image();
mainImg.main = main;

export default function runMainPage(){

    let mainPage = new DocumentFragment

    let quote = document.createElement('div');
    quote.setAttribute('id','quote');
    let quoteText = document.createElement('h2');
    quoteText.innerText = 'Our ability to perceive quality in nature begins, as in art, with the pretty. It expands through successive stages of the beautiful to values as yet uncaptured by language.';
    let quoteSig = document.createElement('h2');
    quoteSig.innerText = '-Aldo Leopold';
    quote.append(quoteText, quoteSig);

    let pic = document.createElement('img');
    pic.setAttribute('id','homePic')
    pic.setAttribute('src', main);
    pic.setAttribute('alt', 'vast rolling hills covered in diverse priaire habitiat at konza priaire in kansas')
    let imgDisc = document.createElement('h2');
    imgDisc.setAttribute('id','homeImgDisc')
    imgDisc.innerText = 'A beautiful, expansive, and diverse prairie is the goal of any great prairie restoration project. Konza Prairie (pictured above) is one of the few great prairies remaining of the United States.';
   

    mainPage.append(quote, pic, imgDisc)

    pageBody.append(mainPage)

};