document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const discordIcon = document.getElementById('discord-icon');
    const robloxIcon = document.getElementById('roblox-icon');
    const discordModal = document.getElementById('discord-modal');
    const robloxModal = document.getElementById('roblox-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const dockContainer = document.querySelector('.dock-container'); // Get the dock container

    // Function to open a modal
    const openModal = (modalElement) => {
        modalElement.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    // Function to close a modal
    const closeModal = (modalElement) => {
        modalElement.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    };

    // Event listeners for icons to open modals
    discordIcon.addEventListener('click', () => {
        openModal(discordModal);
    });

    robloxIcon.addEventListener('click', () => {
        openModal(robloxModal);
    });

    // Event listeners for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            closeModal(event.target.closest('.modal-overlay'));
        });
    });

    // Event listeners for clicking outside the modal content to close
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) { // Check if the click was directly on the overlay
                closeModal(overlay);
            }
        });
    });

    // Logic for dock visibility on scroll
    window.addEventListener('scroll', () => {
        const scrollThreshold = 150; // Pixels scrolled down before dock appears
        if (window.scrollY > scrollThreshold) {
            dockContainer.classList.add('active');
        } else {
            dockContainer.classList.remove('active');
        }
    });
});