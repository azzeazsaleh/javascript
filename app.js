const coll = document.getElementsByClassName("collapsible");
const menuBtn = document.getElementById("menuBtn");
let nav = false;

//This function is what opens and closes each section
function adjust(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

//This section opens a section when it is selected
for (let collapsible of coll) {
  collapsible.addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    adjust(content);
  });
}

// this is goto top button in each section, goes to top of page and closes section
const gotoTop = document.getElementsByClassName("goto-top");
for (let toTop of gotoTop){
  toTop.addEventListener("click", function () {
    const parID = this.parentElement.children[0];
    const parElement = document.getElementById(`${parID.innerText}`);
    parElement.classList.toggle("active");
    let content = parElement.nextElementSibling;
    adjust(content);
  });
}

//this code opens and closes selecting menu section title
const aNavs = document.querySelectorAll("#mySidebar>a[href^='#']");
for (let aNav of aNavs) {
  aNav.addEventListener("click", function () {
    const btn = document.getElementById(`${this.innerText}`);
    btn.classList.toggle("active");
    let content = btn.nextElementSibling;
    adjust(content);
  })
}

//the next 3 functions open and close sidebar menu

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

//This code is used to include menu button in each section
const menuBtns = document.getElementsByClassName("openbtn1");
for(let menuBtn1 of menuBtns) {
  menuBtn1.addEventListener("click", n => toggleNav());
}