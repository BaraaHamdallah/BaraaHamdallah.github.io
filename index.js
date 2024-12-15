document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#Menu a");  
    const sections = document.querySelectorAll("main > section"); 

    function showSection(targetId) {
        sections.forEach(section => {

            if (section.classList.contains("aboutme") && targetId === "home") {
                section.style.display = "flex";

            } else if (section.id === targetId) {
                section.style.display = "block";

            } else {
                section.style.display = "none";
            }
        });
    }

    sections.forEach(section => section.style.display = "none");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);  

            showSection(targetId);
        });
    });
});
