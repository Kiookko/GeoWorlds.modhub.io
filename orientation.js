window.addEventListener('orientationchange', function() {
    if (window.orientation === 0) {
        console.log('Portrait mode');
        // Add code to execute when in portrait mode
    } else {
        console.log('Landscape mode');
        // Add code to execute when in landscape mode
    }
});

window.addEventListener('resize', function() {
    if (window.innerHeight > window.innerWidth) {
        console.log('Portrait mode');
        // Add code to execute when in portrait mode
    } else {
        console.log('Landscape mode');
        // Add code to execute when in landscape mode
    }
});
