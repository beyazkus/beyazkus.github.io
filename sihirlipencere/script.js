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

function colorPath(pathId) {
    const path = document.getElementById(pathId);
    path.style.fill = selectedColor;
    }

let selectedColor = '#dddddd'
  
function selectColor(color) {
    selectedColor = color;
    }