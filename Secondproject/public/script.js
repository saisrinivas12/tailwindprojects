const navDialog = document.getElementById("nav-dialog");


function handleMenu() {

    navDialog.classList.toggle('hidden');
}

const initialLTR = -48*4;
const initialRTL = 36*4;
function setUpInterSectionObserver(element,isLTR,speed){
    const intersectionCallback = (entries)=>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){//element is on the browser
           document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;//to know how much scrolling effect has been done
         let totalTransform = 0;
         console.log('passed');

         if(isLTR){
            totalTransform = translateX + initialLTR;
         }
         else{
            totalTransform = -(translateX + initialRTL);
         }
        element.style.transform =`translateX(${totalTransform}px)`;
    }
}


const line1= document.getElementById("line-1");
const line2=document.getElementById("line-2");
const line3=document.getElementById("line-3");
const line4 = document.getElementById("line-4");


setUpInterSectionObserver(line1,true,0.15);
setUpInterSectionObserver(line2,false,0.15);
setUpInterSectionObserver(line3,true,0.15);
setUpInterSectionObserver(line4,true,0.8);



const dtElement = document.querySelectorAll("dt");

dtElement.forEach(element => {
    element.addEventListener('click',function(){
      const ddId = element.getAttribute("aria-controls");
      const ddElement = document.getElementById(ddId);
      const arrowIcon = element.querySelectorAll("i")[0];
      
      ddElement.classList.toggle('hidden');
      arrowIcon.classList.toggle('-rotate-180')
    });
})