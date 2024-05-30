var uname = document.getElementById("input__name")
var uemail = document.getElementById("input__email")
var form = document.querySelector("form")

form.addEventListener("submit", function(){
    localStorage.setItem("exportedname", uname.value)
    localStorage.setItem("exportedemail", uemail.value)
    window.location.href = "result.html"
})
