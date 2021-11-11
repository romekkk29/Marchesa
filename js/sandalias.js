const btnMenu= document.querySelector(".menu");
const menu= document.querySelector(".menu-bar");
btnMenu.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.toggle("isactive");
    
})  
 
var imagenes2= ["img/1/stock.jpeg","img/3/gales.jpeg","img/TOKEN/principal.jpeg","img/3/ojota.jpeg","img/3/tacobajo.jpeg","img/SKYLA/principal.jpeg","img/ONOS/1.jpg","img/malibu/3.jpeg" ];

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
            escribirHTML(listadoImagenes[26]);
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
        if (cont==6){
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
        if (cont==7){
            escribirHTML(listadoImagenes[52]);
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
  
  let berry=document.querySelector(".berry");
  berry.addEventListener("click", function(){
  escribirHTML(listadoImagenes[6]);
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
 let blosam=document.querySelector(".blosam");
  blosam.addEventListener("click", function(){
  escribirHTML(listadoImagenes[7]);
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
 
 let shira=document.querySelector(".shira");
  shira.addEventListener("click", function(){
  escribirHTML(listadoImagenes[8]);
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
 let cloe=document.querySelector(".cloe");
  cloe.addEventListener("click", function(){
  escribirHTML(listadoImagenes[9]);
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
 let finni=document.querySelector(".finni");
  finni.addEventListener("click", function(){
  escribirHTML(listadoImagenes[10]);
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
 let flaunt=document.querySelector(".flaunt");
  flaunt.addEventListener("click", function(){
  escribirHTML(listadoImagenes[11]);
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
 let form=document.querySelector(".form");
  form.addEventListener("click", function(){
  escribirHTML(listadoImagenes[12]);
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
 let giuli=document.querySelector(".giulia");
  giuli.addEventListener("click", function(){
  escribirHTML(listadoImagenes[13]);
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

 let sunny=document.querySelector(".sunny");
  sunny.addEventListener("click", function(){
  escribirHTML(listadoImagenes[14]);
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
 let greta=document.querySelector(".greta");
  greta.addEventListener("click", function(){
  escribirHTML(listadoImagenes[15]);
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
 let kaleb=document.querySelector(".kaleb");
  kaleb.addEventListener("click", function(){
  escribirHTML(listadoImagenes[16]);
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
 let wippei=document.querySelector(".wippei");
 wippei.addEventListener("click", function(){
 escribirHTML(listadoImagenes[17]);
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
let siux=document.querySelector(".siux");
siux.addEventListener("click", function(){
escribirHTML(listadoImagenes[18]);
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
let pleo=document.querySelector(".pleo");
pleo.addEventListener("click", function(){
escribirHTML(listadoImagenes[19]);
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
let daff=document.querySelector(".daff");
daff.addEventListener("click", function(){
escribirHTML(listadoImagenes[20]);
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
let nikka=document.querySelector(".nikka");
nikka.addEventListener("click", function(){
escribirHTML(listadoImagenes[21]);
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
let mali=document.querySelector(".mali");
mali.addEventListener("click", function(){
escribirHTML(listadoImagenes[22]);
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
let last=document.querySelector(".last");
last.addEventListener("click", function(){
escribirHTML(listadoImagenes[23]);
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
let kimber=document.querySelector(".kimber");
kimber.addEventListener("click", function(){
escribirHTML(listadoImagenes[24]);
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
let nossa=document.querySelector(".nossa");
nossa.addEventListener("click", function(){
escribirHTML(listadoImagenes[25]);
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
let token=document.querySelector(".token");
token.addEventListener("click", function(){
escribirHTML(listadoImagenes[26]);
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
let atenas=document.querySelector(".atenas");
atenas.addEventListener("click", function(){
escribirHTML(listadoImagenes[27]);
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
let comfy=document.querySelector(".comfy");
comfy.addEventListener("click", function(){
escribirHTML(listadoImagenes[28]);
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
let dreya=document.querySelector(".dreya");
dreya.addEventListener("click", function(){
escribirHTML(listadoImagenes[29]);
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
let tury=document.querySelector(".tury");
tury.addEventListener("click", function(){
escribirHTML(listadoImagenes[30]);
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
let rich=document.querySelector(".rich");
rich.addEventListener("click", function(){
escribirHTML(listadoImagenes[31]);
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


let renni=document.querySelector(".renni");
renni.addEventListener("click", function(){
escribirHTML(listadoImagenes[33]);
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
let nest=document.querySelector(".nest");
nest.addEventListener("click", function(){
escribirHTML(listadoImagenes[34]);
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
let masol=document.querySelector(".masol");
masol.addEventListener("click", function(){
escribirHTML(listadoImagenes[35]);
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
let fisher=document.querySelector(".fisher");
fisher.addEventListener("click", function(){
escribirHTML(listadoImagenes[36]);
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
let evial=document.querySelector(".evial");
evial.addEventListener("click", function(){
escribirHTML(listadoImagenes[37]);
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
let druna=document.querySelector(".druna");
druna.addEventListener("click", function(){
escribirHTML(listadoImagenes[38]);
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
let brusel=document.querySelector(".brusel");
brusel.addEventListener("click", function(){
escribirHTML(listadoImagenes[39]);
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
let classa=document.querySelector(".classa");
classa.addEventListener("click", function(){
escribirHTML(listadoImagenes[40]);
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
let luba=document.querySelector(".luba");
luba.addEventListener("click", function(){
escribirHTML(listadoImagenes[51]);
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
let sinNombre=document.querySelector(".sinNombre");
sinNombre.addEventListener("click", function(){
escribirHTML(listadoImagenes[56]);
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
let sn4=document.querySelector(".sn4");
sn4.addEventListener("click", function(){
escribirHTML(listadoImagenes[57]);
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
let sn5=document.querySelector(".sn5");
sn5.addEventListener("click", function(){
escribirHTML(listadoImagenes[58]);
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
let sn6=document.querySelector(".sn6");
sn6.addEventListener("click", function(){
escribirHTML(listadoImagenes[59]);
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

let sn8=document.querySelector(".sn8");
sn8.addEventListener("click", function(){
escribirHTML(listadoImagenes[61]);
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

let sn9=document.querySelector(".sn9");
sn9.addEventListener("click", function(){
escribirHTML(listadoImagenes[62]);
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
let sn10=document.querySelector(".sn10");
sn10.addEventListener("click", function(){
escribirHTML(listadoImagenes[63]);
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
let sn11=document.querySelector(".sn11");
sn11.addEventListener("click", function(){
escribirHTML(listadoImagenes[64]);
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
let sn12=document.querySelector(".sn12");
sn12.addEventListener("click", function(){
escribirHTML(listadoImagenes[65]);
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
let malibu=document.querySelector(".malibu");
malibu.addEventListener("click", function(){
escribirHTML(listadoImagenes[52]);
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
let onos=document.querySelector(".onos");
onos.addEventListener("click", function(){
escribirHTML(listadoImagenes[2]);
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









let noHay= document.querySelector("#noHay");
noHay.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡cooming soon!");
 
   
})
let noHay1= document.querySelector("#noHay1");
noHay1.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡cooming soon!");
 
   
})


let winter= document.querySelector("#invierno");
winter.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡wait for the winter season!");
 
   
})
let winter1= document.querySelector("#invierno1");
winter1.addEventListener("click",function(e){
   e.preventDefault();
    swal(" ¡wait for the winter season!");
 
   
})







    

 

  
   
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


