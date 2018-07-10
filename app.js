    //pull data
    $.get("index.svg",function(x){
        $("#image").append(x);
    },"html");
    $("#image svg").css("background-image", "url(png/batangdikotil.png");

$(document).ready(function(){
    var data={
        decoy:{key:"decoy"}
    };
    
    

    //mouse function
    $(document).mousemove(function(e){
        $("#label").css({
            left:e.pageX-20,
            top:e.pageY-70,
        });
    });
    $("#image svg").mouseover(function(){
        $(this).css('transform','scale(2)translate(150px,-50px)');
    });
    $("#image svg").mouseleave(function(){
        $(this).css('transform', '');
    });
    $("g").mouseleave(function(){
        var tag=$(this).attr("id");
        $("#label").removeClass("on").addClass("off").text(data[iden][tag].name);
    });
    $("g").mouseover(function(){
        var tag=$(this).attr("id");
        $("#label").removeClass("off").addClass("on").text(data[iden][tag].name);
    });
    $("g").click(function(){  
        $("g").removeClass("on").addClass("off");
        $(this).removeClass("off").addClass("on");
        
        var tag=$(this).attr("id");
        $("#name").text(data[output][tag].name);
        $("#desc").text(data[output][tag].desc);
    });  
});