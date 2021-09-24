  const btnMenu= document.querySelector(".menu");
const menu= document.querySelector(".menu-bar");
btnMenu.addEventListener("click",function(){
    window.onscroll= function(){window.scrollTo(window.scrollX,window.scrollY)};
    menu.classList.toggle("isactive");
    
})  
/*  function menuBar (){
    document.querySelector(".menu-bar").classList.toggle("menu-bar2");
}
document.querySelector(".menu").onclick = function(){
    menuBar();
};  */
/* let scrolll= [];
window.addEventListener("scroll",function(){
    
for (let i=0; i<window.scrollY;i++){
    scrolll.push(window.scrollY);
}
console.log(scrolll);
})
function scrollear(){
    window.scrollTo({
      top: scrolll[scrolll.length-10],
    })
    
} */
/* function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}
function enableScroll(){  
    window.onscroll = null;
}
 */