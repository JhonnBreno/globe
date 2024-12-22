const bar = document.getElementById('bar')
const nav = document.getElementById('nav')

bar.addEventListener('click', () =>{
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden')
        nav.classList.add('visible')
    }else{
        nav.classList.contains('visible')
        nav.classList.remove('visible')
        nav.classList.add('hidden')
    }
})