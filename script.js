const acc = document.querySelector('.accordion');
const panel = document.querySelector('.panel');

// console.log(acc.classList.toggle("active"));
acc.addEventListener('click' , function(){
    acc.classList.toggle("active");
    if(panel.style.maxHeight){
        panel.style.maxHeight = null
        console.log('null');
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
})