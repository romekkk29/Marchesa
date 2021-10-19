  const btnMenu= document.querySelector(".menu");
const menu= document.querySelector(".menu-bar");
btnMenu.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.toggle("isactive");
    
})  

var imagenes2= ["img/1/stock.jpeg","img/3/gales.jpeg","img/3/juanatacoalto.jpeg","img/3/ojota.jpeg","img/3/tacobajo.jpeg"];
var class2=["gales","tacoalto","ojota","tacobajo"];
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
console.log(imgSrc);
  let zxyzz=document.querySelector(".stokeame");
  zxyzz.addEventListener("click",myFunction2);
 
 let abru=document.querySelector(".abru");
abru.addEventListener("click", function(){
escribirHTML(listadoImagenes[41]);
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
let candy=document.querySelector(".candy");
candy.addEventListener("click", function(){
escribirHTML(listadoImagenes[42]);
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
let cebral=document.querySelector(".cebral");
cebral.addEventListener("click", function(){
escribirHTML(listadoImagenes[43]);
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
let crant=document.querySelector(".crant");
crant.addEventListener("click", function(){
escribirHTML(listadoImagenes[44]);
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
let eraz=document.querySelector(".eraz");
eraz.addEventListener("click", function(){
escribirHTML(listadoImagenes[45]);
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
let find=document.querySelector(".find");
find.addEventListener("click", function(){
escribirHTML(listadoImagenes[46]);
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
let kylie=document.querySelector(".kylie");
kylie.addEventListener("click", function(){
escribirHTML(listadoImagenes[47]);
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
let lele=document.querySelector(".lele");
lele.addEventListener("click", function(){
escribirHTML(listadoImagenes[48]);
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
let mariv=document.querySelector(".mariv");
mariv.addEventListener("click", function(){
escribirHTML(listadoImagenes[49]);
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
let troni=document.querySelector(".troni");
troni.addEventListener("click", function(){
escribirHTML(listadoImagenes[50]);
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

        }
    
   } 
   let asic=document.querySelector(".asicc");
   asic.addEventListener("click", function(){
   escribirHTML(listadoImagenes[5]);
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


