import { ProductCardComponent } from '../../components/product-card/index.js';
import { FilterComponent } from '../../components/filter/index.js';
import { AddProductButtonComponent } from '../../components/add-product-button/index.js';
import { ProductPage } from '../product/index.js';
import { productUrls } from '../../modules/productsUrls.js';
import { ajax } from '../../modules/ajax.js';
import { ProductEditPage } from '../product-edit/index.js';

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.products = [];
        this.getData();
    }

    getHTML() {
        return `
            <div id="main-page" class="container-fluid">
                <header class="header">
                    <button class="home-btn">Домой</button>
                </header>
                <div id="add-product-container"></div>
                <div class="row">
                    <div id="filters-container" class="col-md-3 p-3 bg-light"></div>
                    <div class="col-md-9">
                        <div id="products-container" class="d-flex flex-wrap gap-3 p-3"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    handleFilterChange(filters) {
        const filtered = this.products.filter(product => {
            const priceMatch = product.price <= filters.maxPrice;
            const categoryMatch = filters.checkedCategories.length === 0 || 
                                 filters.checkedCategories.includes(product.category);
            return priceMatch && categoryMatch;
        });
        this.renderProducts(filtered);
    }

    handleAddProduct() {
        if (this.products.length === 0) return;
        ajax.post(productUrls.createProduct(), newItem)
            .then((data) => {
                this.products.push(data);
                this.renderProducts(this.products);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleDeleteProduct(id) {
        console.log("DEL", id)
        ajax.delete(productUrls.removeProductById(id))
            .then((data) => {
                this.products = this.products.filter(item => item.id !== id);
                this.renderProducts(this.products);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    showProductDetail(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) return;
        
        const productPage = new ProductPage(this.parent, product);
        productPage.render();
    }

    showEditProduct(id) {
        const editPage = new ProductEditPage(this.parent, id);
        editPage.render();
    }

    showAddProduct() {
        const editPage = new ProductEditPage(this.parent);
        editPage.render();
    }

    renderProducts(products) {
        const container = document.getElementById('products-container');
        container.innerHTML = '';
        
        products.forEach(product => {
            console.log(product.id)
            const card = new ProductCardComponent(
                container,
                () => this.handleDeleteProduct(product.id),
                () => this.showProductDetail(product.id),
                () => this.showEditProduct(product.id) // Новая функция
            );
            card.render(product);
        });
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        const filters = new FilterComponent(
            document.getElementById('filters-container'),
            this.handleFilterChange.bind(this)
        );
        filters.render();

        const addButton = new AddProductButtonComponent(
            document.getElementById('add-product-container'),
            this.showAddProduct.bind(this)
        );
        addButton.render();
console.log(this.products);
        this.renderProducts(this.products);
    }

    getData() {
    return ajax.get(productUrls.getProducts())
        .then((data) => {
            this.products = data;
            this.renderProducts(data);
            return data;
        })
        .catch((error) => {
            console.error('Error in getData:', error);
            throw error;
        });
}
}
