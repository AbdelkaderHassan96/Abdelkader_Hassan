// تحديد الأزرار والعناصر الخاصة بها
const navButtons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('section');

// إضافة حدث التمرير
window.addEventListener('scroll', () => {
    let currentSection = "";

    // تحديد القسم الحالي الذي يتم التمرير إليه
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // تحديث الأزرار النشطة
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('href') === `#${currentSection}`) {
            button.classList.add('active');
        }
    });
});
