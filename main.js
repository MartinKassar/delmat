
var btn = document.getElementById('btn')
var add = document.getElementById('add')
var addBtn = document.getElementById('addBtn')
var cards = document.getElementById('cards')
var showcase = document.getElementById('showcase')
var searchNav = document.getElementById('searchnav')
var pubBtn = document.getElementById('publish')
var form = document.getElementsByClassName('form')
var addProd = document.getElementById('#addProd')
var logo = document.getElementById('#logo')
var listitems = document.getElementById('.listitems')
var textAdd
var prod
var clickCheck = true
console.log(textAdd)
var check = sessionStorage.getItem('back')

console.log(listitems,'dsadasda')
if(check == 'true') {
    clickBtn()
}

var arrowBtn  = document.getElementById('arrowbtn')

if(pubBtn) {
pubBtn.disabled = true
pubBtn.addEventListener('click', feedback)
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
    sessionStorage.setItem('back', 'true');
    window.location.href = "index.html";
}

function home() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

function clickBtn(e) {
    if(e) {
    e.preventDefault(e)
    }  
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
    add.style.display = 'block'
    showcase.style.height= '40vh'
    searchNav.style.display = "none"
    cards.style.display = 'none'
    addText = document.querySelector('#addtext')
    addText.addEventListener('input', handleText)
    console.log('fyfan', addText)
}

function addProduct() {
    console.log('ghd')
    var listitems = document.querySelector('#listitems')
    var newElem = document.createElement('li')
    newElem.innerHTML = `<span onclick="removeProduct()" class="material-icons">remove_circle_outline</span> ${addText.value}`
    var node = document.createTextNode('hejsan &')
    // newElem.appendChild(node)
    // console.log(newElem, node)
    listitems.appendChild(newElem)
    console.log(addText.value)
    addText.value = ''
}

function handleText() {
    console.log(addText.value)
}

function removeProduct() {
    console.log('fsfsfsfsf')
    // this.removeChild()
}

function feedbackTwo(e) {
    hideBtn = document.querySelector("#hideBtn")
    hideBtnTwo = document.querySelector("#hideBtn2")
    bokatOne = document.querySelector("#bokatOne")
    bokatTwo = document.querySelector("#bokatTwo")
    console.log(bokatTwo)
    if(clickCheck == true) {
        hideBtn.style.display = 'none'
        hideBtnTwo.style.display = 'inline-block'
        bokatTwo.style.display = 'none'
        bokatOne.style.display = 'inline-block'
        clickCheck = !clickCheck
        console.log(clickCheck)
    } else { 
        hideBtn.style.display = 'inline-block'
        hideBtnTwo.style.display = 'none'
        bokatOne.style.display = 'none'
        bokatTwo.style.display = 'inline-block'
        clickCheck = !clickCheck
        console.log(clickCheck)
    }

}

if(document.querySelector("#listitems")) {
document.querySelector("#listitems").addEventListener("click",function(e) {
    var tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
      tgt.parentElement.removeChild(tgt); // or tgt.remove();
    }
  });
}
function feedback() {
    delat = document.querySelector('#delat')
    delat.style.display = "flex"
    console.log('fsaafaf')
}

function changeMat() {
    hide1 = document.querySelector('#cards')
    hide2 = document.querySelector('#resultTwo')
    mat = document.querySelector('#mat')
    alla = document.querySelector('#alla')
    console.log('hdsa', alla)
    hide1.style.display = 'none'
    hide2.style.display = 'flex'
    alla.style.textDecoration = 'none'
    mat.style.textDecoration = 'underline'
    mat.style.textDecorationColor = 'var(--main-primarydark-color)' 
    /*
text-decoration: underline;
  text-decoration-color: var(--main-primarydark-color);
    */
}

function filter() {
    hide1 = document.querySelector('#cards')
    hide2 = document.querySelector('#resultTwo')
    hide3 = document.querySelector('#resultThree')
    hide4 = document.querySelector('#resultFour')
    hide5 = document.querySelector('#resultFive')
    selection = document.querySelector('#selection')
    console.log('hejsannn', selection.value)
    if(selection.value == 'vegan') {
        hide1.style.display = 'none'
        hide2.style.display = 'none'
        hide4.style.display = 'none'
        hide5.style.display = 'none'
        hide3.style.display = 'flex'
    }

    if(selection.value == 'vegetarisk') {
        hide1.style.display = 'none'
        hide2.style.display = 'none'
        hide3.style.display = 'none'
        hide5.style.display = 'none'
        hide4.style.display = 'flex'
    }
    if(selection.value == 'icke') {
        hide1.style.display = 'none'
        hide2.style.display = 'none'
        hide3.style.display = 'none'
        hide5.style.display = 'flex'
        hide4.style.display = 'none'
    }
    if(selection.value == 'allt') {
        hide1.style.display = 'none'
        hide2.style.display = 'flex'
        hide3.style.display = 'none'
        hide5.style.display = 'none'
        hide4.style.display = 'none'
    }
}