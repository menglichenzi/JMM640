var oDiv = document.querySelector(".navcont"); 
var otop = oDiv.offsetTop; 
window.onscroll = function() { 
    var oheight = document.documentElement.scrollTop || document.body.scrollTop; 
    if (otop < oheight) {
        oDiv.style.position = "fixed";
        oDiv.style.top = 0;
        oDiv.style.width = '100%';
        oDiv.style.marginTop = '0';
        oDiv.style.zIndex = '999999999';
       
    } else {
        oDiv.style.position = "relative";
        oDiv.style.marginTop = '30px';
    }
}