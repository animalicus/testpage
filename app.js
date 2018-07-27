var data={
        index:{
            daundikotil     :{namajaringan:'Daun Dikotil'       ,direct:"daundikotil"  ,deskripsi:"Daun merupakan organ yang umumnya berwarna hijau dengan fungsi utama untuk melakukan fotosintesis.Daun memiliki bagian berbentuk tipis dan lebar yang di dalamnya terdapat tulang-tulang daun. Tumbuhan dikotil biasanya memiliki tulang daun berbentuk menyirip atau menjari."},
            batangdikotil   :{namajaringan:'Batang Dikotil'     ,direct:"batangdikotil"  ,deskripsi:"Batang merupakan penopang tumbuhan dan juga tempat tumbuhnya daun, cabang, dan bunga. Batang memiliki pembuluh yang mengangkut zat hasil fotosintesis, air, dan mineral di dalamnya. Pada tanaman dikotil batang memiliki kambium."},
            akardikotil     :{namajaringan:'Akar Dikotil'       ,direct:"akardikotil"  ,deskripsi:"Akar biasanya terletak di bawah permukaan tanah. Akar memiliki fungsi untuk menyokong berdirinya suatu tumbuhan dan juga unuk menyerap air dan mineral dari tanah. Akar pada tumbuhan dikotil merupakan akar tunggang dimana akar primer dan akar sekunder dapat dengan mudah dibedakan."},
            daunmonokotil   :{namajaringan:'Daun Monokotil'     ,direct:"daunmonokotil"  ,deskripsi:"Daun merupakan organ yang umumnya berwarna hijau dengan fungsi utama untuk melakukan fotosintesis.Daun memiliki bagian berbentuk tipis dan lebar yang di dalamnya terdapat tulang-tulang daun. Tumbuhan monokotil biasanya memiliki tulang daun berbentuk melengkung atau sejajar."},
            batangmonokotil :{namajaringan:'Batang Monokotil'   ,direct:"batangmonokotil"  ,deskripsi:"Batang merupakan penopang tumbuhan dan juga tempat tumbuhnya daun, cabang, dan bunga. Batang memiliki pembuluh yang mengangkut zat hasil fotosintesis, air, dan mineral di dalamnya. Pada tanaman monokotil batang tidak memiliki kambium."},
            akarmonokotil   :{namajaringan:'Akar Monokotil'     ,direct:"akarmonokotil"  ,deskripsi:"Akar biasanya terletak di bawah permukaan tanah. Akar memiliki fungsi untuk menyokong berdirinya suatu tumbuhan dan juga unuk menyerap air dan mineral dari tanah. Akar pada tumbuhan monokotil merupakan akar serabut dimana akar primer dan akar sekunder sulit dibedakan."},
            meristem        :{namajaringan:'Jaringan Meristem'  ,direct:"meristem"  ,deskripsi:"Jaringan mesistem merupakan jaringan dengan sel-sel yang aktif membelah. Aktivitas ini menyebabkan tumbuhan bertambah tinggi dan besar. Berdasarkan asal selnya, jaringan meristem dibedakan menjadi jaringan meristem primer dan meristem sekunder. Sel-sel pada meristem primer berkembang dari sel-sel embrionik dan terletak di daerah ujung tumbuhan (ujung batang atau ujung akar) sehingga menyebabkan tumbuhan bertambah panjang. Aktivitas meristem primer menghasilkan pertumbuhan primer."},
        },
        akardikotil:{
            endodermis: {dircet:"endodermis",namajaringan:'Endodermis'  ,deskripsi:'Endodermis adalah sel-sel pipih yang mengelilingi jaringan pembuluh angkut yang bersifat kedap air. Endodermis berfungsi mengatur secara selektif air dan mineral yang diserap oleh tumbuhan.'},
            epidermis:  {dircet:"epidermis" ,namajaringan:'Epidermis'   ,deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:      {dircet:"floem"     ,namajaringan:'Floem'       ,deskripsi:'Floem pada akar tumbuhan monokotil umumnya berada disekitar xilem. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            korteks:    {dircet:"dasar"     ,namajaringan:'Korteks'     ,deskripsi:'Korteks adalah jaringan dasar pada akar yang terletak diantara epidermis dan endodermis. Korteks berperan dalam mengangkut air dan mineral dari tanah ke jaringan pembuluh secara difusi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            xilem:      {dircet:"xilem"     ,namajaringan:'Xilem'       ,deskripsi:'Xilem pada akar tumbuhan dikotil terletak di bagian tengah. xilem tersusun atas sel-sel yang mengalami penebalan. xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari tanah ke organ lainnya.'},
            letak:'150px,25px',
        },
        akarmonokotil:{
            empulur:    {direct:"dasar"     ,namajaringan:'Empulur'     ,deskripsi:'Empulur adalah jaringan dasar pada akar tumbuhan monokotil yang umumnya berada terletak di bagian tengah. Pada beberapa jenis tanaman tertentu empulur dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            endodermis: {direct:"endodermis",namajaringan:'Endodermis'  ,deskripsi:'Endodermis adalah sel-sel pipih yang mengelilingi jaringan pembuluh angkut yang bersifat kedap air. Endodermis berfungsi mengatur secara selektif air dan mineral yang diserap oleh tumbuhan.'},
            epidermis:  {direct:"epidermis" ,namajaringan:'Epidermis'   ,deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:      {direct:"floem"     ,namajaringan:'Floem'       ,deskripsi:'Floem pada akar tumbuhan monokotil umumnya berada disekitar Xilem. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            korteks:    {direct:"dasar"     ,namajaringan:'Korteks'     ,deskripsi:'Korteks adalah jaringan dasar pada akar yang terletak diantara epidermis dan endodermis. Korteks berperan dalam mengangkut air dan mineral dari tanah ke jaringan pembuluh secara difusi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            xilem:      {direct:"xilem"     ,namajaringan:'Xilem'       ,deskripsi:'Xilem pada akar tumbuhan monokotil umumnya tersusun membentuk lingkaran. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari tanah ke organ lainnya.'},
             letak:'150px,25px',
        },
        batangdikotil:{
            empulur:    {direct:"dasar"     ,namajaringan:'Empulur'                 ,deskripsi:'Empulur adalah jaringan dasar pada batang tumbuhan dikotil yang umumnya berada terletak di bagian tengah. Pada beberapa jenis tanaman tertentu empulur dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            epidermis:  {direct:"epidermis" ,namajaringan:'Epidermis'               ,deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:      {direct:"floem"     ,namajaringan:'Floem'                   ,deskripsi:'Floem pada batang tumbuhan dikotil umumnya tersusun membentuk lingkaran dan tumbuh mengarah ke korteks. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            pembuluh:   {direct:"pembuluh"  ,namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Jaringa Pembuluh Angkut'},
            kambium:    {direct:"kambium"   ,namajaringan:'Kambium'                 ,deskripsi:'Kambium adalah jaringan meristem pada batang tumbuhan dikotil yang umumnya tersusun membentuk lingkaran. Kambium berperan dalam pembentukan floem dan Xilem serta pertumbuhan sekunder tumbuhan.'},
            korteks:    {direct:"dasar"     ,namajaringan:'Korteks'                 ,deskripsi:'Korteks adalah jaringan dasar pada batang tumbuhan dikotil yang terletak diantara epidermis dan kambium. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            perisikel:  {direct:"perisikel" ,namajaringan:'Perisikel',deskripsi:'Perisikel'},
            xilem:      {direct:"xilem"     ,namajaringan:'Xilem',deskripsi:'Xilem pada batang tumbuhan dikotil umumnya tersusun membentuk lingkaran dan tumbuh mengarah ke empulur. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari akar ke organ lainnya. Selain itu Xilem juga berfungsi sebagai penguat struktur batang.'},
            letak:'150px,-50px',
        },
        batangmonokotil:{
            epidermis:  {direct:"epidermis" ,namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:      {direct:"floem"     ,namajaringan:'Floem',deskripsi:'Floem pada batang tumbuhan monokotil umumnya tersusun tersebar. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            dasar:      {direct:"dasar"     ,namajaringan:'Jaringan Dasar',deskripsi:'Jaringan dasar merupakan kumpulan sel-sel parenkim yang belum mengalami diferensiasi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            pembuluh:   {direct:"pembuluh"  ,namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Pembuluh angkut tersusun atas floem dan xilem. Pembuluh angkut berfungsi mengangkut zat makanan dari daun serta air dan mineral dari tanah.'},
            perisikel:  {direct:"perisikel" ,namajaringan:'Perisikel',deskripsi:'Perisikel'},
            xilem:      {direct:"xilem"     ,namajaringan:'Xilem',deskripsi:'Xilem pada batang tumbuhan monokotil umumnya tersusun tersebar. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari akar ke organ lainnya. Selain itu Xilem juga berfungsi sebagai penguat struktur batang.'},
            letak:'150px,25px',
        },
        daundikotil:{
            epidermisatas:  {direct:"epidermis" ,namajaringan:'Epidermis Atas',deskripsi:'Epidermis atas adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Umumnya dilapisi oleh lapisan lilin yang disebut kutikula. Epidermis atas berfungsi melindungi tumbuhan dari kerusakan dan dehidrasi. '},
            epidermisbawah: {direct:"epidermis" ,namajaringan:'Epidermis Bawah',deskripsi:'Epidermis bawah adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Dapat ditemukan sel terdiferensiasi yang disebut stomata. Epidermis bawah berfungsi melindungi tumbuhan dari kerusakan, mengatur pertukaran gas, dan transpirasi air.'},
            palisade:       {direct:"palisade"  ,namajaringan:'Jaringan Palisade',deskripsi:'Jaringan palisade adalah mesofil yang memiliki banyak plastid dan tersusun membentuk kolom. Jaringan palisade berperan dalam proses fotosintesis khusunya dalam penyerapan energi dari sinar matahari.'},
            pembuluh:       {direct:"pembuluh"  ,namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Pembuluh angkut tersusun atas floem dan xilem. Pembuluh angkut berfungsi mengangkut zat makanan dari daun serta air dan mineral dari tanah.'},
            penjaga:        {direct:"penjaga"   ,namajaringan:'Sel Penjaga', deskripsi:'Sel Penjaga'},
            spons:          {direct:"spons"     ,namajaringan:'Jaringan Spons',deskripsi:'Jaringan spons adalah mesofil yang memiliki sedikit plastid dan tersusun membentuk rongga. Jaringan spons berperan dalam proses fotosintesis khusunya dalam proses pertukaran gas.'},
        },
        daunmonokotil:{
            epidermisatas:  {direct:"epidermis" ,namajaringan:'Epidermis Atas',deskripsi:'Epidermis atas adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Umumnya dilapisi oleh lapisan lilin yang disebut kutikula. Epidermis atas berfungsi melindungi tumbuhan dari kerusakan dan dehidrasi. '},
            epidermisbawah: {direct:"epidermis" ,namajaringan:'Epidermis Bawah',deskripsi:'Epidermis bawah adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Dapat ditemukan sel terdiferensiasi yang disebut stomata. Epidermis bawah berfungsi melindungi tumbuhan dari kerusakan, mengatur pertukaran gas, dan transpirasi air.'},
            pembuluh:       {direct:"pembuluh"  ,namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Pembuluh angkut tersusun atas floem dan xilem. Pembuluh angkut berfungsi mengangkut zat makanan dari daun serta air dan mineral dari tanah.'},
            mesofil:        {direct:"mesofil"   ,namajaringan:'Mesofil',deskripsi:'Mesofil adalah jaringan yang tersusun atas sel-sel yang banyak mengandung kloroplast. Mesofil berperann dalam menghasilkan zat makanan melalui fotosintesis.Tersusun atas floem dan Xilem. Floem berfungsi mengangkut zat makanan yang dihasilkan dihasilkan daun ke organ lainnya. Sedangkan Xilem berfungsi mengangkut air dan mineral yang dari akar ke daun.'},
            penjaga:        {direct:"penjaga"   ,namajaringan:'Sel Penjaga', deskripsi:'Sel Penjaga'},
        },
};

//pull page name
var href = document.location.href;
var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
var page = lastPathSegment.substr(0, lastPathSegment.lastIndexOf('.')) || lastPathSegment;

//tooltip
$(document).mousemove(function(e){
    $("#label").css({
        left:e.pageX-35,
        top:e.pageY-70,
    });
});
$("g").mouseleave(function(){
    var tag=$(this).attr("id");
    $("#label").removeClass("on").addClass("off");
});
$("g").mouseover(function(){
    var tag=$(this).attr("id");
    $("#label").removeClass("off").addClass("on").text(data[page][tag].namajaringan);
});
//svg click function
$("g").click(function(){  
    $("g").removeClass("on").addClass("off");
    $(this).removeClass("off").addClass("on");
    var tag=$(this).attr("id");
    $("#name").text(data[page][tag].namajaringan);
    $("#desc").text(data[page][tag].deskripsi);
    $("#cont").removeClass("off").addClass("on");
});
//navi button
$("#navi").click(function(){
    $("a#navi").attr("href","index.html")
});
//continue button
$("#cont").click(function(){
    var tag=$("g.on").attr("id");
    $("a#cont").attr("href",data[page][tag].direct+".html")
});
