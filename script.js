// Select all "See Calories" figures
const imageItems = document.querySelectorAll('.image-item');

// Loop through each image item to add event listeners
imageItems.forEach(item => {
  item.addEventListener('click', function() {
    // Find the sibling element with the class "calories-info"
    const caloriesInfo = this.querySelector('.calories-info');
    
    // Toggle the visibility of the calories info
    if (caloriesInfo.style.display === 'block') {
      caloriesInfo.style.display = 'none';
    } else {
      caloriesInfo.style.display = 'block';
    }
  });
});

// Optional: For better UX, close any open calorie info when clicking elsewhere
document.addEventListener('click', function(event) {
  if (!event.target.closest('.image-item')) {
    const allCaloriesInfo = document.querySelectorAll('.calories-info');
    allCaloriesInfo.forEach(info => {
      info.style.display = 'none';
    });
  }
});
