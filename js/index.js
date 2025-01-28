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


    // DROP FILE
    const fileDropZone = document.getElementById('file-upload');
    const fileInput = document.getElementById('fileInput');
    const uploadedFilesList = document.getElementById('uploaded-files-list');
    let uploadedFiles = []; // Array to store files

    // Handle file selection (via dialog or drag-and-drop)
    const handleFiles = (files) => {
        for (const file of files) {
            // Avoid duplicate files
            if (!uploadedFiles.some((f) => f.name === file.name)) {
                uploadedFiles.push(file);
                updateFileList();
            }
        }
    };

    // Open file dialog on click
    fileDropZone.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection via dialog
    fileInput.addEventListener('change', (event) => {
        handleFiles(event.target.files);
        fileInput.value = ''; // Clear input to allow re-selection
    });

    // Highlight the drop zone when dragging files over it
    fileDropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        fileDropZone.classList.add('dragover');
    });

    // Remove highlight when dragging leaves the drop zone
    fileDropZone.addEventListener('dragleave', () => {
        fileDropZone.classList.remove('dragover');
    });

    // Handle file drop
    fileDropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        fileDropZone.classList.remove('dragover');
        handleFiles(event.dataTransfer.files);
    });

    // Update the displayed file list
    const updateFileList = () => {
        uploadedFilesList.innerHTML = ''; // Clear the list
        uploadedFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name}</span>
                <button data-index="${index}">Remove</button>
            `;
            uploadedFilesList.appendChild(fileItem);
        });

        // Add event listeners to "Remove" buttons
        document.querySelectorAll('.file-item button').forEach((button) => {
            button.addEventListener('click', (event) => {
                const fileIndex = parseInt(event.target.getAttribute('data-index'), 10);
                uploadedFiles.splice(fileIndex, 1); // Remove the file from the array
                updateFileList(); // Refresh the list
            });
        });
    };


});