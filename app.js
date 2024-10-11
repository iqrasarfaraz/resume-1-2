
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

//resume
toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
