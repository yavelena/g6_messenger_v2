// window.addEventListener('load', () => {
//     const popup = document.getElementById('register-popup-wnd');
//     const closeButton = document.getElementById('popupClose');

//     popup.classList.add('active');

   
//     closeButton.addEventListener('click', () => {
//         popup.classList.remove('active');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    
    // Open Register Window
    const register_popup_wnd = document.getElementById('register-popup');
    register_popup_wnd.classList.add('active');

    // Get all elements with the class 'popup-close'
    const closeButtons = document.querySelectorAll('.popup-close');

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Find the closest parent element with the class 'popup-overlay'
            const popup = button.closest('.popup-overlay');
            if (popup) {
                popup.classList.remove('active'); // Hide the popup
            }
        });
    });

    // Write a new message
    const newMsgBtn = document.getElementById('new-msg-btn');
    newMsgBtn.addEventListener('click', () => {
        const newMsgPopup = document.getElementById('new-msg-popup');
        newMsgPopup.classList.add('active');
    });

    const addRecipientBtn = document.getElementById('add-recipient-btn');
    addRecipientBtn.addEventListener('click', () => {
        const newRecipientPopup = document.getElementById('add-recipient-popup');
        newRecipientPopup.classList.add('active');
    });


});