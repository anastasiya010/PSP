export function createBackButton() {
    const button = document.createElement('button');
    button.className = 'back-btn';
    button.textContent = '← Назад';
    return button;
}