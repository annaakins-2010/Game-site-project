let myName = 'Amanda';
let myScore = '120';
let myNumber= '12';


console.log('My name is ${myName}. My score is ${myScore}. My number is ${myNumber}.')

class Game{
        constructor(Name, score){
            this.Name = Name;
            this.score = score;
       } 
        displayProduct(){
             console.log(`Game: ${this.Name}`);
             console.log(`Score: ${this.score.tofixed(2)}`);
       }

        claculateTotal(scorePoints){
             return this.score + (this.score + scorePoints)
       }
    }
    const scorePoints = 1.00;

    const score1 = new score("Amanda", 120)
    const score2 = new score("Karen", 109)
    const score3 = new score("Jim", 99)

    score1.displayProduct();

    const total = score1.claculateTotal(scorePoints);
    console.log(`Total score : $${total.tofixed(2)}`)