
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
        //Random hull between 3-6
        hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        //Random Firepower between 2-4
        firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        //Random accuracy between 0.6-0.8
        accuracy = Math.random() * (.8 - .6) + .6;

};


//Creating Aliens Ships
const alien1 = new Alien();
const alien2 = new Alien();
const alien3 = new Alien();
const alien4 = new Alien();
const alien5 = new Alien();
const alien6 = new Alien();



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

//boolean
//let alienDes = false;


//attack hit or miss function
function shipAttack() {
    if(Math.random() < myShip.accuracy){
        targetHit();//target hit function
    } else {
        alert('You have missed prepare to be attacked.')
        alienAttack();//alien attack starts
    }
};

let alienDown = alien1;


//target hit
const targetHit = () => {
    
    if(alien1.hull >= 0){
        alien1.hull = alien1.hull - myShip.firepower;
    }else if(alien1.hull <= 0 && alien2.hull >= 0){
        alienDown = alien2;
        alien2.hull = alien2.hull - myShip.firepower;
    }else if(alien2.hull <= 0 && alien3.hull >= 0){
        alienDown = alien3;
        alien3.hull = alien3.hull - myShip.firepower;
    }else if(alien3.hull <= 0 && alien4.hull >= 0){
        alienDown = alien4;
        alien4.hull = alien4.hull - myShip.firepower;
    }else if(alien4.hull <= 0 && alien5.hull >= 0){
        alienDown = alien5;
        alien5.hull = alien5.hull - myShip.firepower;
    }else if(alien5.hull <= 0 && alien6.hull >= 0){
        alienDown = alien6;
        alien6.hull = alien6.hull - myShip.firepower;
    }else if(alien6.hull <= 0){
        alert('Congrats you defeated all the aliens!');
        
    }
   
    if(alienDown.hull <= 0) {
        //alienDes = true;
       //alienHit();
        alert('Alien ship destroyed.')
        alert('Warning a new challenger approaches.')
        atkprompt();
        //new alien ship approaches
    } else if(alienDown.hull >= 0){
        alert('Alien ship has survived. Prepare to be attacked.')
        alienAttack();//alien attack
    }
};



// //update alien hulls / choose next alien
// function alienHit() {
//     if(alien1.hull > 0){
//        // alien1.hull = alien1.hull - myShip.firepower
//         return alien1
//     } else if(alien1.hull < 0 && alien2.hull > 0){
//       // alien2.hull = alien2.hull - myShip.firepower
//         return alien2
//     } else if(alien2.hull < 0 || alien2.hull < 0){
//       //  alien3.hull = alien3.hull - myShip.firepower
//         return alien3
//     } else if(alien3.hull < 0 || alien3.hull < 0){
//        // alien4.hull = alien4.hull - myShip.firepower 
//         return alien4
//     } else if(alien4.hull < 0 || alien4.hull < 0){
//        // alien5.hull = alien5.hull - myShip.firepower  
//         return alien5
//     } else if(alien5.hull < 0 || alien5.hull < 0){
//       //  alien6.hull = alien6.hull - myShip.firepower
//         return alien6
//     } else if(alien6.hull < 0){
//         return victory();
//     }
// };
// function nextAlien() {
//     if(alien1.hull > 0 || alien1.hull < 0){
//         return alien1
//         } else if(alien1.hull < 0 && alienDes === true){
//             return alien2
//         } else if(alien2.hull < 0 && alienDes === true){
//             return alien3
//         } else if(alien3.hull < 0 && alienDes === true){
//             return alien4
//         } else if(alien4.hull < 0 && alienDes === true){
//             return alien5
//         } else if(alien5.hull < 0 && alienDes === true){
//             return alien6
//         } else {
//             return victory()
//         }
// };



//alien attack 
function alienAttack() {
   
    if(Math.random() < alienDown.accuracy){
        myShip.hull = myShip.hull - alienDown.firepower //target hit
        if(myShip.hull <= 0){
           alert('Ship has been destroyed.');
            retreat();
        } else {
            alert('Alien attacked the ship');
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



// //defeated all the aliens
// function victory(){
//     alert('Congrats you defeated all the aliens!');
// };



//stop the game / retreat 
function retreat() {
    alert("Mission failed we'll get them next time.")
};
