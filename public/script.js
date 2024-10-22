 
    // ScrollReveal animations
    ScrollReveal().reveal('.hero-content', { 
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });

    ScrollReveal().reveal('.menu h2, .about h2, .contact h2', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        duration: 1000
    });

    ScrollReveal().reveal('.menu-categories, .menu-items, .about-content, .contact-info', {
        delay: 400,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });

    // Menu category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelector('.menu-items');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            filterMenuItems(category);
        });
    });

    function filterMenuItems(category) {
        // This is where you'd implement the filtering logic
        // For now, we'll just log the category
        console.log(`Filtering menu items for category: ${category}`);
    }

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', () => {
        // This is where you'd implement the language switching logic
        console.log('Switching language');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
