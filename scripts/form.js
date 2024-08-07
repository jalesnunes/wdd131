document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productNameSelect = document.getElementById('productName');
    const ratingOptions = document.querySelectorAll('.rating-options input[type="radio"]');
    const ratingValueDisplay = document.getElementById('ratingvalue');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    ratingOptions.forEach(radio => {
        radio.addEventListener('change', function() {
            ratingValueDisplay.textContent = this.value;
        });
    });

    // Update the review count on the review.html page
    if (window.location.pathname.endsWith('review.html')) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        
        const reviewCounter = document.createElement('p');
        reviewCounter.textContent = `You have submitted ${reviewCount} reviews.`;
        document.body.appendChild(reviewCounter);
    }
});
