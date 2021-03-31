var $loadingdiv=document.querySelector('.loading')

window.addEventListener("load",()=>{
    $loadingdiv.className+=" hidden"; 
})  


window.onscroll=()=>{
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.querySelector(".dclogo").className+= " navbar";
        document.querySelector("#navlink").style.visibility="visible";
        // document.querySelector("#navlink").className+=" m-fadeIn"
      } 
      else
      {
        document.querySelector(".dclogo").className="dclogo";
        document.querySelector("#navlink").style.visibility="hidden";
        // document.querySelector("#navlink").className+=" m-fadeOut"
      }
}