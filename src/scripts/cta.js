// Get all elements with the class 'cta-icon'
window.addEventListener('load', function () {
    const ctaIcons = document.querySelectorAll('.ctaIcon');

    // Add a click event listener to the element with class 'cta-toggle'
    document.querySelector('.ctaToggle').addEventListener('click', function () {
        // Loop through all 'cta-icon' elements except the last one and set their display to 'none'
        for (let i = 0; i < ctaIcons.length - 1; i++) {
            ctaIcons[i].classList.toggle("hidden");
        }
    });
})
