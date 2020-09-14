let a = document.querySelectorAll(".hexa");
let btn = document.querySelector(".btn");

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
    let b = document.querySelectorAll(".color");
    // console.log(color);
    b[i].style.backgroundColor = color;
    btn.style.border = "none";
  }
};
alu();
btn.addEventListener("click", alu);
