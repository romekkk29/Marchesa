  const btnMenu= document.querySelector(".menu");
const menu= document.querySelector(".menu-bar");
btnMenu.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.toggle("isactive");
    
})  

var imagenes2= ["img/3/gales.jpeg","img/3/juanatacoalto.jpeg","img/3/ojota.jpeg","img/3/tacobajo.jpeg"]

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

let imgSrc=[];
 let p=document.querySelector(".ssss");
  p.addEventListener("click",myFunction);
function myFunction(){
  escribirHTML(listadoImagenes[0]);
let cancelar=document.querySelector(".teQuiero");
 cancelar.style.display="none";
 let contenedor3=document.querySelector(".norte");
carrousel(contenedor3,imgSrc) ;
let carrito=document.querySelector(".carrito");
carrito.style.display="block";
carrito.style.display="flex";
carrito.style.alignItems="center";
carrito.style.justifyContent="center";
let este=document.querySelector(".este");
este.style.display="none";

    }

   
function escribirHTML(objeto) {
    for(let imagen of objeto.imgUrl){
        imgSrc.push(imagen);
    }
    let contenedor = document.querySelector(".rome");
    const miTemplate =`
    <div class="rome2">
    
    <div class="carrousel norte">
    <div class="atras botones">
        &#60
    </div>
    <div class="adelante botones">
        &#62
    </div>
    <img src=${imgSrc[0]}>
    </div>
    
    <p>${objeto.title}</p>
    <br>
    <p>${objeto.precio}</p>
    <br>
    <hr>
    <p class="descri">${objeto.description}</p>
    <hr>
    <br>
    </div>
    
    `;
    contenedor.innerHTML += miTemplate;
}


