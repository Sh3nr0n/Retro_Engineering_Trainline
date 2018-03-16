$(document).ready(function () {
    $(".userInput").on("click", function (){
        $('#mainModal').modal('show');
        nom = $(this).val();
        // console.log("nom hotel : ",nom);
        $("#hotel").text(nom);
    });
});