(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class g{constructor(t,e,r,s){this.parent=t,this.onDelete=e,this.onDetail=r,this.onEdit=s,this.cardElement=null}getHTML(t){return`
            <div class="card" style="width: 300px;">
                <button class="delete-btn btn btn-danger position-absolute top-0 end-0 m-1">×</button>
                <img src="${t.image}" class="card-img-top" alt="${t.name}">
                <div class="card-body">
                    <h5 class="card-title">${t.name}</h5>
                    <div class="product-price">${t.price.toLocaleString()} ₽</div>
                    <div class="d-flex gap-2 mt-2">
                        <button class="detail-btn btn btn-primary">Подробнее</button>
                        <button class="edit-btn btn btn-secondary">Редактировать</button>
                    </div>
                </div>
            </div>
        `}addListeners(){this.cardElement.querySelector(".delete-btn").addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),this.onDelete()}),this.cardElement.querySelector(".detail-btn").addEventListener("click",t=>{t.preventDefault(),this.onDetail()}),this.cardElement.querySelector(".edit-btn").addEventListener("click",t=>{t.preventDefault(),this.onEdit()})}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e),this.cardElement=this.parent.lastElementChild,this.addListeners()}}class b{constructor(t,e){this.parent=t,this.onChange=e,this.categories=["одежда","обувь","канцелярия"]}getHTML(){return`
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
        `}getFilters(){const t=parseInt(document.getElementById("price-filter").value),e=Array.from(document.querySelectorAll(".form-check-input:checked")).map(r=>r.value);return{maxPrice:t,checkedCategories:e}}addListeners(){document.getElementById("price-filter").addEventListener("input",t=>{document.getElementById("price-value").textContent=`${t.target.value.toLocaleString()} ₽`,this.onChange(this.getFilters())}),document.querySelectorAll(".form-check-input").forEach(t=>{t.addEventListener("change",()=>this.onChange(this.getFilters()))})}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.addListeners()}}class f{constructor(t,e){this.parent=t,this.onClick=e}getHTML(){return`
            <button id="add-product-btn" class="add-btn" style="background: #ff8533; color: white; border: none; padding: 12px 25px; 
            border-radius: 20px; cursor: pointer; margin: 20px 30px; font-size: 14px; display: block; width: fit-content;">
                + Добавить товар
            </button>
        `}addListeners(){document.getElementById("add-product-btn").addEventListener("click",this.onClick)}render(){this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.addListeners()}}class m{constructor(t,e){this.parent=t,this.onClick=e}getHTML(){return`
            <button id="back-button" class="btn btn-primary" style="background: #666; color: white; padding: 10px 25px;
            border-radius: 20px; border: none; cursor: pointer; margin-bottom: 20px;">
                ← Назад
            </button>
        `}addListeners(){document.getElementById("back-button").addEventListener("click",this.onClick)}render(){this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.addListeners()}}class v{constructor(t,e){this.parent=t,this.product=e}getHTML(){return`
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
        `}goBack(){new d(this.parent).render()}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new m(document.getElementById("back-button-container"),this.goBack.bind(this)).render()}}class y{constructor(){this.baseUrl="http://localhost:3000"}getProducts(){return`${this.baseUrl}/tovars`}getProductById(t){return`${this.baseUrl}/tovars/${t}`}createProduct(){return`${this.baseUrl}/tovars`}removeProductById(t){return`${this.baseUrl}/tovars/${t}`}updateProductById(t){return`${this.baseUrl}/tovars/${t}`}}const c=new y;class P{async get(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}async post(t,e){try{return(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}catch(r){console.error(r)}}async patch(t,e){try{const r=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return}catch(r){console.log(r)}}async delete(t){const e=await fetch(t,{method:"DELETE"});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`)}_handleResponse(t,e){try{const r=t.responseText?JSON.parse(t.responseText):null;e(r,t.status)}catch(r){console.error("Ошибка парсинга JSON:",r),e(null,t.status)}}}const a=new P;class p{constructor(t,e=null){this.parent=t,this.productId=e,this.product=null,this.isEditMode=!!e}getHTML(){var r,s,n,i,l,u,h;const t=this.isEditMode?"Редактирование товара":"Добавление товара",e=this.isEditMode?"Сохранить":"Добавить";return`
            <div id="product-edit-page" class="container">
                <div id="back-button-container" class="mb-3"></div>
                <h2>${t}</h2>
                <form id="product-form" class="mt-4">
                    <div class="mb-3">
                        <label for="name" class="form-label">Название</label>
                        <input type="text" class="form-control" id="name" required 
                               value="${((r=this.product)==null?void 0:r.name)||""}">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Цена</label>
                        <input type="number" class="form-control" id="price" required 
                               value="${((s=this.product)==null?void 0:s.price)||""}">
                    </div>
                    <div class="mb-3">
                        <label for="category" class="form-label">Категория</label>
                        <select class="form-select" id="category" required>
                            <option value="одежда" ${((n=this.product)==null?void 0:n.category)==="одежда"?"selected":""}>Одежда</option>
                            <option value="обувь" ${((i=this.product)==null?void 0:i.category)==="обувь"?"selected":""}>Обувь</option>
                            <option value="канцелярия" ${((l=this.product)==null?void 0:l.category)==="канцелярия"?"selected":""}>Канцелярия</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Описание</label>
                        <textarea class="form-control" id="description" rows="3">${((u=this.product)==null?void 0:u.description)||""}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Ссылка на изображение</label>
                        <input type="url" class="form-control" id="image" 
                               value="${((h=this.product)==null?void 0:h.image)||""}">
                    </div>
                    <button type="submit" class="edit-btn">${e}</button>
                </form>
            </div>
        `}async getProductData(){if(this.isEditMode&&!this.product)try{this.product=await a.get(c.getProductById(this.productId)),this.render()}catch(t){console.error("Ошибка загрузки товара:",t)}}handleSubmit(t){t.preventDefault();const e={name:document.getElementById("name").value,price:parseInt(document.getElementById("price").value),category:document.getElementById("category").value,description:document.getElementById("description").value,image:document.getElementById("image").value};this.isEditMode?this.updateProduct(e):this.createProduct(e)}createProduct(t){a.post(c.createProduct(),t).then(e=>{alert("Товар успешно добавлен!"),this.goBack()}).catch(e=>{console.error(e)})}updateProduct(t){a.patch(c.updateProductById(this.productId),t).then(e=>{alert("Товар успешно обновлен!"),this.goBack()}).catch(e=>{console.error(e)})}goBack(){new d(this.parent).render()}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new m(document.getElementById("back-button-container"),this.goBack.bind(this)).render(),document.getElementById("product-form").addEventListener("submit",this.handleSubmit.bind(this)),this.isEditMode&&!this.product&&this.getProductData()}}class d{constructor(t){this.parent=t,this.products=[],this.getData()}getHTML(){return`
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
        `}handleFilterChange(t){const e=this.products.filter(r=>{const s=r.price<=t.maxPrice,n=t.checkedCategories.length===0||t.checkedCategories.includes(r.category);return s&&n});this.renderProducts(e)}handleAddProduct(){this.products.length!==0&&a.post(c.createProduct(),newItem).then(t=>{this.products.push(t),this.renderProducts(this.products)}).catch(t=>{console.error(t)})}handleDeleteProduct(t){console.log("DEL",t),a.delete(c.removeProductById(t)).then(e=>{this.products=this.products.filter(r=>r.id!==t),this.renderProducts(this.products)}).catch(e=>{console.log(e)})}showProductDetail(t){const e=this.products.find(s=>s.id===t);if(!e)return;new v(this.parent,e).render()}showEditProduct(t){new p(this.parent,t).render()}showAddProduct(){new p(this.parent).render()}renderProducts(t){const e=document.getElementById("products-container");e.innerHTML="",t.forEach(r=>{console.log(r.id),new g(e,()=>this.handleDeleteProduct(r.id),()=>this.showProductDetail(r.id),()=>this.showEditProduct(r.id)).render(r)})}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new b(document.getElementById("filters-container"),this.handleFilterChange.bind(this)).render(),new f(document.getElementById("add-product-container"),this.showAddProduct.bind(this)).render(),console.log(this.products),this.renderProducts(this.products)}getData(){return a.get(c.getProducts()).then(t=>(this.products=t,this.renderProducts(t),t)).catch(t=>{throw console.error("Error in getData:",t),t})}}const E=document.getElementById("root"),L=new d(E);L.render();
