let a = document.querySelectorAll(".hexa");
let btn = document.querySelector(".btn");
let palette = document.querySelectorAll(".color");

let alu = () => {
  for (let i = 0; i < 5; i++) {
    let deci_1 = Math.floor(Math.random() * 100000) % 230;
    let deci_2 = Math.floor(Math.random() * 100000) % 230;
    let deci_3 = Math.floor(Math.random() * 100000) % 230;

    let color =
      "#" +
      deci_1.toString(16).toUpperCase() +
      deci_2.toString(16).toUpperCase() +
      deci_3.toString(16).toUpperCase();

    a[i].innerHTML = color;
    a[i].style.color = color;
    let b = document.querySelectorAll(".color");
    b[i].style.backgroundColor = color;
  }
};

let potol = (e) => {
  let yo = e.target;
  let x = yo.style.backgroundColor;
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = x;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert(x + " copied to clipboard");
};

alu();
btn.addEventListener("click", alu);

for (i = 0; i < palette.length; i++) {
  palette[i].addEventListener("click", potol);
}
