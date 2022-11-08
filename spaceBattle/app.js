
//My ship class
class Ship {
    hull = 20;
    firepower = 5;
    accuracy = .7;
  
};

//Created personal ship
const myShip = new Ship();


//Alien Ship class
class Alien {
        //Random hull
        hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        //Random Firepower
        firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        //Random accuracy
        accuracy = Math.random() * (.8 - .6) + .6;

};




//Creating Aliens Ships
const alien1 = new Alien();
// const alien2 = new Alien();
// const alien3 = new Alien();
// const alien4 = new Alien();
// const alien5 = new Alien();
// const alien6 = new Alien();



//start the game 
const begin = () => {
    let accept = prompt('Welcome aboard captain. Earth is getting invaded by aliens and we need your help. Do you accept this mission?',   '( y ) or ( n )');
    
    if(accept.toLowerCase() === 'y'){
        gameStart()
    } else {
        alert('The aliens have taken over Earth. Thanks alot Captain.')
    }
};


//function that runs game
function gameStart() {
    let game1 = prompt('You fly your ship in the depths of space. A alien ship has been spotted, what do you do?', '(ATTACK) or (RETREAT)');

    if(game1.toLowerCase() === 'attack'){
        shipAttack();
    } else {
        retreat();
    }
};

//attack hit or miss function
function shipAttack() {
    if(Math.random() < myShip.accuracy){
        targetHit();//target hit function
    } else {
        alert('You have missed prepare to be attacked.')
        alienAttack();//alien attack starts
    }
};

//target hit
const targetHit = () => {
    alien1.hull = alien1.hull - myShip.firepower
    if(alien1.hull < 0) {
        alert('Alien ship destroyed')
        //new alien ship approaches
    } else {
        alert('Alien ship has survived. Prepare to be attacked.')
        alienAttack();//alien attack
    }
}

//function to choose next alien (loop maybe?)

//alien attack 
function alienAttack() {
    if(Math.random() < alien1.accuracy){
        myShip.hull = myShip.hull - alien1.firepower //target hit
        if(myShip.hull < 0){
           alert('Ship has been destroyed.');
            retreat();
        } else {
            atkprompt();//continue attack
        }
    } else {
        alert('Alien has missed') // target miss
        atkprompt();
    }
};

//attack or retreat prompt
function atkprompt() {
    let atk = prompt(`Your current hull is ${myShip.hull}. Do you wish to attack or retreat.`, '(Attack) or (retreat)' );
    if(atk.toLowerCase() === 'attack'){
        shipAttack();// hit or miss function
    } else {
        retreat();
    }
};


//stop the game / retreat 
function retreat() {
    alert("Mission failed we'll get them next time.")
};
