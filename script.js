// let getButton = document.getElementById("get-button");

// getButton.addEventListener('click', () => {
// console.log("get-button");
// })

$(document).ready(function() {

  // $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(dane) {
  // console.log(dane)
  $('#get-button').click(function() {

    // console.log('test')
    $.get('https://akademia108.pl/api/ajax/get-post.php')
      .done(function(dane) {
        console.log(dane);
        /*   $('#imie').text(dane.imie);
         $('#nazwisko').text(dane.nazwisko);
         $('#zawod').text(dane.zawod);
         $('#firma').text(dane.firma); */

      })

  })
})






// $(document).ready( () => {
 // $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function() {
  // console.log(jQuery);
// });