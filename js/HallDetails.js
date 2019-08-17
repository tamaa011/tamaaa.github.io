$(document).ready(function(){
    var token = window.localStorage.getItem('token');
   var id= window.localStorage.getItem('Id');
 $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/halls/"+id,
    method: "get",
   
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
        window.localStorage.removeItem('Id');
        var halldata = data.data;
$("#hdName").html(halldata.hallName);
$("#hdDescription").html(halldata.hallDescription);
$("#hdPrice").html(halldata.hallPrice);
$("#hdLong").html(halldata.hallLocationLong);
$("#hdLat").html(halldata.hallLocationLat);
$("#hdOffer").html(halldata.hallSpecialOffers);
$("#hdPhone").html(halldata.hallPhoneNumber);
$("#hdAddress").html(halldata.hallAdress);

$.each( halldata.hallImage, function( key, value ) {
    alert(value);
    $("#hdImages").append('<img src="'+ value+'"/>');
});
    }
  });
})