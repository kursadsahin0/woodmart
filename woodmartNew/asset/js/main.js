/* BASKET CART  */

function basketopen() {
    var basket = document.getElementById("basket");
    basket.classList.toggle("active");
}

function openmobilmenu() {
var mobilmenu = document.getElementById("mobilmenu");
mobilmenu.classList.toggle("active");
}

function leftmenu() {
    var mobilmenuaside = document.getElementById("mobilmenu");
    mobilmenu.classList.remove("right-menu");
    mobilmenu.classList.add("left-menu");
}

function rightmenu() {
    var mobilmenuaside = document.getElementById("mobilmenu");
    mobilmenu.classList.remove("left-menu");
    mobilmenu.classList.add("right-menu");
}
    /* MOBIL MENU */


/* MAIN SLIDER */

$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    /*=   Burada sağ sol butonlar için stillendirme yapılabilir son eklenen left/right etiketleri ile css kodları yazılabilir   =*/
    prevArrow: '<i class="fa-solid fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right right_arrow"></i>',
    /*=   dots içinde sadece css kodu olması yeterli olacaktır '.slick-dots  normal' - '.slick-dots .slick-active aktif olan için'   =*/

});


/* Tab menu slider item 2 */

function raporgetir(evt, raporlar) {
    var i, raporcontent, tablinks;
    var buttongroup = document.getElementsByClassName('btn');
    raporcontent = document.getElementsByClassName("raporcontent");
    for (i = 0; i < raporcontent.length; i++) {
        raporcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(raporlar).style.display = "block";
    evt.currentTarget.className += " active";

    buttongroup.classList.remove("active")

}

/* Tab menu slider item 3 */

function renkgetir(evt, renkler) {
    var i, renkcontent, tablinks;
    var buttongroup = document.getElementsByClassName('btn');
    renkcontent = document.getElementsByClassName("renkcontent");
    for (i = 0; i < renkcontent.length; i++) {
        renkcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(renkler).style.display = "block";
    evt.currentTarget.className += " active";

    buttongroup.classList.remove("active")

}

/* Boostrap menüleri için açılır menü yapmıştım fakat biraz sorunu var ama çalışıyor zamanım olamdığı için şuanlık gizliyorum  
$('.dropdown').hover(function () {
    $('.dropdown-toggle', this).trigger('click');
});*/

