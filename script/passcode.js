$(document).ready(function(){
    //displaying modal on load
    //$(".password-modal").addClass("display-flex")
    $("#pass").focus()
    $(".password-modal").on("contextmenu",function(){
       return false;
    }); 
    $("#search-box").prop('disabled', true);
    $("body").css("overflow","hidden")

    //hiding modal on passcode match
    $(".password-modal #pass").on("keyup", function() {
        if( $("#pass").val() === "9090" ) {
            $(".password-modal").removeClass("display-flex")
            $("body").css("overflow","scroll")
            $("#search-box").prop('disabled', false);
            $("#search-box").focus()
        }else{
            if($("#pass").val().length === 4){  
                $(".password-modal #pass").addClass("shaky-shaky")
            }
            if( $("#pass").val() === "" ){
                $(".password-modal #pass").removeClass("shaky-shaky")
            }
        }
    })
})
