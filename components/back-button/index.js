export class BackButtonComponent {
    constructor(parent, onClick) {
        this.parent = parent;
        this.onClick = onClick;
    }

    getHTML() {
        return `
            <button id="back-button" class="btn btn-primary" style="background: #666; color: white; padding: 10px 25px;
            border-radius: 20px; border: none; cursor: pointer; margin-bottom: 20px;">
                ← Назад
            </button>
        `;
    }

    addListeners() {
        document.getElementById('back-button')
            .addEventListener('click', this.onClick);
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners();
    }
}