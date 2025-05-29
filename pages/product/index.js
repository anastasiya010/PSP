import { createBackButton } from '../../components/back-button/index.js';

export function renderProductDetail(product) {
    const detailContainer = document.getElementById('productDetail');
    detailContainer.innerHTML = '';
    
    const backButton = createBackButton();
    detailContainer.appendChild(backButton);
    
    const content = document.createElement('div');
    content.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" style="max-width: 400px; margin: 20px 0;">
        <div class="product-price" style="font-size: 24px;">${product.price.toLocaleString()} ₽</div>
        <p style="margin: 20px 0; line-height: 1.6;">${product.description}</p>
    `;
    detailContainer.appendChild(content);
    
    return backButton;
}