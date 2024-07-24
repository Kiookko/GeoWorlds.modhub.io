function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

function installMod(fileName) {
    var link = document.createElement('a');
    link.href = 'mods/' + fileName; // Предполагаем, что файлы модов находятся в папке "mods"
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Началась установка мода: ' + fileName);
}
