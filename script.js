document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('nav .content');
    
    menuToggle.addEventListener('click', function() {
        navContent.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav .content a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navContent.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navContent.classList.remove('active');
        }
    });

    // Handle responsive images
    function resizeGridImages() {
        const cardImages = document.querySelectorAll('.grid-card > img');
        cardImages.forEach(img => {
            // Ensure images are responsive but maintain aspect ratio
            if (window.innerWidth < 480) {
                img.setAttribute('src', img.getAttribute('src').replace('350', '250'));
            } else {
                img.setAttribute('src', img.getAttribute('src').replace('250', '350'));
            }
        });
    }

    // Call on load and resize
    resizeGridImages();
    window.addEventListener('resize', resizeGridImages);
});
