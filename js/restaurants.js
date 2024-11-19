document.addEventListener('DOMContentLoaded', () => {
    const orderBySelect = document.getElementById('orderBy');
    const restaurantSection = document.querySelector('.restaurants');

    let restaurants = Array.from(document.querySelectorAll('.individual')).map(restaurant => {
        const name = restaurant.querySelector('.restaurant-name').textContent.trim();
        const rating = parseFloat(restaurant.querySelector('.rating > p').textContent.trim());
        const popularity = Math.random(); 
        return { element: restaurant, name, rating, popularity };
    });

    orderBySelect.addEventListener('change', () => {
        const orderBy = orderBySelect.value;

        restaurants.sort((a, b) => {
            if (orderBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (orderBy === 'rating') {
                return b.rating - a.rating; 
            } 
        });

        restaurantSection.innerHTML = '';

        restaurants.forEach(item => restaurantSection.appendChild(item.element));
    });
});
