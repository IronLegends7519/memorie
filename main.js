const cards = document.querySelectorAll('.cards')
let a = "a";
let b = "b";
let c = "c";
let d = "d";
let Random;
let T = cards;
let A = [];
let C;
let B = [];
let D = T;

  for(let i= 0 ;i < cards.length ; i++ ){
    Random=Math.floor(Math.random(1)*T.length);
    B = T[i].textContent
    A.push(D[Random]);
    
    cards[i].textContent = A[i].textContent
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
