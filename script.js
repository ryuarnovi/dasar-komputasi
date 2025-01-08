document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu function
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                toggle.classList.toggle('show-icon');
            });
        }
    }

    showMenu('nav-toggle', 'nav-menu');

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const nav = document.getElementById('nav-menu');
        const toggle = document.getElementById('nav-toggle');
        
        if (nav && 
            toggle && 
            !nav.contains(e.target) && 
            !toggle.contains(e.target)) {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        }
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('nav-menu');
            const toggle = document.getElementById('nav-toggle');
            
            // Only close menu in mobile view
            if (window.innerWidth <= 1118) {
                nav.classList.remove('show-menu');
                toggle.classList.remove('show-icon');
            }
        });
    });

    // Handle dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    
    dropdownItems.forEach(item => {
        const dropdownButton = item.querySelector('.nav__link');
        
        // Toggle dropdown on click for mobile
        if (dropdownButton) {
            dropdownButton.addEventListener('click', (e) => {
                if (window.innerWidth <= 1118) {
                    const currentDropdown = item.querySelector('.dropdown__menu');
                    
                    // Close other dropdowns
                    dropdownItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherDropdown = otherItem.querySelector('.dropdown__menu');
                            if (otherDropdown) {
                                otherDropdown.style.maxHeight = '0';
                            }
                        }
                    });

                    // Toggle current dropdown
                    if (currentDropdown) {
                        if (currentDropdown.style.maxHeight === '0px' || !currentDropdown.style.maxHeight) {
                            currentDropdown.style.maxHeight = currentDropdown.scrollHeight + 'px';
                        } else {
                            currentDropdown.style.maxHeight = '0';
                        }
                    }
                    
                    e.preventDefault();
                }
            });
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const dropdownMenus = document.querySelectorAll('.dropdown__menu');
            if (window.innerWidth > 1118) {
                dropdownMenus.forEach(menu => {
                    menu.style.maxHeight = '';
                });
            } else {
                dropdownMenus.forEach(menu => {
                    menu.style.maxHeight = '0';
                });
            }
        }, 250);
    });
});