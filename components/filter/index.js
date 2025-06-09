export class FilterComponent {
    constructor(parent, onChange) {
        this.parent = parent;
        this.onChange = onChange;
        this.categories = ['одежда', 'обувь', 'канцелярия'];
    }

    getHTML() {
        return `
            <aside class="filters">
                <h3 class="filters-title">Фильтры</h3>
                <div class="filter-group">
                    <label class="filter-label">Цена до:</label>
                    <input type="range" id="price-filter" class="price-slider" min="0" max="100000" value="100000">
                    <span id="price-value" class="price-value">100 000 ₽</span>
                    <br><h3 class="filters-title">Выберите категорию товара:</h3></br>
                    <div class="category-filter">
                        <br><label class="checkbox-container">
                        <input type="checkbox" value="одежда" checked> Одежда
                        <span class="checkmark"></span>
                        </label></br>
                        <br><label class="checkbox-container">
                        <input type="checkbox" value="обувь" checked> Обувь
                        <span class="checkmark"></span>
                        <br></label></br>
                        <label class="checkbox-container">
                        <input type="checkbox" value="канцелярия" checked> Канцелярия
                        <span class="checkmark"></span>
                        </label></br>
                    </div>
                </div>
            </aside>
        `;
    }

    getFilters() {
        const maxPrice = parseInt(document.getElementById('price-filter').value);
        const checkedCategories = Array.from(
            document.querySelectorAll('.form-check-input:checked')
        ).map(checkbox => checkbox.value);
        
        return { maxPrice, checkedCategories };
    }

    addListeners() {
        document.getElementById('price-filter').addEventListener('input', (e) => {
            document.getElementById('price-value').textContent = `${e.target.value.toLocaleString()} ₽`;
            this.onChange(this.getFilters());
        });
        
        document.querySelectorAll('.form-check-input').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.onChange(this.getFilters()));
        });
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners();
    }
}