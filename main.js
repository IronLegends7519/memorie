const cards = document.querySelectorAll('.cards');
let a = "a";
let b = "b";
let c = "c";
let d = "d";
let cardsMixedArray = [];

let cardsArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
while(cardsArray.length > 0){
  let random = Math.floor(Math.random() * cardsArray.length);
  cardsMixedArray.push(cardsArray[random]);
  cardsArray = cardsArray.slice(0,random).concat(cardsArray.slice(random+1));
}
console.log(cardsMixedArray)


    for(let i= 0 ;i < cards.length ; i++ ){
    cards[i].addEventListener('click',()=>{
      if(cards[i].style.backgroundColor === 'black'){
        cards[i].style.backgroundColor = 'white';
      
      if(a === "a"){
        a = cards[i].textContent;
        c = cards[i];
        console.log(a)
      }
      else if(a !== "a" && b === "b"){
        b = cards[i].textContent;
        d = cards[i]
        console.log(b)
      }
      else if(a !== b){
        c.style.backgroundColor = 'black';
        a = cards[i].textContent;
        c = cards[i]
        console.log(a)
        d.style.backgroundColor = 'black';
        b ="b"
        d="d"
      }
      else if(a === b){
        a=cards[i].textContent
        c=cards[i]
        b="b"
        d="d"
        console.log('bonjour')
      }
      }
    })}
