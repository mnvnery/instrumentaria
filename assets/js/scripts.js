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

console.log(bgImage)

$(document).ready(function(){
    $('#bgImage').attr('src', "{{site.baseurl}}/" + bgImage[x]);
});  