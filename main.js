console.log('dapsmdalkmlka<mflmfl')
var btn = document.getElementById('btn')
var add = document.getElementById('add')
var addBtn = document.getElementById('addBtn')
var cards = document.getElementById('cards')
var showcase = document.getElementById('showcase')
var searchNav = document.getElementById('searchnav')
var pubBtn = document.getElementById('publish')
var form = document.getElementsByClassName('form')

var check = sessionStorage.getItem('back')

if(check == 'true') {
    clickBtn()
}

var arrowBtn  = document.getElementById('arrowbtn')
console.log('dasdas', arrowBtn)
if(pubBtn) {
pubBtn.disabled = true
pubBtn.addEventListener('click', clickBtn)
}
if(arrowBtn) {
arrowBtn.addEventListener('click', blick)
}
if(btn) {
    btn.addEventListener('submit', clickBtn)
}
if(addBtn)  {
    addBtn.addEventListener('click', showMenu)
}

if(form.length > 0) {
form[4].addEventListener('input', valid)
}

if(logo) {
  logo.addEventListener('click', home)
}

function blick() {
    console.log('dasofmaofoam')
    sessionStorage.setItem('back', 'true');
    window.location.href = "index.html";
}

function home() {
  window.location.href = "index.html";
}

function clickBtn(e) {
    if(e) {
    e.preventDefault(e)
    }
    console.log(cards)   
    cards.style.display = 'flex'
    showcase.style.height= '45vh'
    add.style.display = 'none'
    searchNav.style.display = "flex"
}

function valid() {
    if(form[4].value.length > 0) {
        pubBtn.disabled = false
        }
}

function showMenu() {
    console.log('dasdad')
    add.style.display = 'block'
    showcase.style.height= '40vh'
    searchNav.style.display = "none"
    cards.style.display = 'none'
}
