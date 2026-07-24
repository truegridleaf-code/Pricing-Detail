document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });


    // --- Accordion Toggle for Important Terms ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Toggle active state
            const isActive = header.classList.contains('active');

            // Close all items
            accordionHeaders.forEach(otherHeader => {
                otherHeader.classList.remove('active');
                const otherIcon = otherHeader.querySelector('i');
                const otherContent = otherHeader.nextElementSibling;
                
                otherIcon.style.transform = 'rotate(0deg)';
                otherContent.style.maxHeight = null;
            });

            // If it wasn't active before, open it
            if (!isActive) {
                header.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
