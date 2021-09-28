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
var imagenes= ["img/SIUX CUERO_/principal1.jpg","img/SIUX CUERO_/principal1.jpg","img/SIUX CUERO_/principal1.jpg","img/NEST CUERO/principal1.jpg","img/MALI CUERO/principal1.jpg"]
let cont=0;
function carrousel(contenedor){
    contenedor.addEventListener("click", e => {
        let atras=contenedor.querySelector(".atras");
        let adelante= contenedor.querySelector(".adelante");
        let imagen=contenedor.querySelector("img");
        let tgt=e.target;
        if(tgt==atras){
            if(cont >0){
                imagen.src= imagenes[cont -1];
                cont--;
            }else { imagen.src= imagenes[imagenes.length - 1];
                     cont= imagenes.length - 1;
            }
        } else if(tgt==adelante) {
            if(cont < imagenes.length-1){
                imagen.src= imagenes[cont +1];
                cont++;
            }else { imagen.src= imagenes[0];
                     cont= 0;
            }
        }
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor=document.querySelector(".carrousel");
    carrousel(contenedor);
})