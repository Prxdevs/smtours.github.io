//START woo function
function nd_travel_woo_checkout(){

  var nd_travel_trip_price = jQuery( "#nd_travel_form_booking_price").val();
  var nd_travel_rid = jQuery( "#nd_travel_form_booking_id").val();
  var nd_travel_services = jQuery( "#nd_travel_form_booking_services").val();

  //START post method
  jQuery.get(
    
  
    //ajax
    nd_travel_my_vars_woo.nd_travel_ajaxurl_woo,
    {
      action : 'nd_travel_woo_php',
      nd_travel_trip_price : nd_travel_trip_price,
      nd_travel_rid : nd_travel_rid,
      nd_travel_services : nd_travel_services,
      nd_travel_woo_security : nd_travel_my_vars_woo.nd_travel_ajaxnonce_woo,
    },
    //end ajax


    //START success
    function( nd_travel_woo_result ) {
      document.getElementById(nd_travel_woo_result).submit();
    }
    //END

    

  );
  //END

  
}
//END woo function