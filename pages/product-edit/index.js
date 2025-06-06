import { BackButtonComponent } from '../../components/back-button/index.js';
import { ajax } from '../../modules/ajax.js';
import { productUrls } from '../../modules/productsUrls.js';
import { MainPage } from '../main/index.js';

export class ProductEditPage {
    constructor(parent, productId = null) {
        this.parent = parent;
        this.productId = productId;
        this.product = null;
        this.isEditMode = !!productId;
    }

    getHTML() {
        const title = this.isEditMode ? 'Редактирование товара' : 'Добавление товара';
        const btnText = this.isEditMode ? 'Сохранить' : 'Добавить';
        
        return `
            <div id="product-edit-page" class="container">
                <div id="back-button-container" class="mb-3"></div>
                <h2>${title}</h2>
                <form id="product-form" class="mt-4">
                    <div class="mb-3">
                        <label for="name" class="form-label">Название</label>
                        <input type="text" class="form-control" id="name" required 
                               value="${this.product?.name || ''}">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Цена</label>
                        <input type="number" class="form-control" id="price" required 
                               value="${this.product?.price || ''}">
                    </div>
                    <div class="mb-3">
                        <label for="category" class="form-label">Категория</label>
                        <select class="form-select" id="category" required>
                            <option value="одежда" ${this.product?.category === 'одежда' ? 'selected' : ''}>Одежда</option>
                            <option value="обувь" ${this.product?.category === 'обувь' ? 'selected' : ''}>Обувь</option>
                            <option value="канцелярия" ${this.product?.category === 'канцелярия' ? 'selected' : ''}>Канцелярия</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Описание</label>
                        <textarea class="form-control" id="description" rows="3">${this.product?.description || ''}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Ссылка на изображение</label>
                        <input type="url" class="form-control" id="image" 
                               value="${this.product?.image || ''}">
                    </div>
                    <button type="submit" class="edit-btn">${btnText}</button>
                </form>
            </div>
        `;
    }

    async getProductData() {
        if (this.isEditMode && !this.product) {
            try {
                this.product = await ajax.get(productUrls.getProductById(this.productId));
                this.render();
            } catch (error) {
                console.error('Ошибка загрузки товара:', error);
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            price: parseInt(document.getElementById('price').value),
            category: document.getElementById('category').value,
            description: document.getElementById('description').value,
            image: document.getElementById('image').value
        };

        if (this.isEditMode) {
            this.updateProduct(formData);
        } else {
            this.createProduct(formData);
        }
    }

    createProduct(data) {
        ajax.post(productUrls.createProduct(), data)
            .then((data) => {
                alert('Товар успешно добавлен!');
                this.goBack();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateProduct(data) {
        ajax.patch(productUrls.updateProductById(this.productId), data)
            .then((data) => {
                alert('Товар успешно обновлен!');
                this.goBack();
            })
            .catch((error) => {
                console.error(error);
            });
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

        document.getElementById('product-form')
            .addEventListener('submit', this.handleSubmit.bind(this));

        if (this.isEditMode && !this.product) {
            this.getProductData();
        }
    }
}