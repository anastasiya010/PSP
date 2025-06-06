class ProductUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getProducts() {
        return `${this.baseUrl}/tovars`;
    }

    getProductById(id) {
        return `${this.baseUrl}/tovars/${id}`;
    }

    createProduct() {
        return `${this.baseUrl}/tovars`;
    }

    removeProductById(id) {
        return `${this.baseUrl}/tovars/${id}`;
    }

    updateProductById(id) {
        return `${this.baseUrl}/tovars/${id}`;
    }
}

export const productUrls = new ProductUrls();