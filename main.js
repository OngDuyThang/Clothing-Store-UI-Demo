var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
    counter = 1;
    }
}, 5000);
/* ========================================================================================================================*/
function redirect(){
    window.location = "http://127.0.0.1:5500/DoAnMonHoc/detaildisplay.html"
}