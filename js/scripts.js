// js/scripts.js

document.addEventListener("DOMContentLoaded", function() {

    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const responseDiv = form.nextElementSibling;
            responseDiv.classList.remove('hidden');
            setTimeout(() => responseDiv.classList.add('hidden'), 3000);
        });
    });

});
