"use strict"

function getRec(e) {
  $.ajax({
    url: "https://api.pokemontcg.io/v1/cards/?limit=92900&offset=20",
    success: function(r) {
      r.cards.forEach(function(e) {
        console.log(r);
        console.log(e.text)
        $("#list").append("<li>" + e.name + "-" + e.text + "</li>");
      });
    },
    error: function(r) {
      console.log(r); //server response
    }
  })
}



$(document).ready(function() {
  $("button").on("click", function(r) {
    // console.log("hi");

    var dataRequest = "http://pokeapi.co/api/v2/pokemon/?limit=949&offset=20";

    $.ajax({
      url: dataRequest,
      success: function(response) {
        console.log(response);
        //getRec(response.drinks[0].idDrink)
        response.results.forEach(function(e) {
          getRec(e.name)
        })
      },
      error: function(r) {
        console.log(r); //server response
      }
    });
  });
});