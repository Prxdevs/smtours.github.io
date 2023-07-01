function nd_travel_update_button_price(){

  //get datas
  var nd_travel_form_booking_price = jQuery( "#nd_travel_form_booking_price").val();
  var nd_travel_form_booking_price_services = jQuery( "#nd_travel_form_booking_price_services").val();

  //calc
  var nd_travel_form_booking_button_price = parseInt(nd_travel_form_booking_price)+parseInt(nd_travel_form_booking_price_services);
  
  //update price
  jQuery("#nd_travel_woo_checkout_button_price").text(nd_travel_form_booking_button_price);

}



  
function nd_travel_update_booking_price() {

  var nd_travel_form_booking_id = jQuery( "#nd_travel_form_booking_id").val();
  var nd_travel_form_booking_price = jQuery( "#nd_travel_form_booking_price").val();
  var nd_travel_form_booking_adults = jQuery( "#nd_travel_form_booking_adults").val();
  var nd_travel_form_booking_children = jQuery( "#nd_travel_form_booking_children").val();

  var nd_travel_form_booking_children = jQuery( "#nd_travel_form_booking_children").val();

  //START post method
  jQuery.get(
    
  
    //ajax
    nd_travel_my_vars_final_price.nd_travel_ajaxurl_final_price,
    {
      action : 'nd_travel_final_price_php',
      nd_travel_form_booking_id : nd_travel_form_booking_id,
      nd_travel_form_booking_price : nd_travel_form_booking_price,
      nd_travel_form_booking_adults : nd_travel_form_booking_adults,
      nd_travel_form_booking_children : nd_travel_form_booking_children,
      nd_travel_final_price_security : nd_travel_my_vars_final_price.nd_travel_ajaxnonce_final_price,
    },
    //end ajax


    //START success
    function( nd_travel_final_price ) {

      jQuery( "#nd_travel_form_booking_price" ).empty();
      jQuery( "#nd_travel_form_booking_price").val(nd_travel_final_price);

      nd_travel_update_button_price();

    }
    //END

    

  );
  //END



}