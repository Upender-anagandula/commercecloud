
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(document).ready(function () {
  $('.dropdown:not(.disabled) [data-toggle="dropdown"]').on('mouseenter', function () {
    console.log(this);
    if ($(this).hasClass('nav-item')) {
      $(this).addClass('show');
      $('.dropdown-menu').addClass('show');
      $('.dropdown-toggle').attr('aria-expanded', 'true');
    }
    // $(this).addClass('show');
    $('.dropdown-menu').addClass('show');
    $('.dropdown-toggle').attr('aria-expanded', 'true');
    
  });
  $('.dropdown-menu').on('mouseleave', function () {
    if ($(this).hasClass('nav-item')) {
      $(this).removeClass('show');
      $('.dropdown-menu').removeClass('show');
      $('.dropdown-toggle').attr('aria-expanded', 'false');
    }
    // $(this).removeClass('show');    
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-toggle').attr('aria-expanded', 'false');
    });
  
 
//   $('.dropdown:not(.disabled) [data-toggle="dropdown"]').on('mouseenter', function () {
  
//      $(this).parent().addClass('show');
//      $(this).attr('aria-expanded','true');
//      $(this).next().addClass('show');               
//     });       
//  $('.dropdown:not(.disabled) [data-toggle="dropdown"]').parent().on('mouseleave', function () {
        
//              $(this).removeClass('show');
//              $(this).children('.dropdown-menu').removeClass('show');
//              $(this).children('.nav-link').attr('aria-expanded', 'false');              
         
//      });

  $('.email-subscribe').on('click', function (e) {
    e.preventDefault();
    var email = $('#email').val();
    var checkEmail = isEmail(email);
    if (checkEmail) {
      $('.email-subscribe').addClass('d-none');
      $('#email').attr('disabled', 'true');
      $('.success').removeClass('d-none');
      $('.default').addClass('d-none');
      $('#email').val('');
    } else {
      $('.email-subscribe').addClass('d-none');
      $('.error').removeClass('d-none');
      $('.default').addClass('d-none');
      $('#email').val('');
    }
  });

  $('#email').focus(function () {
    $('.email-subscribe').removeClass('d-none');
    $('#email').val('');
    $('.default').removeClass('d-none');
    $('.error').addClass('d-none');
  });

  $('.search-icon').on('mouseleave', function () {
    $('.search-result').addClass('d-none');
  });

  $('.search-input-box').on('keyup', function () {
    var value = $('.search-input-box').val();
    var size = value.length;
    if (size > 0) {
      $('.search-result').removeClass('d-none');
      $('.search-result').text(value);
    } else {
      $('.search-result').text('');
      $('.search-result').addClass('d-none');
    }
  });
 $('.search-icon').on('click', function(){
   $('.search-form').addClass('open-search ');
 });
 $('#close-search').on('click', function(){
  $('.search-form').removeClass('open-search ');
});

$('.remove-product').on('click', function(){
$(this).parent().parent().parent().addClass('d-none')
});
  $('.right-grp-mobile .search-icon-mobile').on('click', function () {
    $('.right-grp-mobile input').css('display', 'block');
    $('.navbar-toggler').css('display', 'none');
    $('.mobile').css('display', 'none');
    $('.right-grp-mobile').width('100%');
    $('.remove-search').removeClass('d-none');
  });
  $('.remove-search').on('click', function () {
    $('.right-grp-mobile input').css('display', 'none');
    $('.navbar-toggler').css('display', 'block');
    $('.mobile').css('display', 'block');
    $('.remove-search').addClass('d-none');
    $('.right-grp-mobile').width('unset');
  });
  $('.navbar-toggler').on('click', function () {
    if ($('.nav-mask').hasClass('d-none')) {
      $('.nav-mask').removeClass('d-none');
    } else {
      $('.nav-mask').addClass('d-none');
    }
  });

  $('.minicart-link').click(function(e){
    e.preventDefault();    
      $('.mini-cart').addClass('minicart-show');    
      $("body").css({'overflow':'hidden'});
      $('.mask').removeClass('d-none');
     });

    $('.mini-cart .minicart-close').on('click',function(){
      $('.mask').addClass('d-none')
       $('.mini-cart').removeClass('minicart-show');
       $("body").css({'overflow':'auto'});      
      }); 
   $('.choose-samples').on('click',function(){
    $('.samples-modal').addClass('open');
    $("body").css({'overflow':'hidden'});
   });
   $('.remove-samples').on('click',function(){
    $('.samples-modal').removeClass('open');
   });
   $("button.add").each(function(index){
   $(this).on('click',function(){
    if( $(this).hasClass('select')){
       $(this).removeClass('select');
       $(this).html('Add');
       } else {
      $(this).addClass('select');
      $(this).html('Selected');
    }
   });
  });

 $('.add-to-cart').on('click',function(){
var qty=$('.item-qty').val();
  var qty= qty+1;
  $('.item-qty').html(qty);
 
 });

  $(".login-btn").on('click', function (e) {
    e.preventDefault();
    var userName = $('#userName').val();
    var userPassword = $('#userPassword').val();
    $('.login-error').text('');
    // $('#LoginModal').modal('hide');
    var url = 'https://mocki.io/v1/6d410aa6-0032-409e-a2e8-1d60faba12d8';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        if (result.username == userName && result.password == userPassword) {
          $('.login-btn').attr('data-dismiss', 'modal');
          $('.right-grp .user-desktop').text(userName);
          $('.nav-mobile-login .user-mobile').text(userName);

        } else {
          $('.login-error').text('Username and password not Correct');
        }
      },
      error: function (err) {
        $('.login-error').text(err);
      }
    });
  });

  // $('.search-input-box').hover(function () {
  //   $('.search-container .search-input-box').removeClass('d-none');
  // }, function () {
  //   $('.search-container .search-input-box').addClass('d-none');
  //   $('.search-result').addClass('d-none');
  // }
  // );
  // $('.search-container .search-icon').on('mouseenter', function () {
  //   $('.search-container .search-input-box').removeClass('d-none');
  // });

  // $('.search-container .search-icon').on('mouseleave', function () {
  //   $('.search-container .search-input-box').addClass('d-none');
  // });
   
  $('.right-grp .search-container .search-icon').on('mouseenter',function(){    
    $('.search-input-box').css({"border": "1px solid #ced4da", "width": "230px"});

  });
  $('.right-grp .search-container .search-icon').on('mouseleave',function(){
    $('.search-input-box').css({"border": "none", "width": "0"});
    $('.search-result').addClass('d-none');
  });
  $('.right-grp .search-container .search-input-box').on('mouseenter',function(){
    $('.search-input-box').css({"border": "1px solid #ced4da", "width": "230px"});
  });
  $('.right-grp .search-container .search-input-box').on('mouseleave',function(){
    $('.search-input-box').css({"border": "none", "width": "0"});
    $('.search-result').addClass('d-none');
  });


  $('#shippingForm').submit(function (e) {
    e.preventDefault();
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
  });

  $('.delivery-method-name').empty().text("Standard");
  $('.delivery-price').empty().text("Free");
  $('.delivery-content').on('click',function(){
    $('.delivery-content').parent().removeClass('selected');
    $(this).parent().addClass('selected');
    $('.delivery-method-name').empty().text($(this).children()[0].innerText);
    $('.delivery-price').empty().text($(this).children()[1].innerText);
      });
      $('#paymentForm').submit(function(e){
        e.preventDefault();
        var credit=$('#cardNumber').val().slice(-4);
        $('.payment-form').addClass('d-none');
        $('.payment-details').removeClass('d-none');
        $('.edit-payment').removeClass('d-none');
        $('.credit-card-details').empty().text('ending in '+credit);
        $('.place-order-section .accordion-head').removeClass('disabled');
        $('.place-order-section .place-order-section-details').addClass('show');
      });
      $('.edit-payment').on('click',function(){

        $('.payment-form').removeClass('d-none');
        $('.payment-details').addClass('d-none'); 
        $('.edit-payment').addClass('d-none');   
        $('.place-order-section .accordion-head').addClass('disabled');
        $('.place-order-section .place-order-section-details').removeClass('show');
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

});