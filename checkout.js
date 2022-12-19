(function($){
    $.fn.checkout= function() {
      var currentStage = 0;
     var members = {  
 
    updatedStage : function() {
      currentStage= $('.checkout-main').attr('data-checkout-stage');
     
    if(currentStage === 'shipping') { 
      $('.veil').removeClass('d-none');   
$('#shippingForm').submit(function (e) { 
    e.preventDefault();
    $('.veil').addClass('d-none'); 
    $('.edit-shipping').removeClass('d-none');
    $('.emailaddress').empty().text($('#emailAddress').val());
    $('.firstname').empty().text($('#firstName').val());
    $('.lastname').empty().text($('#firstName').val());
    $('.street').empty().text($('#streetAddress').val());
    $('.city').empty().text($('#city').val());
    $('.zipcode').empty().text($('#zipCode').val());
    $('.phonenumber').empty().text($('#phoneNumber').val());
    if($('shipping-method-list').hasClass('selected')){
    $('.delivery-method-name').empty().text($('.selected.shipping-method').val());
    $('.delivery-price').empty().text($('.selected .shipping-cost').val());
  }
   
    $('.shipping-form').addClass('d-none');
    $('.shipping-address').removeClass('d-none');
    $('.payment-section .accordion-head').removeClass('disabled');
    $('.payment-section .payment-section-details').addClass('show');
     $('.checkout-main').attr("data-checkout-stage","payment");
     if($('.payment-form').hasClass('d-none')){
      $('.payment-form').removeClass('d-none');
      $('.payment-details').addClass('d-none');
     }    
  });

 
  $('.edit-shipping').on('click',function(){

   $('.shipping-form').removeClass('d-none');
   $('.shipping-address').addClass('d-none'); 
   $('.edit-shipping').addClass('d-none');   
   $('.payment-section .accordion-head').addClass('disabled');
   $('.payment-section .payment-section-details').removeClass('show');
   $('.place-order-section .accordion-head').addClass('disabled');
   $('.place-order-section .place-order-section-details').removeClass('show');
   $('.edit-payment').addClass('d-none'); 
   $('.checkout-main').attr("data-checkout-stage","shipping");
  });

  $('.delivery-method-name').empty().text("Standard");
  $('.delivery-price').empty().text("Free");
  $('.delivery-content').on('click',function(){
    $('.delivery-content').parent().removeClass('selected');
    $(this).parent().addClass('selected');
    $('.delivery-method-name').empty().text($(this).children()[0].innerText);
    $('.delivery-price').empty().text($(this).children()[1].innerText);
      });
      $('#cardNumber').keyup(function(){       
        var v =$(this).val().replace(/\D/,'');
        v=v.replace(/(\d{4})(?=\d)/g,'$1-');
          $(this).val(v);         
       });
       $('#expiryDate').keyup(function(){       
        var v =$(this).val().replace(/\D/,'');
        v=v.replace(/(\d{2})(?=\d)/g,'$1/');
          $(this).val(v);         
       });
    } else if(currentStage ==='payment') {    
      $('#paymentForm').submit(function(e){
        e.preventDefault();
        var credit=$('#cardNumber').val().slice(-4);
        $('.payment-form').addClass('d-none');
        $('.payment-details').removeClass('d-none');
        $('.edit-payment').removeClass('d-none');
        $('.credit-card-details').empty().text('ending in '+credit);
        $('.place-order-section .accordion-head').removeClass('disabled');
        $('.place-order-section .place-order-section-details').addClass('show');
        $('.checkout-main').attr("data-checkout-stage","placeorder");
      });
      $('.edit-payment').on('click',function(){

        $('.payment-form').removeClass('d-none');
        $('.payment-details').addClass('d-none'); 
        $('.edit-payment').addClass('d-none');   
        $('.place-order-section .accordion-head').addClass('disabled');
        $('.place-order-section .place-order-section-details').removeClass('show');
        $('.checkout-main').attr("data-checkout-stage","payment");
       });
     
      } else if(currentStage === 'placeorder'){
        $('.placehoder').val();
        console.log('Hiiiiiiiiiiiiiiiiiiiiii');
      }
    },
    initilize : function(){
    }
  
    };
 
    $('.next-step').on('click',function(){     
     setTimeout(members.updatedStage(),3000);  
    });

    };
    }(jQuery));

    //    $(document).ready(function (){
    //    checkout();       
    //    });

    $('#checkout-main').checkout();

   