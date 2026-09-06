let back = document.querySelector(".back")
back.addEventListener("click", function() {
  window.location.href = "index.html";
})

let h2output = document.createElement("h4")
h2output.classList.add("h2-dinamis");
let output = document.querySelector(".tOutput")
let sosmed = document.querySelector(".sosmed")
let friend = document.querySelector(".friend")
let school = document.querySelector(".school")

sosmed.addEventListener("click", function(){
  h2output.innerHTML="sosmed"
})

output.appendChild(h2output)