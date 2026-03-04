const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;

        products.forEach(product => {
            if (type === 'all' || product.dataset.type === type) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

document.querySelectorAll('.buy-item').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Товар додано до кошика');
    });
});