function generateArticle() {
    let article = '';
    const characters = '01';
    do {
        article += characters.charAt(Math.floor(Math.random() * characters.length));
    } while (article.length < 8); // Цикл с постусловием
    return article;
}

// Mock данные

let products = [
    {
        id: 1,
        name: 'Футболка',
        price: 1999,
        category: 'одежда',
        article: generateArticle(),
        description: 'Хлопковая футболка с принтом',
        image: 'https://futbolka-print.ru/wp-content/uploads/2019/12/35-3.jpg'
    },
    {
        id: 2,
        name: 'Кроссовки спортивные',
        price: 11999,
        category: 'обувь',
        article: generateArticle(),
        description: 'Легкие беговые кроссовки',
        image: 'https://yandex-images.clstorage.net/l4tp82n66/1e20ecl4_/1cxz3EsjEngVZVXI2uewk_lskc1WBudrRWvMD7WEzyq9brTCpRH_cbtVacJW7qjLJhxVx39qxc5yzW0eJYZWUpDRPtUqKmtkFXEE5PPX2KO5OaG4WlPvD1V2qD7hfVbLaLcFNmjkKrUaUWieS6uZ-jMEoFp7W_DHBz2phlFnB6sVQJdoD08fYMWlxKA2szQ3JZXtXWrjS9Ilc_G3AaWaG4wPNVbkIHJZmtXMKrsTaN7_TDyzrwM4R-fNuRp9U38HNYAnTIfLZ3CFcSw8Ilucj01VQW3uE9_GIV9JT3VJGitQD-lSDCR6FWKp9BI_IySmY_Q8d0vnKNPrvUmysXffh1kYz5TTZ49wfVmAVObzmGtxhf3VFtN_mh1nYcMV6W4HWH9xDiRY7nHCcXxml3OcBt8AZC8zhywzh4lBjkWTi8-NjGMAUz_r5EHZpCz-gyzPRblhTUbHUwaFn3Uz6Y2uA_CT1aoIHG4dJo2oDpeXJO5DGAj3o_ekp3-9YdbxM2crNSBTsFPvu2QZNZDoIiPEy2Ul4fECB2_iDWvxr6ERaleMo2FqQOwyubJdRC7XsyAi_5i850Ov4Debjdl-fZvztx1MkzDHZ8dcxXEgSDZTIJ_1rTm58t_v7j1fVWv9Ne5roAc1OvgEdtli6bhOD6PoCuuUZA_f18BD92FB1j339xNxdFtM34-LqO3NzGT-oxC3fRVp7Q5z6_IVBxErHUkOw8SrrRpo1BYhajHIku_7zCprkMhj6-eQi6dRKS4J5zvjFXCroBsz79yxWSDAElNo42URBRFmxwem6RthR5HdYn9AGy1uCKTenRYp9AaLa1DWH3SAL39D9MMnlUEKwaOH1-k464DrK3dQMdGIWCpr0D-5HR0dlu-_7oUDveu1BXbbDDN9OpDQIhW6ZWj2f18gCnewHHdvXygnk41tnnFT5w_tVE8g_19PYHm1_GQKS7xruVXpad7_a0ohZ9n_SUH0'
    },
    {
        id: 3,
        name: 'Ежедневник',
        price: 899,
        category: 'канцелярия',
        article: generateArticle(),
        description: 'Ежедневник A5 в твердом переплете',
        image: 'https://brandpresent.ru/_f/104/1500/p77/bp_p773451_03.jpg'
    },
    {
        id: 4,
        name: 'Брюки',
        price: 4499,
        category: 'одежда',
        article: generateArticle(),
        description: 'Черные классические брюки',
        image: 'https://avatars.mds.yandex.net/get-mpic/5284145/img_id4337629652368726408.jpeg/orig'
    },{
        id: 5,
        name: 'Ботинки',
        price: 14999,
        category: 'обувь',
        article: generateArticle(),
        description: 'Ботинки зимние из натуральной кожи',
        image: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/121/850/334/731/232/1/100037586444b1.jpg'
    },{
        id: 6,
        name: 'Набор ручек',
        price: 399,
        category: 'канцелярия',
        article: generateArticle(),
        description: 'Набор шариковых ручек с синими чернилами',
        image: 'https://cdn1.ozone.ru/s3/multimedia-i/c1200/6106330338.jpg'
    },{
        id: 7,
        name: 'Джинсы',
        price: 4999,
        category: 'одежда',
        article: generateArticle(),
        description: 'Джинсы женские свободного кроя',
        image: 'https://sun9-1.userapi.com/impg/tFIlP7MuqTd5DMnopct5OwCUxOM6AmkWvb1DWA/UBDLoVSmyRg.jpg?size=739x924&quality=95&sign=316bafdb9db999e02ac58c39cf632f42&c_uniq_tag=g3H71ztRRCdi3Hg3h666ecYJJmL_w7jd7q0Bx_OKJas&type=album'
    },{
        id: 8,
        name: 'Кеды',
        price: 7990,
        category: 'обувь',
        article: generateArticle(),
        description: 'Кеды шикарные',
        image: 'https://avatars.mds.yandex.net/get-mpic/1925870/img_id2180853874220513651.jpeg/orig'
    },{
        id: 9,
        name: 'Цветные карандаши',
        price: 1200,
        category: 'канцелярия',
        article: generateArticle(),
        description: 'Цветные карандаши для рисования',
        image: 'https://avatars.mds.yandex.net/i?id=a0e6984d11e1d273e62e2fd6c52e9be24c1d4a30-5364055-images-thumbs&n=13'
    },
];

