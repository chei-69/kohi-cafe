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


