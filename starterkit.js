$(document).ready(function() {

    $("#orderedlist").addClass("red");
    $("#orderedlist li").addClass("letras");


    ultimo = $("#orderedlist li:last");
    ultimo.hover(function(){
    	ultimo.addClass("green");
    },function(){
    	ultimo.removeClass("green");
    });

});