// Инициализация

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    document.getElementById('priceFilter').addEventListener('input', filterProducts);
    // Добавляем обработчик для чекбоксов
    document.querySelectorAll('.category-filter input').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
});



// Фильтрация 
function filterProducts() {
    const maxPrice = parseInt(document.getElementById('priceFilter').value);
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter input:checked'))
                            .map(checkbox => checkbox.value);
    
    document.getElementById('priceValue').textContent = `${maxPrice.toLocaleString()} ₽`;
    
    const filtered = products.filter(product => {
        const priceMatch = product.price <= maxPrice;
        
        const categoryMatch = checkedCategories.length === 0 
            ? true 
            : checkedCategories.includes(product.category);
        return priceMatch && categoryMatch;
    });
    
    renderProducts(filtered);
}

// Добавление товара
function addNewProduct() {
    if (products.length === 0) return;
    const newProduct = {
        ...products[0],
        id: Date.now(),
        name: `Копия: ${products[0].name}`
    };
    products.push(newProduct);
    renderProducts(products);
}

// Удаление товара
function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    renderProducts(products);
}

// Показать детали товара
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    const detailContainer = document.getElementById('productDetail');
    
    detailContainer.innerHTML = `
        <button class="back-btn" onclick="showHomePage()">← Назад</button>
        <h2>${product.name}</h2>
        <img src="${product.image}" style="max-width: 400px; margin: 20px 0;">
        <div class="product-price" style="font-size: 24px;">${product.price.toLocaleString()} ₽</div>
        <p style="margin: 20px 0; line-height: 1.6;">${product.description}</p>
    `;

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('detail-page').style.display = 'block';
}

// Показать главную страницу
function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('detail-page').style.display = 'none';
    renderProducts(products);
}

function showNotification(message, duration = 5000) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, duration);
}

function renderProducts(productsArray) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsArray.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <button class="delete-btn" onclick="deleteProduct(${product.id})">×</button>
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <div class="article-info">
                Артикул: ${product.article}
                <button class="max1-btn" onclick="maxOnesInArticle('${product.article}')">МАКС1</button>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            <button class="detail-btn" onclick="showProductDetail(${product.id})">Подробнее</button>
        `;
        container.appendChild(card);
    });
}


document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    
    // Проверка на палиндром
    if (searchText.length > 0 && isPalindrome(searchText)) {
        showNotification('Это палиндром!', 5000);
    }

    // Фильтрация товаров
    const filtered = products.filter(product => {
        return product.name.toLowerCase().includes(searchText) || 
               product.category.toLowerCase().includes(searchText);
    });
    
    renderProducts(filtered);
});


function maxOnesInArticle(article) {
    const maxSequence = maxOnesSequence(article);
    showNotification(`Максимальная последовательность единиц: ${maxSequence}`, 5000);
}


function maxOnesSequence(str) {
    let max = 0, current = 0;
    for (const char of str) {
        current = char === '1' ? current + 1 : 0;
        if (current > max) max = current;
    }
    return max;
}


function isPalindrome(str) {
    const cleanStr = String(str).toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    let left = 0, right = cleanStr.length - 1;
    while (left < right) { 
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
}