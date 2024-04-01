       /*
       
       let right1 = 
            document.getElementById('right1')
        let right2 = 
            document.getElementById('right2')
        let right3 = 
            document.getElementById('right3')
        let right4 = 
            document.getElementById('right4')
        let right5 = 
            document.getElementById('right5')
        let right6 = 
            document.getElementById('right6')
        let right7 = 
            document.getElementById('right7')
        let right8 = 
            document.getElementById('right8')
        let right9 = 
            document.getElementById('right9')
        let right10 = 
            document.getElementById('right10')
            
        let left1 = 
            document.getElementById('left1')
        let left2 = 
            document.getElementById('left2')
        let left3 = 
            document.getElementById('left3')
        let left4 = 
            document.getElementById('left4')
        let left5 = 
            document.getElementById('left5')
        let left6 = 
            document.getElementById('left6')
        let left7 = 
            document.getElementById('left7')
        let left8 = 
            document.getElementById('left8')
        let left9 = 
            document.getElementById('left9')
        let left10 = 
            document.getElementById('left10')

            */
            

const colors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d', '#555555', '#dddddd'];
var i1 = 0;  var i2 = 0; var i3 = 0; var i4 = 0; var i5 = 0; var i6 = 0;  var i7 = 0; var i8 = 0; var i9 = 0; var i10 = 0;

// random color: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        
        let btn1 = 
            document.getElementById('btn1')
        btn1.addEventListener('click', () => {
            right1.style.fill = colors[i1]
            left1.style.fill = colors[i1]
            i1 = (i1 + 1) % colors.length
        })
 
        let btn2 = 
            document.getElementById('btn2')
        btn2.addEventListener('click', () => {
            right2.style.fill = colors[i2]
            left2.style.fill = colors[i2]
            i2 = (i2 + 1) % colors.length
        })
 
        let btn3 = 
            document.getElementById('btn3')
        btn3.addEventListener('click', () => {
            right3.style.fill = colors[i3]
            left3.style.fill = colors[i3]
            i3 = (i3 + 1) % colors.length
        })

        let btn4 = 
            document.getElementById('btn4')
        btn4.addEventListener('click', () => {
            right4.style.fill = colors[i4]
            left4.style.fill = colors[i4]
            i4 = (i4 + 1) % colors.length
        })
        
        let btn5 = 
            document.getElementById('btn5')
        btn5.addEventListener('click', () => {
            right5.style.fill = colors[i5]
            left5.style.fill = colors[i5]
            i5 = (i5 + 1) % colors.length
        }) 
 
        let btnR = 
            document.getElementById('btnR')
        btnR.addEventListener('click', () => {
            right1.style.fill = '#dddddd'
            right2.style.fill = '#dddddd'
            right3.style.fill = '#dddddd'
            right4.style.fill = '#dddddd'
            right5.style.fill = '#dddddd'
            right6.style.fill = '#dddddd'
            right7.style.fill = '#dddddd'
            right8.style.fill = '#dddddd'
            right9.style.fill = '#dddddd'
            right10.style.fill = '#dddddd'
            
            left1.style.fill = '#dddddd'
            left2.style.fill = '#dddddd'
            left3.style.fill = '#dddddd'
            left4.style.fill = '#dddddd'
            left5.style.fill = '#dddddd'
            left6.style.fill = '#dddddd'
            left7.style.fill = '#dddddd'
            left8.style.fill = '#dddddd'
            left9.style.fill = '#dddddd'
            left10.style.fill = '#dddddd'

            i1 = 0
            i2 = 0
            i3 = 0
            i4 = 0 
            i5 = 0
            i6 = 0
            i7 = 0 
            i8 = 0
            i9 = 0
            i10 = 0
        }) 

        let btn6 = 
            document.getElementById('btn6')
        btn6.addEventListener('click', () => {
            right6.style.fill = colors[i6]
            left6.style.fill = colors[i6]
            i6 = (i6 + 1) % colors.length
        })
 
        let btn7 = 
            document.getElementById('btn7')
        btn7.addEventListener('click', () => {
            right7.style.fill = colors[i7]
            left7.style.fill = colors[i7]
            i7 = (i7 + 1) % colors.length
        })
 
        let btn8 = 
            document.getElementById('btn8')
        btn8.addEventListener('click', () => {
            right8.style.fill = colors[i8]
            left8.style.fill = colors[i8]
            i8 = (i8 + 1) % colors.length
        })

        let btn9 = 
            document.getElementById('btn9')
        btn9.addEventListener('click', () => {
            right9.style.fill = colors[i9]
            left9.style.fill = colors[i9]
            i9 = (i9 + 1) % colors.length
        })

         let btn10 = 
            document.getElementById('btn10')
        btn10.addEventListener('click', () => {
            right10.style.fill = colors[i10]
            left10.style.fill = colors[i10]
            i10 = (i10 + 1) % colors.length
        })
