function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  }
  
  function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }
  