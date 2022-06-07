var ttscore=0
var learned=['1 / 40']

document.querySelector('.next').onclick=()=>{
    // alert('You have a score!')
    if (!learned.includes(document.querySelector('.slides').textContent)){
        ttscore+=1
        console.log('You have a score!')
        learned.push(document.querySelector('.slides').textContent)
    }
}
setInterval(()=>{
    if (document.querySelectorAll('.progress')[1].style.width=='191px'){
        if (!learned.includes(document.querySelector('.slides').textContent)){
            ttscore+=1
            learned.push(document.querySelector('.slides').textContent)
            console.log('You have a real score!!!')
        }
    }
},1)
console.log('Initialnized!')