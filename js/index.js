window.addEventListener('load', () => {
    const popup = document.getElementById('register-popup-wnd');
    const closeButton = document.getElementById('popupClose');

    // Показываем окно
    popup.classList.add('active');

   
    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
    });
});