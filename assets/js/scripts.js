---
---

$('#menu-btn').on('click', function () {
    $('#menu-btn').toggleClass('ri-menu-line');
    $('#menu-btn').toggleClass('ri-close-fill');
    $('#navbar-default').toggleClass('hidden');
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