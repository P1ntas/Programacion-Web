document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[name="search"]');
    const searchButton = document.querySelector('.search-bar button');

    const restaurants = [
        { name: 'Boa Bao', url: './pages/rest.html' },
        { name: 'Sushi Haven', url: './pages/sushihaven.html' },
        { name: 'Pasta Palace', url: './pages/pastapalace.html' },
        { name: 'Taco Fiesta', url: './pages/tacofiesta.html' },
        { name: 'Burger Barn', url: './pages/burgerbarn.html' },
        { name: 'Pizza Paradise', url: './pages/pizzaparadise.html' },
    ];

    const handleSearch = () => {
        const query = searchInput.value.trim().toLowerCase();

        const restaurant = restaurants.find(r => r.name.toLowerCase().includes(query));

        if (restaurant) {
            window.location.href = restaurant.url;
        } else {
            window.location.href = '../pages/nores.html';
        }
    };

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleSearch();
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });
});
