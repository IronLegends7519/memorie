const cards = document.querySelectorAll('.cards')
let a = "a";
let b = "b";
let c = "c";
let d = "d";

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
      else if(a !== cards[i].textContent && b !==cards[i].textContent && a !== b){
        c.style.backgroundColor = 'black';
        a = cards[i].textContent;
        console.log(a)
        d.style.backgroundColor = 'black';
        b ="b"
      }
      else if(a === b){
        a="a"
        b="b"
        console.log('bonjour')
      }


        
      }
    })}
