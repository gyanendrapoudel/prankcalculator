const buttons = [...document.getElementsByTagName('td')]

console.log(buttons)
const display = document.getElementsByTagName('th')

console.log(display[0].textContent)

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       switch(btn.textContent){
        case 'AC' :
            display[0].textContent='0';
            break;
        case 'C':
            display[0].textContent = '0';
            break
        default:
           if(parseInt(display[0].textContent[0]) ===0){
            display[0].textContent=''
           };
            display[0].textContent += btn.textContent;
            break
       }
    })
})

