document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.typewriter pre');
    const text = "// Hey! I'm Notchisboss (or Cursed Pixel)!\nThis is just a simple little home page with some links.";
    textElement.innerText = '';

    function type() {
        textElement.innerHTML += text.charAt(0);
        text = text.substring(1);

        if (text.length > 0) {
            setTimeout(type, 50); // Adjust the typing speed here (in milliseconds)
        }
    }

    type();
});
