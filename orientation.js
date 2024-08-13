function adjustLayout() { const image = document.getElementById("responsiveImage");if (window.innerHeight > window.innerWidth) {
    console.log('Portrait mode');
    image.style.width = "auto";
    image.style.height = "100vh";
} else {
    console.log('Landscape mode');
    image.style.width = "100vw";
    image.style.height = "auto";
}}window.addEventListener('orientationchange', adjustLayout); window.addEventListener('resize', adjustLayout);// Initial call to set the correct layout document.addEventListener("DOMContentLoaded", adjustLayout);
