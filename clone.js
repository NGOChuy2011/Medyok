// var slideIndex = 1;
// var timer = null;
// showSlides(slideIndex);

// function plusSlides(n) {
//   clearTimeout(timer);
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   clearTimeout(timer);
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slider");
//   if (n==undefined){n = ++slideIndex}
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   slides[slideIndex-1].style.display = "block";
//   timer = setTimeout(showSlides, 3000);

// } 

// thay đổi nút input trong cart

// $('tbody').on('click', '.minus',function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     carttotal ()
//     return false;
//   });
//   $('tbody').on('click', '.plus',function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     carttotal ()
//     return false;
//   });
