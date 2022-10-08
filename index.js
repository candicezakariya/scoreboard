let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeButtonOne = document.getElementById("home-button-one")
let homeButtonTwo = document.getElementById("home-button-two")
let homeButtonThree = document.getElementById("home-button-three")

let guestButtonOne = document.getElementById("guest-button-one")
let guestButtonTwo = document.getElementById("guest-button-two")
let guestButtonThree = document.getElementById("guest-button-three")

let homeScore = 0
let guestScore = 0

function addOneHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneGuest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
