export class ProductCardComponent {
    constructor(parent, onDelete, onDetail, onEdit) {
        this.parent = parent;
        this.onDelete = onDelete;
        this.onDetail = onDetail;
        this.onEdit = onEdit;
        this.cardElement = null; // Добавляем свойство для хранения DOM-элемента карточки
    }

    getHTML(data) {
        return `
            <div class="card" style="width: 300px;">
                <button class="delete-btn btn btn-danger position-absolute top-0 end-0 m-1">×</button>
                <img src="${data.image}" class="card-img-top" alt="${data.name}">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <div class="product-price">${data.price.toLocaleString()} ₽</div>
                    <div class="d-flex gap-2 mt-2">
                        <button class="detail-btn btn btn-primary">Подробнее</button>
                        <button class="edit-btn btn btn-secondary">Редактировать</button>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners() {
        // Ищем элементы внутри конкретной карточки (this.cardElement)
        this.cardElement.querySelector('.delete-btn')
            .addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.onDelete();
            });
            
        this.cardElement.querySelector('.detail-btn')
            .addEventListener('click', (e) => {
                e.preventDefault();
                this.onDetail();
            });
            
        this.cardElement.querySelector('.edit-btn')
            .addEventListener('click', (e) => {
                e.preventDefault();
                this.onEdit();
            });
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        
        // Сохраняем ссылку на последний добавленный элемент
        this.cardElement = this.parent.lastElementChild;
        
        this.addListeners();
    }
}