let clickedCard = null;
let stopClick = false;
let sameCombo = 0;

const colors = [
    'yellow', 'blue', 'orange', 'green', 'pink', 'purple', 'cyan', 'brown'
]
const cards =[...document.querySelectorAll('.card')];
for (let color of colors){
    const card1Index = parseInt(Math.random() * cards.length);
    const card1 = cards[card1Index];
    cards.splice(card1Index, 1);
    card1.className += `${color}`
    card1.setAttribute('data-color', color);

    const card2Index = parseInt(Math.random() * cards.length);
    const card2 = cards[card2Index];
    cards.splice(card2Index, 1);
    card2.className += `${color}`
    card2.setAttribute('data-color', color);
}

function cardClick(e) {
    const target = e.currentTarget;
    if( stopClick ||
        target === clickedCard ||
        target.className.includes('done')) {
        return;
    }
     //currentTarget is for choosing the div
     target.className = target.className
     .replace('color-hide', '')
     .trim();
    //  target.className += 'done';

    if (!clickedCard){      // if card not clicked, then display its color alone
      clickedCard = target;      
    } else if(clickedCard) {  
           //if card is clicked then checking if it matches
       if(clickedCard.getAttribute('data-color') !== 
       target.getAttribute('data-color')
       ) {
        stopClick = true;
        setTimeout( () => {
               clickedCard.className =  clickedCard.className.replace('done', '').trim() +
                'color-hide';
               target.className = target.className.replace('done', '').trim() + 
               'color-hide';

            clickedCard = null;
           stopClick = false;
             
        }, 500 );
        } else {
            sameCombo++;
            clickedCard = null;
            if(sameCombo === 8){
                alert('YOU WIN!!!');
            }
        }
    }
}

