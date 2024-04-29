const buttons = [...document.getElementsByTagName('td')]

console.log(buttons)
const display = document.getElementsByTagName('th')
let value ='+'
console.log(display[0].textContent)
 let x = ''
    let result
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       
        if(display[0].classList.contains('error')){
            display[0].classList.remove('error')
        }
       switch (btn.textContent) {
         case 'AC':
           display[0].textContent = '0'
           break
         case 'C':
           display[0].textContent = '0'
           break
         case '0':
           display[0].textContent += btn.textContent
           break
         case '/':
           display[0].textContent += btn.textContent
           value = '/'
           break
         case '+':
           display[0].textContent += btn.textContent
           value = '+'
           break
         case '-':
           display[0].textContent += btn.textContent
           value = '-'
           break
         case '*':
           display[0].textContent += btn.textContent
           value = '*'
           break
         case '%':
           display[0].textContent += btn.textContent
           value = '%'
           break
         case '=':
           calulation(display[0].textContent)
           console.log(display[0].textContent)
           break
         default:
           if (parseInt(display[0].textContent[0]) === 0) {
             display[0].textContent = ''
           }
           display[0].textContent += btn.textContent
           break
       }
        // Saving all clicked number
        if (btn.textContent === 'AC' || btn.textContent === 'C'){
           x=''
        }  else{
            x+=btn.textContent
        }

        //   x += btn.textContent
      
        //  replacing number when it reach max length 20 to 25 
       if(x.length>20 && x.length<25){
         sliceString(display[0].textContent);
          
       } else if(x.length>25){
        //   throw error if maxlength exceed 25 
            display[0].textContent='Error'
            display[0].classList.add('error')
            console.log(display[0].classList)
        }
    })
})


function sliceString(str1){
    let x = str1.length - 20
    let l = str1.length
    display[0].textContent = str1.slice(x, l) 
        
}

function calulation(str2){
    console.log(value)
    
    switch (value) {
      case '+':
        let array1 = str2.split('+')
        if (array1[0] && array1[1]) {
          calulate(array1[0], array1[1], '+')
          console.log(result)
          display[0].textContent = result
        }
        break
      case '-':
        let array2 = str2.split('-')
        if (array2[0] && array2[1]) {
          calulate(array2[0], array2[1], '-')
          console.log(result)
          display[0].textContent = result
        }
        break
      case '/':
        let array4 = str2.split('/')
        if (array4[0] && array4[1]) {
          calulate(array4[0], array4[1], '/')

          display[0].textContent = result
        }
        break
      case '*':
        let array5 = str2.split('*')
        if (array5[0] && array5[1]) {
          calulate(array5[0], array5[1], '*')
          display[0].textContent = result
        }
        break
      case '%':
        let array6 = str2.split('%')
        if (array6[0] && array6[1]) {
          calulate(array6[0], array6[1], '%')
          display[0].textContent = result
        }
        break
    }
    let array =str2.split('')
    console.log( array.includes('+'))

}

function calulate(x1,x2,s){
     let n1 = parseInt(x1)
     let n2 = parseInt(x2)
 
    switch (s) {
      case '/':
        result = n1 / n2
        break
      case '*':
        result = n1 * n2
        break
      case '%':
        result = n1 % n2
        break
      case '+':
        result = n1 + n2
        break
      case '-':
        result = n1 - n2
        break
      default:
        result='Error'
    
    }
}