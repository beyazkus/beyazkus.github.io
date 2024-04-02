btnR.addEventListener('click', () => {  
    path1.style.fill = '#dddddd'
    path2.style.fill = '#dddddd'
    path3.style.fill = '#dddddd'
    path4.style.fill = '#dddddd'
    path5.style.fill = '#dddddd'
    path6.style.fill = '#dddddd'
    path7.style.fill = '#dddddd'
    path8.style.fill = '#dddddd'
    path9.style.fill = '#dddddd'
    path10.style.fill = '#dddddd'

    selectedColor = '#dddddd'
})

let selectedColor = '#dddddd'
  
function selectColor(color) {
    selectedColor = color;
    }

function colorPath(pathId) {
    const path = document.getElementById(pathId);
    path.style.fill = selectedColor;
    }

/* setTimeout(delayedCodeForMenu, 5000)
function delayedCodeForMenu() {
    menu.style.opacity = 0;}
    
setTimeout(delayedCodeForColors, 5000)
function delayedCodeForColors() {
    colors.style.opacity = 0;} */

menu.addEventListener("mouseenter", function() {menu.style.opacity = 1;})
colors.addEventListener("mouseenter", function() {colors.style.opacity = 1;})

btnS.addEventListener('click', () => {  
    menu.style.opacity = 0
    colors.style.opacity = 0
})