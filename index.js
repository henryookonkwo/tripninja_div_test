let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

function handleClick() {
    alert("The div was clicked is " + this.id);
    // console.log(this.id);
  }
div1.addEventListener("click", handleClick)
div2.addEventListener("click", handleClick)
div3.addEventListener("click", handleClick)
