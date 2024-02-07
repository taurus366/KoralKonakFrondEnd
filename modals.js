// ABOUT
$('.box-menu-one').on('click', function () { 
    $('#about').modal('toggle');
 });

 $('.about-modal-close').on('click', function(){
    $('#about').modal('toggle');
 });
 // ABOUT

 // CONTACTS
$('.box-menu-three').on('click', function () { 
   $('#contacts').modal('toggle');
});

$('.contacts-modal-close').on('click', function(){
   $('#contacts').modal('toggle');
});
// CONTACTS

// GALLERY
$('.box-menu-five').on('click', function () { 
   $('#gallery').modal('toggle');
});

$('.gallery-modal-close').on('click', function(){
   $('#gallery').modal('toggle');
});
// GALLERY
// IMG OF GALLERY
$('.gallery-item').on('click', function () { 

   // SET INFO THEN OPEN


   $('#img-gallery').modal('toggle');
});

$('.img-gallery-modal-close').on('click', function(){
   // CLEAR INFO THEN CLOSE
   $('#img-gallery').modal('toggle');
});
// IMG OF GALLERY
// RESERVATION
$('.btn-reservation').on('click', function () { 
   $('#reservation').modal('toggle');
});

$('.reservation-modal-close').on('click', function(){
   $('#reservation').modal('toggle');
});
// RESERVATION
// SIDE MENU
// $('.menu-item').on('click', function(){
//    console.log('test');
//    $('#side-menu').modal('toggle');
// })
// SIDE MENU

