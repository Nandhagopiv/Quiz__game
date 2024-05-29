var rname = document.getElementById("result__name")
var remail = document.getElementById("result__email")
var rscore = document.getElementById("result__score")
var data__name = localStorage.getItem("exportedname")
var data__email = localStorage.getItem("exportedemail")
var uScore = localStorage.getItem("userScore")
var remarks;

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
} else if (uScore === 10) {
    remarks = "Excellent"
}

rname.innerHTML = `<h1>${data__name}</h1>`
remail.innerHTML = `<h1>${data__email}</h1>`
rscore.innerHTML = `<h1>${uScore} / 10 (${remarks})</h1>`

uScore = null
data__email= null
data__name= null

localStorage.removeItem("exportedname")
localStorage.removeItem("exportedemail")
localStorage.removeItem("userScore")
