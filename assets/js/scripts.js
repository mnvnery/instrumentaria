---
---

$('#menu-btn').on('click', function () {
    $('#navbar-default').toggleClass('hidden');
});

$('#close-btn').on('click', function () {
    $('#navbar-default').toggleClass('hidden');
});

$(document).ready(function(){
        $('#menu-btn').on('click', function(){
        $('#navbar-default').removeClass('hidden');
        });
    // close modal on clicking close button
    $('#close-btn').on('click',function(){
        $('#navbar-default').addClass('hidden');
    });
    // close modal on click outside at anywhere
    $(document).on('click',function(e){
        if(!(($(e.target).closest("#navbar-default").length > 0 ) || ($(e.target).closest("#menu-btn").length > 0))){
        $("#navbar-default").addClass('hidden');
        }
    });
});

const bgImage = new Array ();
{% for image in site.data.bg-images.imagens_background %}
    bgImage.push("{{ image }}");
{% endfor %}
const size = bgImage.length
const x = Math.floor(size*Math.random())

$(document).ready(function(){
    $('#bgImage').attr('src', "{{site.baseurl}}/" + bgImage[x]);
});  

var audio = document.getElementById('pageAudio');
var silencio = document.querySelector('.silencio');
var ouvir = document.querySelector('.ouvir');


document.getElementById("audioPlay").addEventListener("click", function(){
    audio.play();
    silencio.classList.remove('underline');
    ouvir.classList.add('underline');
});

document.getElementById("audioPause").addEventListener("click", function(){
    audio.pause();
    ouvir.classList.remove('underline');
    silencio.classList.add('underline');
});