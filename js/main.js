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
var imagenes2= ["img/2/ABRU.jpg","img/2/candy.jpg","img/2/find2.jpg","img/2/KYLIE.jpg","img/2/lele.jpg"]

let cont=0;
function carrousel(contenedor,imagenes){
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
    let contenedor2=document.querySelector(".este");
    carrousel(contenedor2,imagenes2);
})



function escribirHTML(objeto) {
    let contenedor = document.querySelector(".rome");
    let imgSrc=[];
    for(let imagen of objeto.imgUrl){
        imgSrc.push(imagen);
    }
    const miTemplate =`
    <div class="rome2">
    <div class="carrousel norte">
    <div> 
        <h2> NOMBRE</h2>
    </div>
    <div class="atras botones">
        &#60
    </div>
    <div class="adelante botones">
        &#62
    </div>
    <img src=imgSrc[1]>
    </div>

    </div>
    <h2>${objeto.title}</h2>
    <h2>${objeto.precio}</h2>
    <p>${objeto.description}</p>
    
    `;
    contenedor.innerHTML += miTemplate;
    document.addEventListener("DOMContentLoaded", ()=>{
        let contenedor3=document.querySelector(".norte");
        carrousel(contenedor3,imgSrc);
    })
}
escribirHTML(listadoImagenes[0]);


/*  const slider = document.querySelector(".rome2");
let slides= Array.from(document.querySelectorAll(".preRome"));

let isDragging= false;
let startPos=0;
let currentTranslate=0;
let prevTranslate=0;
let animationID=0;
let currentIndex=0;

slides.forEach((slide,index) =>{
    const slideImg=slide ;
    slideImg.addEventListener("dragstart", e => e.preventDefault())
    slide.addEventListener("touchstart", touchStart(index))
    slide.addEventListener("touchend", touchEnd)
    slide.addEventListener("touchmove", touchMove)


    slide.addEventListener("mousedown", touchStart(index))
    slide.addEventListener("mouseup", touchEnd)
    slide.addEventListener("mouseleave", touchEnd)
    slide.addEventListener("mousemove", touchMove)
})
window.oncontextmenu= function(event){
    event.preventDefault()
    event.stopPropagation()
    return false 
}
function touchStart(index){
    return function(event){
        currentIndex= index;
        startPos =getPositionX(event)
        isDragging=true;
        animationID= requestAnimationFrame;
        slider.classList.add("grabbing")
    }
}
function touchEnd(){
    isDragging=false;
    cancelAnimationFrame(animationID);
    const movedBy=currentTranslate-prevTranslate;
    if (movedBy<-25 && currentIndex<slides.length-1)
    currentIndex +=1
    if (movedBy>25  && currentIndex>0)
    currentIndex -=1
    setPositionByIndex()
    slider.classList.remove("grabbing");

}
function touchMove(event){
    if(isDragging){
            const currentPosition= getPositionX(event);
            currentTranslate=prevTranslate + currentPosition- startPos
    }
}
function getPositionX(event){
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX ;
}

function animation(){
      setSliderPosition()
        
        if(isDragging) requestAnimationFrame(animation)
}
function  setSliderPosition(){
    slider.style.transform = `translateX(${currentTranslate}px)`
}
function setPositionByIndex(){
    currentTranslate= currentIndex * -window.innerWidth
    prevTranslate= currentTranslate
    setSliderPosition()
}
  */