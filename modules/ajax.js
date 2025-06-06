class Ajax {
    /**
     * GET запрос
     * @param {string} url - Адрес запроса
     */
    // async get(url) {
    //     try {
    //         const response = await fetch(url);
            
    //         return response.json();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async get(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }

    /**
     * POST запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для отправки
     * @returns {Promise} промис с результатом запроса
     */
    async post(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        return  response.json();
    } catch (error) {
        console.error(error);
    }
}

    /**
     * PATCH запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для обновления
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            return;
        } catch(error) {
            console.log(error);
        }
    }

    /**
     * DELETE запрос
     * @param {string} url - Адрес запроса
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return;
    }

    /**
     * Обработчик ответа (приватный метод)
     * @param {XMLHttpRequest} xhr - Объект запроса
     * @param {function} callback - Функция обратного вызова
     */
    _handleResponse(xhr, callback) {
        try {
            const data = xhr.responseText ? JSON.parse(xhr.responseText) : null;
            callback(data, xhr.status);
        } catch (e) {
            console.error('Ошибка парсинга JSON:', e);
            callback(null, xhr.status);
        }
    }
}

export const ajax = new Ajax();