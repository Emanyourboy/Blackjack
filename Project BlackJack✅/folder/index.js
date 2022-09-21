
/* 
document.querySelector("button").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "red";
    console.log("working");
})
*/

let randomCard1 = Math.floor(Math.random() * 11) + 1
let randomCard2 = Math.floor(Math.random() * 11) + 1


//not game
//console.log(randomCard1, randomCard2)


 /*
function firstHand(){
    return (randomCard1.toString()) + " " +  (randomCard2.toString())
}
*/

document.getElementById("card1").innerText = randomCard1
document.getElementById("card2").innerText = randomCard2



let randomCard3 = Math.floor(Math.random() * 11) + 1

function hit1(){
    
    document.getElementById("card3").innerText = randomCard3
    //not game
    //console.log(newCard)
    //console.log(randomCard3)
}

let randomCard4 = Math.floor(Math.random() * 11) + 1

function hit2(){

    document.getElementById("card4").innerText = randomCard4
    //not game
    //console.log(newCard2)
    //console.log(randomCard4)
}


document.getElementById("hit").addEventListener("click", hit1)
document.getElementById("hit2").addEventListener("click", hit2)





//ready for beta testing and should move on go organizing and more html and css










let hand = Math.floor(Math.random() * 11) + 1
let hand2 = Math.floor(Math.random() * 11) + 1


//not game
console.log(hand, hand2)

function beginDealer(){

    document.getElementById("dealer1").innerText = hand
    document.getElementById("dealer2").innerText = hand2

}




function setOutput(outputContent) {
    document.getElementById("dealer3").innerText = outputContent
    document.getElementById("dealer4").innerText = outputContent
  }

function delay(){
    
    setTimeout(dealer, 4000, setOutput)
    setTimeout(bo, 6000, setOutput)
    
   
}

document.getElementById("stay").onclick = function(){
    document.getElementById("hit").disabled = true;
}


let randomCard5 = Math.floor(Math.random() * 11) + 1;
let randomCard6 = Math.floor(Math.random() * 11) + 1;
let comb = hand + hand2
let all = comb + randomCard5 

function dealer(){
    
    if(comb <= 16){
        
        return document.getElementById("dealer3").innerText = randomCard5
    }

}

function bo(){
    if(all <= 16){
        return document.getElementById("dealer4").innerText = randomCard6
    }
}


console.log(randomCard5)
console.log(randomCard6)

document.getElementById("stay").addEventListener("click", delay)
document.getElementById("stay").addEventListener("click", beginDealer)
//document.getElementById("stay").addEventListener("click", dealer)
//keeping this just in case it doesnt work



/* i think this solves opacity problem 
document.getElementById("exbut").addEventListener("click", function(){
    document.getElementById("example").style.opacity = 0
    console.log("clicked")
});
*/
