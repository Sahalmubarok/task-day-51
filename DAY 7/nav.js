let isOpen = false
function openHamburger() {
    let hamburgernav = document.getElementById("hamburgernav")

    if (!isOpen) {
        hamburgernav.style.display = "flex"
        isOpen = true
    } else {
        hamburgernav.style.display = "none"
        isOpen = false
    }
}