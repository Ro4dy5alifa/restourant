document.addEventListener("DOMContentLoaded", function() {
    // Main Menu Navigation
    const menuItems = document.querySelectorAll('.menu-item');
    let currentMenuIndex = 0;

    function showMenuItem(index) {
        menuItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentMenuIndex = (currentMenuIndex + 1) % menuItems.length;
        showMenuItem(currentMenuIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentMenuIndex = (currentMenuIndex - 1 + menuItems.length) % menuItems.length;
        showMenuItem(currentMenuIndex);
    });

    // Initialize the first menu item
    showMenuItem(currentMenuIndex);

    // Detailed Sections Navigation
    const detailedSections = document.querySelectorAll('.detailed-sections .section-row');

    detailedSections.forEach(row => {
        const foodSections = row.querySelectorAll('.food-section');

        foodSections.forEach(section => {
            const articles = section.querySelectorAll('.restaurant');
            const prevBtn = section.querySelector('.prev-btn');
            const nextBtn = section.querySelector('.next-btn');
            let currentIndex = 0;

            function showArticle(index) {
                articles.forEach((article, i) => {
                    article.style.display = (i === index) ? 'flex' : 'none';
                });
            }

            // Initialize the first article
            showArticle(currentIndex);

            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + articles.length) % articles.length;
                showArticle(currentIndex);
            });

            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % articles.length;
                showArticle(currentIndex);
            });
        });
    });
});
