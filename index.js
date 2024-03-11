const textElement = document.getElementById('typing-text');
const textToType = 'Welcome to Real-time Typing!';

let index = 0;

function typeText() {
    textElement.textContent = textToType.slice(0, index);
    index++;

    if (index > textToType.length) {
        index = 0;
    }
}

setInterval(typeText, 100);
