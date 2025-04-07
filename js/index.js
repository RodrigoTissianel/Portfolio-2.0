// ===========================================================
// ================= HEADER GLASS EFFECT =====================
// ===========================================================

function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('header-active');
    else header.classList.remove('header-active');
}

window.addEventListener('scroll', scrollHeader);

// ===========================================================
// ==================== SECTION WORKS ========================
// ===========================================================

const workContainer = document.querySelectorAll('.projects-container');
const projectDescription = document.querySelectorAll('.project-description');

workContainer.forEach((work) => {
    work.addEventListener('click', () => {
        const projectTitle = work.querySelector('.project-title');
        const projectDescription = work.querySelector('.project-description');
        work.classList.toggle('active');
        projectTitle?.classList.toggle('active');
        projectDescription?.classList.toggle('active');
    });
});
