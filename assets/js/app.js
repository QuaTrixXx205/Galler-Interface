
// Table responsive 
$(document).ready(function(){
    $("#wrapperGaller .more-options").click(function(){
       $(this).next().toggle();
    })

    var table = document.querySelector('table')
    $(window).resize(function(){
        var width = $(window).width();
       if(width <= 768){
        table.classList.add('table-responsive')
       }else{
        table.classList.remove('table-responsive')
       }
    });


})
// Animation Button accordion
var buttons = document.querySelectorAll("#wrapperCannarex #accordion .options button")
for (let index = 0; index < buttons.length; ++index) {
    buttons[index].onclick = function(e){
        for (let index = 0; index < buttons.length; ++index) {
            buttons[index].classList.remove('active')
        }
        buttons[index].classList.add('active')
    }
}


// Amination Button Open Menu Responsive
var btnOpenMenu = document.querySelector("#wrapperCannarex .block-header-responsive .btn-open-menu")
var mainMenuResponsive = document.querySelector("#wrapperCannarex .block-header-responsive .block-menu")
btnOpenMenu.onclick = function(e){
    mainMenuResponsive.classList.toggle("active")
    if(btnOpenMenu.classList.contains("fa-bars")){
        btnOpenMenu.classList.remove("fa-bars")
        btnOpenMenu.classList.add("fa-xmark")
    }else{
        btnOpenMenu.classList.remove("fa-xmark")
        btnOpenMenu.classList.add("fa-bars")
    }
}


