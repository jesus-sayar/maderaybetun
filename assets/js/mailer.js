$(document).ready(function(){

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
  // Setup the form to watch for the submit event
  $('#contact_form').submit(function(e){
    e.preventDefault();

    // Get data from form
    var form_data = { 
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    }

    $.ajax({
      url: 'http://getsimpleform.com/messages/ajax?form_api_token=366cae538564392ea30f33919d46f563',
      data: form_data,
      error: function() {
        toastr["error"]("Error", "El email no ha sido enviado!")
      },
      success: function(data) {
        toastr["success"]("Email enviado!")
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      },
      dataType: 'jsonp',
      type: 'POST'
    });
  });
  
});