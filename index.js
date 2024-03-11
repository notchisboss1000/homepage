document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.typewriter pre');
    const text = textElement.innerText;
    textElement.innerText = '';

    let index = 0;

    function type() {
        textElement.innerText += text.charAt(index);
        index++;

        if (index < text.length) {
            setTimeout(type, 50); // Adjust the typing speed here (in milliseconds)
        }
    }

    type();
});
