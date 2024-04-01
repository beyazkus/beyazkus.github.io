/* let btnR = document.getElementById('btnR') */

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
    
    /*
    path1b.style.fill = '#dddddd'
    path2b.style.fill = '#dddddd'
    path3b.style.fill = '#dddddd'
    path4b.style.fill = '#dddddd'
    path5b.style.fill = '#dddddd'
    path6b.style.fill = '#dddddd'
    path7b.style.fill = '#dddddd'
    path8b.style.fill = '#dddddd'
    path9b.style.fill = '#dddddd'
    path10b.style.fill = '#dddddd'
    */
})


function colorPath(pathId) {
    const path = document.getElementById(pathId);
    path.style.fill = selectedColor;
    
    /*
    const pathb = document.getElementById(pathId + "b");
    pathb.style.fill = selectedColor;
    */
}



let selectedColor = '#dddddd'
  
function selectColor(color) {
    selectedColor = color;
    }