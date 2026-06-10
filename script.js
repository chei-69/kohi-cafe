const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        }
    });
} ,  { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});
const liens = document.querySelectorAll('nav a');

const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            liens.forEach(lien => lien.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const lienActif = document.querySelector(`nav a[href="#${id}"]`);
            if (lienActif) lienActif.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observerNav.observe(section));

