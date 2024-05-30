var next = document.getElementsByName("next")
var prev = document.getElementsByName("prev")
var submit = document.getElementById("submit")
var q1 = document.getElementsByName("question1")
var q2 = document.getElementsByName("question2")
var q3 = document.getElementsByName("question3")
var q4 = document.getElementsByName("question4")
var q5 = document.getElementsByName("question5")
var q6 = document.getElementsByName("question6")
var q7 = document.getElementsByName("question7")
var q8 = document.getElementsByName("question8")
var q9 = document.getElementsByName("question9")
var q10 = document.getElementsByName("question10")

var userscore = 0

let milliseconds = 2.5 * 60 * 1000;

document.getElementById('timer').textContent = formatTime(milliseconds);

const timerInterval = setInterval(function() {
    milliseconds = milliseconds - 1000
    document.getElementById('timer').textContent = formatTime(milliseconds)

    if (milliseconds <= 0) {
        clearInterval(timerInterval)
        console.log("Time's up!")
        submit.click()
    }
}, 1000);

function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / (1000 * 60))
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)
    return `Time Remaining: ${minutes}m ${seconds}s`
}

console.log(60000*5 % (1000 * 60)/1000)


submit.addEventListener("click", function (event) {
    event.preventDefault()
    for (let i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            if (q1[i].value == "a") {
                userscore = userscore + 1
            }
        }

        if (q2[i].checked) {
            if (q2[i].value == "a") {
                userscore = userscore + 1
            }
        }

        if (q3[i].checked) {
            if (q3[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q4[i].checked) {
            if (q4[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q5[i].checked) {
            if (q5[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q6[i].checked) {
            if (q6[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q7[i].checked) {
            if (q7[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q8[i].checked) {
            if (q8[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q9[i].checked) {
            if (q9[i].value == "a") {
                userscore = userscore + 1
            }
        }
        if (q10[i].checked) {
            if (q10[i].value == "a") {
                userscore = userscore + 1
            }
        }

    }

    localStorage.setItem("userScore", userscore)
    window.location.href = "result.html"
})

for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", function (event) {
        event.preventDefault()
        event.target.parentElement.style.display = "none"
        prev[i].parentElement.style.display = "block"
    })

    prev[i].addEventListener("click", function (event) {
        event.preventDefault()
        event.target.parentElement.style.display = "none"
        next[i].parentElement.style.display = "block"
    })
}