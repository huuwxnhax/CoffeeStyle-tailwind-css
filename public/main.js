const topMenu = document.getElementById('thn-top-menu');
const toggleTopmenuIcon = document.getElementById('thn-toggle-top-menu-icon');
const toggleTopmenuExpanded = document.getElementById('thn-top-menu-expanded');

document.addEventListener('click', (e) => {
    if (toggleTopmenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('thn-top-menu-expanded')
    } else {
        if (topMenu.classList.contains('thn-top-menu-expanded')) {
            topMenu.classList.remove('thn-top-menu-expanded')
            topMenu.classList.add('hidden')
          }
    }
});
