

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    if(this.window.scrollY > 0){
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})


window.addEventListener("scroll", function(){
    const sidebar = document.querySelector(".sidebar");

    if(this.window.scrollY > 0){
        header.classList.add('scrolls')
    } else {
        header.classList.remove('scrolls')
    }
})