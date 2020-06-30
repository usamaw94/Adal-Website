$(document).ready(function(){
    $("#continueButton").click(function(){
        var email = $("#email").val();

        if(email == ""){
            $("#alertMsg").slideDown("slow");
        }else {
            $("#prev-content").slideUp("slow");
            $("#form-email").val(email);
            $("#next-content").slideDown("slow");
        }
    });

    $('#loginRegister').on('hidden.bs.modal', function () {
        $("#prev-content").show();
        $("#email").val("");
        $("#alertMsg").hide();
        $("#next-content").hide();
    });
});