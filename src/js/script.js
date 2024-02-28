
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo", this.window.scrollY>0);

    
    var elementosA = this.document.querySelectorAll("a");
    elementosA.forEach(function(a){
        a.classList.toggle("abajo", this.window.scrollY>0);
    })
    
    
})

