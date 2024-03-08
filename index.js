// Add JavaScript function to handle image error
function handleImageError(image) {
    image.onerror = '';
    image.src = ''; // Clear the source to prevent infinite loop
    image.parentElement.classList.add('error');
}
