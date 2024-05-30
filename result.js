var rname = document.getElementById("result__name")
var remail = document.getElementById("result__email")
var rscore = document.getElementById("result__score")
var data__name = localStorage.getItem("exportedname")
var data__email = localStorage.getItem("exportedemail")
var vresult = document.getElementById("viewresult")
var rtable = document.getElementById("rt")
var rh = document.getElementById("rh")
var uScore = localStorage.getItem("userScore")
var timeup = localStorage.getItem("timeUp")
var timeupmsg = document.getElementById("timeupmsg")
var restartbtn = document.getElementById("restart__btn")
var vresultbtn = document.getElementById("viewresult__btn")
var remarks;

if (timeup == 0) {
    timeupmsg.textContent = "Thank you for Submitting..."
} else if (timeup == 1) {
    timeupmsg.textContent = "Time's Up!... Check your score below"
}

vresultbtn.addEventListener("click", function () {
    vresult.style.display = "none"
    rtable.style.display = "block"
    rh.style.display = "block"
})

if (uScore < 2) {
    remarks = "Very Poor"
} else if (uScore < 4) {
    remarks = "Poor"
} else if (uScore < 6) {
    remarks = "Not Bad"
} else if (uScore < 8) {
    remarks = "Good"
} else if (uScore < 10) {
    remarks = "Very Good"
} else if (uScore == 10) {
    remarks = "Excellent"
}

rname.innerHTML = `<h1>${data__name}</h1>`
remail.innerHTML = `<h1>${data__email}</h1>`
rscore.innerHTML = `<h1>${uScore} / 10 (${remarks})</h1>`

restartbtn.addEventListener("click", function () {
    localStorage.removeItem("exportedname")
    localStorage.removeItem("exportedemail")
    localStorage.removeItem("userScore")
})

