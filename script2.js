
const sideBtn = document.getElementById("side-btn");
const sideBar = document.getElementById("links");
const closeBtn = document.getElementById("close");

sideBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);

// Check window width and only allow the sidebar to open if screen width is less than 700px
function openSidebar() {
    if (window.innerWidth <= 700) {
        sideBtn.style.display = "none";
        sideBar.classList.add("open");
    }
}

function closeSidebar() {
    if (window.innerWidth <= 700) {
        sideBtn.style.display = "block";
        sideBar.classList.remove("open");
    }
}

// Add an event listener to handle screen resizing
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        // On large screens, ensure the sidebar is visible and button is hidden
        sideBar.classList.remove("open");
        sideBtn.style.display = "none";
    } else {
        // On small screens, ensure the button is visible again
        sideBar.classList.remove("open");
        sideBtn.style.display = "block";
    }
});
