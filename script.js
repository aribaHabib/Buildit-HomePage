setTimeout(() => {
  let starter = document.querySelector(".loader");
  starter.classList.add("hide");
}, 1800);

let header = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 0);
});

var content = document.getElementById("scrollContent");

function scrollPrev() {
  content.appendChild(content.firstElementChild);
}

function scrollNext() {
  content.insertBefore(content.lastElementChild, content.firstElementChild);
}
