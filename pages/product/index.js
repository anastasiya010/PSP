import { BackButtonComponent } from '../../components/back-button/index.js';
import { MainPage } from '../main/index.js';

export class ProductPage {
    constructor(parent, product) {
        this.parent = parent;
        this.product = product;
    }

    getHTML() {
        return `
            <div id="product-page" class="container">
                <div id="back-button-container" class="mb-3"></div>
                <div class="card">
                    <img src="${this.product.image}" class="card-img-top" style="max-width: 400px;">
                    <div class="card-body">
                        <h2 class="card-title">${this.product.name}</h2>
                        <div class="product-price">${this.product.price.toLocaleString()} ₽</div>
                        <p class="card-text">${this.product.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    goBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        const backButton = new BackButtonComponent(
            document.getElementById('back-button-container'),
            this.goBack.bind(this)
        );
        backButton.render();
    }
}