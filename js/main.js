const btnMenu= document.querySelector(".menu");
const menu= document.querySelector(".menu-bar");
btnMenu.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.toggle("isactive");
    
})  

var imagenes2= ["img/1/stock.jpeg","img/3/gales.jpeg","img/3/juanatacoalto.jpeg","img/3/ojota.jpeg","img/3/tacobajo.jpeg","img/SKYLA/principal.jpeg"];

let cont=0;
function carrousel(contenedor,imagenes){
    contenedor.addEventListener("click", e => {
        let atras=contenedor.querySelector(".atras");
        let adelante= contenedor.querySelector(".adelante");
        let imagen=contenedor.querySelector("img");
      
        let tgt=e.target;
        e.preventDefault();
        if(tgt==atras){
            if(cont >0){
                imagen.src= imagenes[cont -1 ];
               
                cont--;
            }else { imagen.src= imagenes[imagenes.length - 1];
                     cont= imagenes.length - 1;
            }
            console.log(cont);
        } else if(tgt==adelante) {
            if(cont < imagenes.length-1){
                imagen.src= imagenes[cont + 1 ];
               
                cont++;
            }else { imagen.src= imagenes[0];

                     cont= 0;
            }
            console.log(cont);
        }
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor2=document.querySelector(".este");
    carrousel(contenedor2,imagenes2);
})
var imgSrc=[];

  let zxyzz=document.querySelector(".stokeame");
  zxyzz.addEventListener("click",myFunction2);
  

function myFunction2(){
    if(cont==1){
        escribirHTML(listadoImagenes[1]);
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
        let imagennn=document.querySelector("#stockk");
        imagennn.style.width="260px";
        imagennn.style.height="260px";
        let botones=document.querySelector(".atras");
        botones.style.display="none";
        let botoness=document.querySelector(".adelante");
        botoness.style.display="none"
         }
        if (cont==2){
            escribirHTML(listadoImagenes[2]);
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
        let imagennn=document.querySelector("#stockk");
        imagennn.style.width="260px";
        imagennn.style.height="260px";
        let botones=document.querySelector(".atras");
        botones.style.display="none";
        let botoness=document.querySelector(".adelante");
        botoness.style.display="none"

        }
        if (cont==3){
            escribirHTML(listadoImagenes[3]);
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
        let imagennn=document.querySelector("#stockk");
        imagennn.style.width="260px";
        imagennn.style.height="260px";
        let botones=document.querySelector(".atras");
        botones.style.display="none";
        let botoness=document.querySelector(".adelante");
        botoness.style.display="none"

        }
        if (cont==4){
            escribirHTML(listadoImagenes[4]);
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
        let imagennn=document.querySelector("#stockk");
        imagennn.style.width="260px";
        imagennn.style.height="260px";
        let botones=document.querySelector(".atras");
        botones.style.display="none";
        let botoness=document.querySelector(".adelante");
        botoness.style.display="none"

        }
        if (cont==5){
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
        let imagennn=document.querySelector("#stockk");
        imagennn.style.width="260px";
        imagennn.style.height="260px";
        let botones=document.querySelector(".atras");
        botones.style.display="none";
        let botoness=document.querySelector(".adelante");
        botoness.style.display="none"

        }
    
   } 
   let winter= document.querySelector("#invierno");
   winter.addEventListener("click",function(e){
      e.preventDefault();
       swal(" ¡ wait for the winter season !");
    
      
   })
   let winter1= document.querySelector("#invierno1");
   winter1.addEventListener("click",function(e){
      e.preventDefault();
       swal(" ¡ wait for the winter season !");
    
      
   })
   
let noHay= document.querySelector("#noHay");
noHay.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡ cooming soon !");
 
   
})
let noHay1= document.querySelector("#noHay1");
noHay1.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡ cooming soon !");
 
   
})
   
let battlo=document.querySelector(".battlo");
battlo.addEventListener("click", function(){
escribirHTML(listadoImagenes[53]);
let cancelar=document.querySelector(".teQuiero");
cancelar.style.display="none";
let contenedor4=document.querySelector(".norte");
carrousel(contenedor4,imgSrc) ;
let carrito=document.querySelector(".carrito");
carrito.style.display="block";
carrito.style.display="flex";
carrito.style.alignItems="center";
carrito.style.justifyContent="center";
let este=document.querySelector(".este");
este.style.display="none";
let imagennn=document.querySelector(".agrandar");
imagennn.style.width="260px";
imagennn.style.height="260px";
});
let judy=document.querySelector(".judy");
judy.addEventListener("click", function(){
escribirHTML(listadoImagenes[54]);
let cancelar=document.querySelector(".teQuiero");
cancelar.style.display="none";
let contenedor4=document.querySelector(".norte");
carrousel(contenedor4,imgSrc) ;
let carrito=document.querySelector(".carrito");
carrito.style.display="block";
carrito.style.display="flex";
carrito.style.alignItems="center";
carrito.style.justifyContent="center";
let este=document.querySelector(".este");
este.style.display="none";
let imagennn=document.querySelector(".agrandar");
imagennn.style.width="260px";
imagennn.style.height="260px";
});
let yuky=document.querySelector(".yuky");
yuky.addEventListener("click", function(){
escribirHTML(listadoImagenes[55]);
let cancelar=document.querySelector(".teQuiero");
cancelar.style.display="none";
let contenedor4=document.querySelector(".norte");
carrousel(contenedor4,imgSrc) ;
let carrito=document.querySelector(".carrito");
carrito.style.display="block";
carrito.style.display="flex";
carrito.style.alignItems="center";
carrito.style.justifyContent="center";
let este=document.querySelector(".este");
este.style.display="none";
let imagennn=document.querySelector(".agrandar");
imagennn.style.width="260px";
imagennn.style.height="260px";
});



 




 

    

 

  
   
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
    <img id=stockk class=agrandar src=${imgSrc[0]}>
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




