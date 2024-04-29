const buttons = [...document.getElementsByTagName('td')]

console.log(buttons)
const display = document.getElementsByTagName('th')

console.log(display[0].textContent)
 let x = ''
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       switch (btn.textContent) {
         case 'AC':
           display[0].textContent = '0'
           break
         case 'C':
           display[0].textContent = '0'
           break
         case '0':
           display[0].textContent += btn.textContent ;
           break
        case '=':
            break
         default:
           if (parseInt(display[0].textContent[0]) === 0) {
             display[0].textContent = ''
           }
           display[0].textContent += btn.textContent
           break;
       }
        // Saving all clicked number
        if (btn.textContent === 'AC' || btn.textContent === 'C'){
           x=''
        }  else{
            x+=btn.textContent
        }

        //   x += btn.textContent
         console.log(x)

        //  replacing number when it reach max length 20
       if(display[0].textContent.length>20){
        let x = display[0].textContent.length-20
         let l = display[0].textContent.length
         display[0].textContent=display[0].textContent.slice(x,l)
       }
     
    })
})

