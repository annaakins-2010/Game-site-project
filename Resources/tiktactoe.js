let myName = 'Amy';
let myScore = '10';
let myNumber= '11';


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

    const score1 = new score("Amy", 10)
    const score2 = new score("Kate", 9)
    const score3 = new score("Jay", 8)

    score1.displayProduct();

    const total = score1.claculateTotal(scorePoints);
    console.log(`Total score : $${total.tofixed(2)}`)