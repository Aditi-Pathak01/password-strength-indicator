let input = document.querySelector("#input");
let inputBox = document.querySelector("#input-box")
let icon = document.querySelector("img");
let msg = document.querySelector("#msg")
let str = document.querySelector("#str")


icon.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    icon.src = "assets/eye-open.png";
  } else if (input.type === "text") {
    input.type = "password";
    icon.src = "assets/eye-close.png";
  }
})

input.addEventListener("input",()=>{
  if (input.value.length > 0){
    msg.style.display = "block"
  } else {
    msg.style.display = "none"
  }
  if (input.value.length < 4){
    str.innerText = "Weak :("
    msg.style.color = "Red"
    inputBox.style.borderColor = "Red";
  } else if (input.value.length < 7){
    str.innerText = "Medium :)"
    msg.style.color = "yellow"
    inputBox.style.borderColor = "Yellow";
  } else if (input.value.length > 7 ){
    str.innerText = "Strong! :D"
    msg.style.color = "green"
    inputBox.style.borderColor = "Green";
  }
})
