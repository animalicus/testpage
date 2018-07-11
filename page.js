//pull name
$("#title").text(data.index[page].namajaringan);
//pull background
$("#image svg").css("background-image", "url(png/"+page+".png");
//zoom image
$("#image svg").mouseover(function(){
    $(this).css('transform','scale(2)translate('+data[page].letak+')');
});
$("#image svg").mouseleave(function(){
    $(this).css('transform', '');
});