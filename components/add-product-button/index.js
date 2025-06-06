export class AddProductButtonComponent {
    constructor(parent, onClick) {
        this.parent = parent;
        this.onClick = onClick;
    }

    getHTML() {
        return `
            <button id="add-product-btn" class="add-btn" style="background: #ff8533; color: white; border: none; padding: 12px 25px; 
            border-radius: 20px; cursor: pointer; margin: 20px 30px; font-size: 14px; display: block; width: fit-content;">
                + Добавить товар
            </button>
        `;
    }

    addListeners() {
        document.getElementById('add-product-btn')
            .addEventListener('click', this.onClick);
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners();
    }
}