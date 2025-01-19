//input and greeting screen

// //testing (CTRL + SHIFT + C)
document.addEventListener("keydown", (event) => {
    // Check for the key combination (e.g., Ctrl + Shift + C)
    if (event.ctrlKey && event.shiftKey && event.code === "KeyC") {
        localStorage.removeItem("userName");
        alert("Name has been cleared from localStorage. Refresh the page to test again.");
        location.reload(); 
    }
});

//basic typing animation 
const textArray = [
    "Los Angeles, California",
    "San Francisco, California",
    "Berkeley, California",
    "Hồ Chí Minh City, Việt Nam"
];
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const dynamicText = document.getElementById("dynamic-text");

function type() {
    const currentText = textArray[textIndex];
    const emoji = "📍 ";

    if (!isDeleting && charIndex < currentText.length) {
        dynamicText.textContent = emoji + currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        dynamicText.textContent = emoji + currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            textIndex = (textIndex + 1) % textArray.length;
        }
        setTimeout(type, delayBetweenTexts);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


//toggle light mode
let lightmode = localStorage.getItem('Light')
const themeSwitch = document.getElementById('ThemeSwitch')
const TranslateV = document.getElementById('TranslateV'); 

const icons = {
    linkedin: {
        light: "images/LN-light.png",
        dark: "images/LN-dark.png"
    },
    github: {
        light: "images/GitHub-light.png",
        dark: "images/GitHub-dark.png"
    },
    leetcode: {
        light: "images/LeetCode-light.png",
        dark: "images/LeetCode-dark.png"
    },
    calendely: {
        light: "images/CAL-light.png",
        dark: "images/CAL-dark.png"
    }, 
    resume: {
        light: "images/Resume-light.png", 
        dark: "images/Resume-dark.png"
    },
    logo: {
        light: "images/logo-light.png", 
        dark: "images/logo-dark.png", 
    }
};

const updateIcons = (mode) => {
    const linkedinIcons = document.querySelectorAll("[id^='linkedin-icon']");
    const githubIcons = document.querySelectorAll("[id^='github-icon']");
    const leetcodeIcons = document.querySelectorAll("[id^='leetcode-icon']");

    linkedinIcons.forEach(icon => {
        icon.src = icons.linkedin[mode];
    });
    githubIcons.forEach(icon => {
        icon.src = icons.github[mode];
    });
    leetcodeIcons.forEach(icon => {
        icon.src = icons.leetcode[mode];
    });
};

const resumeIcon = document.getElementById("Calendly-icon");
const calendelyIcon = document.getElementById("Resume-icon");
const LogoIcon = document.getElementById("logo-icon");

const enableLightMode = () => {
    document.body.classList.add("Light");
    localStorage.setItem('Light', 'active');
    TranslateV.style.fill = "var(--font-color3)";
    updateIcons("light");
    resumeIcon.src = icons.calendely.light;
    calendelyIcon.src = icons.resume.light;
    LogoIcon.src = icons.logo.light;
};

const disableLightMode = () => {
    document.body.classList.remove("Light");
    localStorage.removeItem('Light');
    TranslateV.style.fill = "whitesmoke";
    updateIcons("dark");
    resumeIcon.src = icons.calendely.dark;
    calendelyIcon.src = icons.resume.dark;
    LogoIcon.src = icons.logo.dark;
};

const updateThemeSwitchTooltip = () => {
    const lightmode = localStorage.getItem('Light');
    if (lightmode === 'active') {
        themeSwitch.setAttribute('title', 'Dark Mode'); 
    } else {
        themeSwitch.setAttribute('title', 'Light Mode'); 
    }
};

updateThemeSwitchTooltip();

if (lightmode === "active") {
    enableLightMode();
}

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('Light');
    if (lightmode !== "active") {
        enableLightMode();
    } else {
        disableLightMode();
    }
    updateThemeSwitchTooltip(); 
});


