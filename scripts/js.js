let headjs = (function(){

    let scrollFunction, botonera, navbar;

    botonera = document.getElementsByClassName("botonera");
    navbar = document.getElementsByTagName("navbtb");

    scrollFunction = function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            navbar.style.color = "white";
            alert ("Funciona");

        }

        else{
            //alert ("Funciona Else");
            //navbar.style.filter = "opacity(100%)";
            navbar.style.color = "white";
        }

    };

    return{
        navScroll : function(){
          scrollFunction();  
        }
    };

})();



window.addEventListener('scroll', headjs.navScroll);


