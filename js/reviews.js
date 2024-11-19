document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.querySelector('.review-form');
    const reviewList = document.querySelector('.review-list');

    const createReviewElement = (restaurantName, rating, reviewText) => {
        const review = document.createElement('div');
        review.classList.add('review');

        review.innerHTML = `
            <div class="review-header">
                <h3>${restaurantName}</h3>
                <div class="rating">
                    ${Array.from({ length: 5 })
                        .map((_, i) => i < rating ? `<i class='bx bxs-star'></i>` : `<i class='bx bx-star'></i>`)
                        .join('')}
                    <p>${rating}.0</p>
                </div>
            </div>
            <p class="review-text">${reviewText}</p>
            <p class="review-author">- Reviewed by You</p>
        `;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `<img src="../assets/red.png" alt="Delete Review" title="Delete Review" />`;

        deleteButton.addEventListener('click', () => {
            review.remove(); 
        });

        review.appendChild(deleteButton);

        return review;
    };

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const restaurantName = document.getElementById('restaurant-name').value.trim();
        const rating = parseInt(document.getElementById('rating').value);
        const reviewText = document.getElementById('review-text').value.trim();

        if (!restaurantName || !rating || !reviewText) {
            alert('Please fill out all fields.');
            return;
        }

        const newReview = createReviewElement(restaurantName, rating, reviewText);
        reviewList.appendChild(newReview);

        reviewForm.reset();
    });
});