document.addEventListener("DOMContentLoaded", function () {
    const TranslateV = document.getElementById('TranslateV');
    const mainContent = document.getElementById('main-content');
    const welcomeGreet = document.getElementById('welcome-greet');
    const displayText = document.getElementById("display-text");
    const inputField = document.querySelector("#welcome-greet input");
    const afterInput = document.querySelector(".State-name");
    const primaryBtn = document.querySelector(".primary-btn");
    const secondaryBtn = document.querySelector(".secondary-btn");
    const introNameH3 = document.querySelector(".intro-name h3");
    const introNameH1 = document.querySelector(".intro-name h1");
    const introMajor = document.querySelector(".intro-name .major");

    // Translations
    const translations = {
        en: {
            greeting: "Please state your name below:",
            namePlaceholder: "Enter your name",
            resume: "Resume",
            calendly: "Calendly",
            greetMe: "I'm Joey Wong, an",
            majors: "Economics + Computer Science",
            student: "student @ UC Berkeley.",
            welcomeMessages: {
                firstTime: ["👋 Hello", "💗 Welcome, {name}!"],
                returning: ["👋 Hello", "💗 Welcome back, {name}!"],
            }
        },
        vi: {
            greeting: "Hãy nhập tên của bạn bên dưới:",
            namePlaceholder: "Nhập tên của bạn",
            resume: "Bản tóm tắt",
            calendly: "Lịch hẹn",
            greetMe: "Tôi là Joey Wong, một",
            majors: "Kinh tế + Khoa học Máy tính",
            student: "sinh viên @ UC Berkeley.",
            welcomeMessages: {
                firstTime: ["👋 Xin chào", "💗 Chào mừng, {name}!"],
                returning: ["👋 Xin chào", "💗 Rất vui được gặp lại, {name}!"],
            }
        },
    };

    // Load saved language or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    applyLanguage(savedLanguage);

    // Apply language
    function applyLanguage(lang) {
        localStorage.setItem('language', lang); 
        const texts = translations[lang]; 
        document.querySelector(".container h3").textContent = texts.greeting;
        inputField.placeholder = texts.namePlaceholder;
        primaryBtn.textContent = texts.resume;
        secondaryBtn.textContent = texts.calendly;
        introNameH3.textContent = texts.greetMe;
        introNameH1.textContent = texts.majors;
        introMajor.textContent = texts.student;
        const storedName = localStorage.getItem("userName");
        if (!storedName) {
            displayText.textContent = texts.welcomeMessages.firstTime[0];
        }
    }
    const updateLanguageTooltip = () => {
        const savedLanguage = localStorage.getItem("language") || "en";
        const tooltipText = savedLanguage === "vi" ? "Tiếng Anh" : "Vietnamese";
        TranslateV.setAttribute("title", tooltipText);
        TranslateV.setAttribute("aria-label", tooltipText); 
    };

    // Initial setup
    updateLanguageTooltip();

    // Language toggle
    TranslateV.addEventListener("click", () => {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'vi' : 'en';
        localStorage.setItem("language", newLang);
        applyLanguage(newLang); // Reapply translations to UI elements
        updateLanguageTooltip(); // Update tooltip dynamically
    });

    displayText.textContent = "";

    // Welcome animation
    function playGreetingsAnimation(name, isReturning = false) {
        const currentLang = localStorage.getItem('language') || 'en';
        const messages = translations[currentLang].welcomeMessages;
        const greetings = isReturning
            ? messages.returning.map(msg => msg.replace("{name}", name))
            : messages.firstTime.map(msg => msg.replace("{name}", name));
        
        let index = 0;
        const displayDuration = 1600;

        function showNextGreeting() {
            if (index < greetings.length) {
                displayText.textContent = greetings[index];
                index++;
                setTimeout(showNextGreeting, displayDuration);
            } else {
                welcomeGreet.style.display = "none";
                mainContent.style.display = "block";
            }
        }
        showNextGreeting();
    }

    function handleUserInput() {
        const name = inputField.value.trim();
        if (name.length > 0) {
            localStorage.setItem("userName", name); 
            afterInput.style.display = "none";
            playGreetingsAnimation(name);
        } else {
            alert("Please enter your name before proceeding! 😠");
        }
    }
    
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        afterInput.style.display = "none";
        playGreetingsAnimation(storedName, true);
    } else {
        inputField.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                handleUserInput();
            }
        });
    }
});
