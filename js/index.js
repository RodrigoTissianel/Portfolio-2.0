// ===========================================================
// ================= HEADER GLASS EFFECT =====================
// ===========================================================

function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('header-active');
    else header.classList.remove('header-active');
}

window.addEventListener('scroll', scrollHeader);
