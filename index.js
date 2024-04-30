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
        let sum2 =0
        let flag2=false
        // checking all the elements are number
        array2.forEach((a)=>{
          //storing type of each element
          let type = parseInt(a)
         //checking if there is NaN value
            if(isNaN(type)){
                flag2 =true
            }
        })
         // throwing error if there is NaN value in array, otherwise adding them and displaying result
          if(flag2){
            error();
          } else{
               // mul by 2 because it subtracted in forEach

               sum2=parseInt(array2[0])*2
               array2.forEach((a)=>{
                console.log(sum2, parseInt(a))
                sum2=sum2-parseInt(a)
              })
                display[0].textContent=sum2
          }
          
          break;

      case '/':

        let array3 = str2.split('/')
        let sum3 =0
        let flag3=false
         if(array3.length>2){
          error()
         }else{
           // checking all the elements are number
            array3.forEach((a) => {
             //storing type of each element
             let type = parseInt(a)
             //checking if there is NaN value
              if (isNaN(type)) {
                  flag3 = true
              }
           })

           // throwing error if there is NaN value in array, otherwise adding them and displaying result
           
           if (flag3) {
               error()
           } else {
             
              sum3 = array3[0]/array3[1]
              display[0].textContent = sum3
           }
         }
        
          break;
      case '*':

        let array4 = str2.split('*')
        let sum4 =1
        let flag4=false
        console.log(array4)
        // checking all the elements are number
        array4.forEach((a)=>{
          //storing type of each element
          let type = parseInt(a)
         //checking if there is NaN value
            if(isNaN(type)){
                flag4 =true
            }
        })
         // throwing error if there is NaN value in array, otherwise adding them and displaying result
          if(flag4){
            error();
          } else{
               // mul by own value because it is divided itself in forEach 

               
               
               array4.forEach((a)=>{
               
                console.log(sum4, parseInt(a))
                sum4=sum4*parseInt(a)
              })
                display[0].textContent=sum4
          }
          
          break;
      case '%':
        
        let array5 = str2.split('%')
        let sum5 
        let flag5=false
        console.log(array5)
        
        if(array5.length>2){
          error()
        }
        else{
          // checking all the elements are number
          array5.forEach((a) => {
            //storing type of each element
            let type = parseInt(a)
            //checking if there is NaN value
            if (isNaN(type)) {
              flag5 = true
            }
          })
          // throwing error if there is NaN value in array, otherwise adding them and displaying result
          if (flag5) {
            error()
          } else {
            // mul by own value because it is divided itself in forEach

            sum5 = array5[0] % array5[1]
            display[0].textContent = sum5
          }
        }
          
          break;
    }
}


// throwing error function
function error(){
     display[0].textContent = 'Error'
     display[0].classList.add('error')
}