document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const checkScroll = () => {
        if (window.scrollY > 50) {
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    if (elementsToTranslate.length > 0) {
        const savedLang = localStorage.getItem("language") || "pl";
        changeLanguage(savedLang);
    }
});

function enterSite(lang) {
    localStorage.setItem("language", lang);
    window.location.href = "home.html";
}

async function changeLanguage(lang) {
    localStorage.setItem("language", lang);

    if (lang === "pl") {
        return;
    }

    try {
        const response = await fetch(`${lang}.json`);

        if (!response.ok) {
            throw new Error(`Nie znaleziono pliku tłumaczenia: ${lang}.json`);
        }

        const translations = await response.json();
        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");

            if (!(key in translations)) {
                return;
            }

            if (
                element.tagName === "INPUT" ||
                element.tagName === "TEXTAREA"
            ) {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        });
    } catch (error) {
        console.error("Błąd podczas ładowania języka:", error);
    }
}