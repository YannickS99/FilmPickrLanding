// ===== Multi-Language Support =====
const translations = {
    en: {
        "nav.how": "How it works",
        "nav.features": "Features",
        "nav.faq": "FAQ",
        "nav.cta": "Coming soon",
        "hero.badge": "Coming soon to the App Store",
        "hero.title1": "Your movie night.",
        "hero.title2": "Zero arguing.",
        "hero.subtitle": "Find the perfect movie or show together as a group with swipe voting – directly over your local network. No account, no server, no fighting.",
        "cta.main": "Coming to the App Store",
        "cta.learnMore": "Learn more",
        "mock.badge": "Tonight",
        "problem.badge": "End the endless search",
        "problem.q": "“What should we watch tonight?”",
        "problem.a": "FilmPickr answers it in minutes.",
        "problem.desc": "Endless scrolling through streaming catalogs, everyone has different subscriptions, no one can decide. FilmPickr turns the decision into a short, playful group experience: everyone swipes, the app finds the common ground.",
        "how.badge": "How it works",
        "how.title1": "One code, one swipe,",
        "how.title2": "one movie for all.",
        "how.s1.title": "Create a session",
        "how.s1.desc": "One player becomes the host and gets a short session code. No account, no email.",
        "how.s2.title": "Join with the code",
        "how.s2.desc": "Everyone on the same Wi-Fi joins with the code – connected directly over the local network.",
        "how.s3.title": "Swipe together",
        "how.s3.desc": "Everyone rates the same titles: swipe right for “yes”, left for “no”. Fast, fair and playful.",
        "how.s4.title": "Crown the winner",
        "how.s4.desc": "FilmPickr tallies all votes and reveals the winner plus a podium of the top 3.",
        "features.badge": "Features",
        "features.title1": "Everything for the perfect",
        "features.title2": "movie night.",
        "features.f1.title": "Sessions without a server",
        "features.f1.desc": "Devices connect directly over the local network (MultipeerConnectivity). Join with a short code, see a live participant list in the lobby.",
        "features.f2.title": "Smart filters",
        "features.f2.desc": "Region, streaming services, movie or show, genres, minimum rating and release year. Save and reuse filter templates.",
        "features.f3.title": "Real movie data",
        "features.f3.desc": "Cover, description, rating, runtime, age rating and real streaming availability – matched to your region and chosen services. Powered by TMDB.",
        "features.f4.title": "Swipe voting",
        "features.f4.desc": "Modern, glassy cards in a cinema look. Swipe or vote with buttons (popcorn = yes, X = no), with an undo function and live progress.",
        "features.f5.title": "Result experience",
        "features.f5.desc": "Animated reveal of the winner with a glow effect, a podium of the top 3 and a creative popcorn voting meter.",
        "features.f6.title": "History & detail pages",
        "features.f6.desc": "Detailed pages for every title and a history of past sessions including winner, date and participants.",
        "privacy.badge": "Privacy-first",
        "privacy.title": "No account. No server. No tracking.",
        "privacy.desc": "There’s no registration and no user account. Profile, templates and history stay local on your device, communication runs directly peer-to-peer over the local network. Movie data comes from TMDB.",
        "services.title": "Considers real availability on your services",
        "faq.badge": "FAQ",
        "faq.title": "Frequently asked questions",
        "faq.q1": "Do I need an account?",
        "faq.a1": "No. FilmPickr works completely without registration. On first launch you only pick a display name – no email, no password, no account.",
        "faq.q2": "Does everyone need to be on the same Wi-Fi?",
        "faq.a2": "Yes. Devices connect directly over the local network via MultipeerConnectivity – perfect for the couch. Nothing runs through a cloud server.",
        "faq.q3": "Which streaming services are supported?",
        "faq.a3": "Netflix, Prime Video, Disney+, Apple TV+, Joyn, RTL+, WOW, MUBI and more. FilmPickr only shows titles available on your chosen subscriptions in your region.",
        "faq.q4": "How much does the app cost?",
        "faq.a4": "FilmPickr is completely free – no subscription, no hidden costs and no in-app purchases. The app is coming soon to the App Store. Follow us on social media to be the first to know at launch.",
        "download.title": "Coming soon.",
        "download.desc": "FilmPickr is coming soon to the App Store. Make your next movie night an experience.",
        "download.btn": "Coming to the App Store",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy",
        "footer.legal": "Legal Notice",
        "footer.tmdb": "Powered by TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB."
    },
    de: {
        "nav.how": "So funktioniert's",
        "nav.features": "Funktionen",
        "nav.faq": "FAQ",
        "nav.cta": "Bald verfügbar",
        "hero.badge": "Demnächst im App Store",
        "hero.title1": "Euer Filmabend.",
        "hero.title2": "Null Diskussion.",
        "hero.subtitle": "Findet als Gruppe per Swipe-Abstimmung gemeinsam den perfekten Film oder die perfekte Serie – direkt über euer lokales Netzwerk. Kein Account, kein Server, kein Streit.",
        "cta.main": "Bald im App Store",
        "cta.learnMore": "Mehr erfahren",
        "mock.badge": "Heute Abend",
        "problem.badge": "Schluss mit der Endlos-Suche",
        "problem.q": "„Was schauen wir heute?“",
        "problem.a": "FilmPickr beantwortet die Frage in Minuten.",
        "problem.desc": "Endloses Scrollen durch Streaming-Kataloge, jeder hat andere Abos, niemand kann sich entscheiden. FilmPickr macht aus der Entscheidung ein kurzes, spielerisches Gruppen-Erlebnis: Jeder swipt, die App findet den gemeinsamen Nenner.",
        "how.badge": "So funktioniert's",
        "how.title1": "Ein Code, ein Swipe,",
        "how.title2": "ein Film für alle.",
        "how.s1.title": "Session erstellen",
        "how.s1.desc": "Ein Spieler wird Host und bekommt einen kurzen Session-Code. Kein Account, keine E-Mail.",
        "how.s2.title": "Per Code beitreten",
        "how.s2.desc": "Alle im selben WLAN treten mit dem Code bei – direkt über das lokale Netzwerk verbunden.",
        "how.s3.title": "Gemeinsam swipen",
        "how.s3.desc": "Jeder bewertet dieselben Titel: rechts „Ja“, links „Nein“. Schnell, fair und spielerisch.",
        "how.s4.title": "Gewinner küren",
        "how.s4.desc": "FilmPickr wertet alle Stimmen aus und zeigt den Gewinner plus ein Podium der Top 3.",
        "features.badge": "Funktionen",
        "features.title1": "Alles fürs perfekte",
        "features.title2": "Filmabend-Erlebnis.",
        "features.f1.title": "Sessions ohne Server",
        "features.f1.desc": "Geräte verbinden sich direkt über das lokale Netzwerk (MultipeerConnectivity). Beitritt per kurzem Code, Live-Teilnehmerliste in der Lobby.",
        "features.f2.title": "Smarte Filter",
        "features.f2.desc": "Region, Streamingdienste, Film oder Serie, Genres, Mindestbewertung und Erscheinungsjahr. Filter-Vorlagen speichern und wiederverwenden.",
        "features.f3.title": "Echte Filmdaten",
        "features.f3.desc": "Cover, Beschreibung, Bewertung, Laufzeit, Altersfreigabe und echte Streaming-Verfügbarkeit – passend zu Region und gewählten Diensten. Powered by TMDB.",
        "features.f4.title": "Swipe-Abstimmung",
        "features.f4.desc": "Moderne, gläserne Karten im Kino-Look. Wischen oder per Buttons abstimmen (Popcorn = Ja, X = Nein), mit Rückgängig-Funktion und Live-Fortschritt.",
        "features.f5.title": "Ergebnis-Erlebnis",
        "features.f5.desc": "Animierte Enthüllung des Gewinners mit Glow-Effekt, ein Podium der Top 3 und ein kreatives Popcorn-Voting-Meter.",
        "features.f6.title": "Verlauf & Detailseiten",
        "features.f6.desc": "Ausführliche Detailseiten zu jedem Titel und ein Verlauf vergangener Sessions inkl. Gewinner, Datum und Teilnehmern.",
        "privacy.badge": "Privacy-first",
        "privacy.title": "Kein Account. Kein Server. Kein Tracking.",
        "privacy.desc": "Es gibt keine Registrierung und kein Nutzerkonto. Profil, Vorlagen und Verlauf bleiben lokal auf dem Gerät, die Kommunikation läuft direkt Peer-to-Peer im lokalen Netzwerk. Filmdaten stammen von TMDB.",
        "services.title": "Berücksichtigt echte Verfügbarkeit auf euren Diensten",
        "faq.badge": "FAQ",
        "faq.title": "Häufige Fragen",
        "faq.q1": "Brauche ich ein Konto?",
        "faq.a1": "Nein. FilmPickr funktioniert komplett ohne Registrierung. Beim ersten Start wählst du nur einen Anzeigenamen – keine E-Mail, kein Passwort, kein Konto.",
        "faq.q2": "Müssen alle im selben WLAN sein?",
        "faq.a2": "Ja. Die Geräte verbinden sich direkt über das lokale Netzwerk per MultipeerConnectivity – ideal fürs gemeinsame Sofa. Es läuft nichts über einen Server in der Cloud.",
        "faq.q3": "Welche Streamingdienste werden unterstützt?",
        "faq.a3": "Netflix, Prime Video, Disney+, Apple TV+, Joyn, RTL+, WOW, MUBI und weitere. FilmPickr zeigt nur Titel, die auf den gewählten Abos in eurer Region verfügbar sind.",
        "faq.q4": "Was kostet die App?",
        "faq.a4": "FilmPickr steht komplett kostenlos zur Verfügung – ohne Abo, ohne versteckte Kosten und ohne In-App-Käufe. Die App erscheint demnächst im App Store. Folge uns auf Social Media, um zum Launch als Erstes informiert zu werden.",
        "download.title": "Demnächst verfügbar.",
        "download.desc": "FilmPickr kommt bald in den App Store. Macht euren nächsten Filmabend zum Erlebnis.",
        "download.btn": "Bald im App Store",
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.privacy": "Datenschutz",
        "footer.legal": "Impressum",
        "footer.tmdb": "Powered by TMDB. Dieses Produkt verwendet die TMDB API, ist aber nicht von TMDB unterstützt oder zertifiziert."
    }
};

let currentLang = 'DE';

function updateLanguage(lang) {
    const langData = translations[lang.toLowerCase()];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.innerText = langData[key];
    });
    document.documentElement.lang = lang.toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggle (page starts in German, button offers EN) ---
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        currentLang = 'DE';
        langBtn.innerText = 'EN';

        langBtn.addEventListener('click', () => {
            if (currentLang === 'DE') {
                currentLang = 'EN';
                updateLanguage('EN');
                langBtn.innerText = 'DE';
            } else {
                currentLang = 'DE';
                updateLanguage('DE');
                langBtn.innerText = 'EN';
            }
        });
    }

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Feature Card Tilt Effect ---
    const featureCards = document.querySelectorAll('.feature-card .feature-inner');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
            const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
            card.style.transition = 'transform 0.5s ease';
        });
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
});
