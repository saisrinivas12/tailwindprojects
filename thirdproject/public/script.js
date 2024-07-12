const navDialog = document.getElementById("nav-dialog");
const mainContent = document.getElementById("main-content");


const initialLTR = 48*4;
const initialRTL = -36*4;
let totalTransform = 0;
function handleMenu(){
    navDialog.classList.toggle("hidden");
    if(!navDialog.classList.contains("hidden")){
        mainContent.classList.remove("text-white");
       mainContent.classList.add("text-black");
       
        
    }
    else{
        mainContent.classList.remove("text-black");
        mainContent.classList.add("text-white");
        
    }
   
}



function setUpIntersectionObserver(element,isLTR,speed){
const intersectionObservercallback = (entries)=>{
    const is = entries[0].isIntersecting;
    if(is){
      const transformX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
      if(isLTR){
       totalTransform = initialLTR + transformX;

      }
      else{
        totalTransform = -(initialRTL + transformX);
      }
      element.style.transform = `translateX(${totalTransform}px`;
    }
   
}


    const intersectionObserver = new IntersectionObserver(intersectionObservercallback);
    intersectionObserver.observe(element);
}





const brandLine1 = document.getElementById("brands-line-1");
setUpIntersectionObserver(brandLine1,false,0.15);