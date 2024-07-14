document.addEventListener('DOMContentLoaded', function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElement = document.getElementById('reviewCount');
    reviewCountElement.textContent = `You have submitted ${reviewCount} reviews.`;
});
