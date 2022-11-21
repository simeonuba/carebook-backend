
$(document).ready(function () {
    $("form").submit(function (event) {
    
      var formData = {
        fullname: $("#fullname").val(),
        password: $("#password").val(),
        email: $("#email").val(),
       
       
      };
      
      $.ajax({
        type: "POST",
        url: "/register",
        data: formData,
        dataType: "json",
        success: function (result) {
          if (result.error === true) {
            $("#form").hide(1000);

            $("#error").show();
            $('#error').html(`
            <center>
                <div class="circle-bar" >
                    <div class="fa fa-times"></div>
                </div>
             </center>
           
            <h3 style="">${ result.message}</h3>`);
            setTimeout(()=>{
              window.location.href = '/register';
            },2000)
            //console.log(result.data)
          } else {
            $("#form").hide(1000);
            $("#success").show();
            setTimeout(()=>{
              window.location.href = '/login';
            },3000)
          }
  
  
        },
        error: function (error) {
         
          $('#target').html('<div class="alert alert-danger">Error Submitting the form</div>');
  
  
  
        }
      });
      event.preventDefault();
    });
  });
  
  