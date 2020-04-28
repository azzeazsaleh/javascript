const coll = document.getElementsByClassName("collapsible");
const menuBtn = document.getElementById("menuBtn");

let nav = false;

function adjust(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    adjust(content);
  });
}

const gototop = document.getElementsByClassName("goto-top");

for (var j = 0; j < gototop.length; j++) {
  gototop[j].addEventListener("click", function () {
    const parID = this.parentElement.children[0];
    const parElement = document.getElementById(`${parID.innerText}`);
    parElement.classList.toggle("active");
    let content = parElement.nextElementSibling;
    adjust(content);
  });
}

const aNavs = document.querySelectorAll("#mySidebar>a[href^='#']");
for (let aNav of aNavs) {
  aNav.addEventListener("click", function () {
    const btn = document.getElementById(`${this.innerText}`);
    btn.classList.toggle("active");
    let content = btn.nextElementSibling;
    adjust(content);
  })
}


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  nav = true;
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  nav = false;
}

function toggleNav() {
  nav ? closeNav() : openNav();
}

menuBtn.addEventListener("click", n => toggleNav());

const menuBtns = document.getElementsByClassName("openbtn1");
for(let menuBtn1 of menuBtns) {
  menuBtn1.addEventListener("click", n => toggleNav());
}