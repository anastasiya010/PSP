import { createProductCard } from '../../components/product-card/index.js';


export function renderProducts(productsArray, onDelete, onDetail) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsArray.forEach(product => {
        const card = createProductCard(product, onDelete, onDetail);
        container.appendChild(card);
    });
}

export function initEventListeners(handlers) {
    document.getElementById('priceFilter').addEventListener('input', handlers.handleFilterChange);
    
    document.querySelectorAll('.category-filter input').forEach(checkbox => {
        checkbox.addEventListener('change', handlers.handleFilterChange);
    });
    
    document.querySelector('.add-btn').addEventListener('click', handlers.handleAddProduct);
}

export function getFilters() {
    const maxPrice = parseInt(document.getElementById('priceFilter').value);
    const checkedCategories = Array.from(
        document.querySelectorAll('.category-filter input:checked')
    ).map(checkbox => checkbox.value);
    
    return { maxPrice, checkedCategories };
}

export function updatePriceValue(value) {
    document.getElementById('priceValue').textContent = `${value.toLocaleString()} ₽`;
}