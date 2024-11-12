// Select all images inside .image-item
const imageItems = document.querySelectorAll('.image-item');

// Loop through each image item
imageItems.forEach(item => {
    const img = item.querySelector('img');
    const caloriesInfo = item.querySelector('.calories-info');
    
    // Add a click event to each image
    img.addEventListener('click', () => {
        // Toggle the 'active' class which controls the sliding effect
        item.classList.toggle('active');  // 'item' is the .image-item, not just the image
    });
});
