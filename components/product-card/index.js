export function createProductCard(product, onDelete, onDetail) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <button class="delete-btn">×</button>
        <img src="${product.image}" class="product-image" alt="${product.name}">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">${product.price.toLocaleString()} ₽</div>
        <button class="detail-btn">Подробнее</button>
    `;
    
    // Добавляем обработчики
    card.querySelector('.delete-btn').addEventListener('click', () => onDelete(product.id));
    card.querySelector('.detail-btn').addEventListener('click', () => onDetail(product.id));
    
    return card;
}