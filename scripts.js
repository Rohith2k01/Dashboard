// Select all items with the id 'maild1'
const mailItems = document.querySelectorAll('#maild1');

// Loop through each mail item
mailItems.forEach(item => {
    item.addEventListener('click', function() {
        // Toggle the active class on the clicked item
        this.classList.toggle('active');
        
        // Toggle the visibility of the next  element 
        const details = this.nextElementSibling;
        if (details && details.classList.contains('r')) {
            details.classList.toggle('show');
        }
    });
});
