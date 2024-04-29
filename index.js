const buttons = [...document.getElementsByTagName('td')]

console.log(buttons)
const display = document.getElementsByTagName('th')
let value ='+'
console.log(display[0].textContent)
 let x = ''
let result
let repeat = ''
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       
        if(display[0].classList.contains('error')){
            display[0].classList.remove('error')
            display[0].textContent=''
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
           repeat+='/';
           display[0].textContent += btn.textContent
           value = '/'
           break
         case '+':
           repeat += '+'
           display[0].textContent += btn.textContent
           value = '+'
           break
         case '-':
           repeat += '-'
           display[0].textContent += btn.textContent
           value = '-'
           break
         case '*':
           repeat += '*'
           display[0].textContent += btn.textContent
           value = '*'
           break
         case '%':
           repeat += '%'
           display[0].textContent += btn.textContent
           value = '%'
           break
         case '=':
            if(repeat.length>1){
                 error();
                

            } else{
           calulation(display[0].textContent)
           console.log(display[0].textContent)
            }
           break
         default:
           if (parseInt(display[0].textContent[0]) === 0) {
             display[0].textContent = ''
           }
           display[0].textContent += btn.textContent
           repeat='';
           break;
       }
       console.log(repeat)
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
        console.log(array1)
        let flag1=false
        // checking all the elements are number
        array1.forEach((a)=>{
          //storing type of each element
          let type = parseInt(a)
         //checking if there is NaN value
            if(isNaN(type)){
                flag1 =true
            }
        })
         // throwing error if there is NaN value in array, otherwise adding them and displaying result
          if(flag1){
            error();
          } else{
              display[0].textContent =array1.reduce((a,b)=>{
                return a+parseInt(b)
              },0)
          }
          break;
           /* old method
              // if (array1[0] && array1[1]) {
              //   calulate(array1[0], array1[1], '+')
              //   console.log(result)
              //   display[0].textContent = result
              // }
                break;
            */
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
        console.log(array4)
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

// function calulate(x1,x2,s){
//      let n1 = parseInt(x1)
//      let n2 = parseInt(x2)
 
//     switch (s) {
//       case '/':
//         result = n1 / n2
//         break
//       case '*':
//         result = n1 * n2
//         break
//       case '%':
//         result = n1 % n2
//         break
//       case '+':
//         result = n1 + n2
//         break
//       case '-':
//         result = n1 - n2
//         break
//       default:
//         result='Error'
    
//     }
// }

function error(){
     display[0].textContent = 'Error'
     display[0].classList.add('error')
}