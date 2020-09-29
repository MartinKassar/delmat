console.log('dapsmdalkmlka<mflmfl')
var btn = document.getElementById('btn')
var add = document.getElementById('add')
var addBtn = document.getElementById('addBtn')
var cards = document.getElementById('cards')
var showcase = document.getElementById('showcase')
var searchNav = document.getElementById('searchnav')

btn.addEventListener('submit', clickBtn)
addBtn.addEventListener('click', showMenu)


function clickBtn(e) {
    e.preventDefault(e)
    console.log(cards)   
    cards.style.display = 'flex'
    showcase.style.height= '45vh'
    add.style.display = 'none'
    searchNav.style.display = "flex"
}

function click() {
    
}

function showMenu() {
    console.log('dasdad')
    add.style.display = 'block'
    showcase.style.height= '40vh'
    searchNav.style.display = "none"
    cards.style.display = 'none'
}