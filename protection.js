// This example code should be obfuscated using an external tool

(function() {
    const originalLog = console.log;
    console.log = function(message) {
        if (typeof message === 'string' && message.indexOf('debug') !== -1) {
            return;
        }
        originalLog.apply(console, arguments);
    };
    // Your main code goes here
    function installMod(fileName) {
        var link = document.createElement('a');
        link.href = 'mods/' + fileName;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert('Началась установка мода: ' + fileName);
    }
})();
