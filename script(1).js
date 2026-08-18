document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    
    // Funkcja sprawdzająca pozycję paska przewijania
    const checkScroll = () => {
        // Jeśli strona jest przewinięta w dół o więcej niż 50 pikseli
        if (window.scrollY > 50) {
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", checkScroll);
    
    checkScroll();
});