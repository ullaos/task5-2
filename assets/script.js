





// search bar
let searchBox=document.querySelector('.searchBox')
let closeSearch=document.querySelector('.closeSearch')
let searchIcone=document.querySelector('.searchIcone')

searchIcone.addEventListener( 'click', function (){
    searchBox.classList.add('.visibl');

})
closeSearch.addEventListener( 'click', function (){
    searchBox.classList.remove('visibl');

})


// end search bar

// nav bar in mob_screen
const navList = document.querySelector('.nav_list');
const mobToggle = document.querySelector('.mob-toggle');

mobToggle.addEventListener('click', () => {
    const visible =navList.getAttribute('data-visible');
    if(visible === "false"){
        navList.setAttribute("data-visible", true);
        mobToggle.setAttribute("aria-expanded", true)
    }
    else{
        navList.setAttribute("data-visible", false); 
        mobToggle.setAttribute("aria-expanded", false) 
    }
})
//end nav bar in mob_screen
// start sale bar

const btn_Sale =document.querySelector('.btn_Sale');
const saleBar =document.querySelector('.saleBar');

btn_Sale.addEventListener('click', () =>{
    saleBar.classList.toggle('active')


})

// end sale bar

// acorrding
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});
}

