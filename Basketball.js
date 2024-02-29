let countHome = 0
let countGuest = 0

function homePlus1() {
    countHome +=1
    document.getElementById("home-score").innerText = countHome
}

function homePlus2() {
    countHome +=2
    document.getElementById("home-score").innerText = countHome
}

function homePlus3() {
    countHome +=3
    document.getElementById("home-score").innerText = countHome
}

function guestPlus1() {
    countGuest +=1
    document.getElementById("guest-score").innerText = countGuest
}

function guestPlus2() {
    countGuest +=2
    document.getElementById("guest-score").innerText = countGuest
}

function guestPlus3() {
    countGuest +=3
    document.getElementById("guest-score").innerText = countGuest
}