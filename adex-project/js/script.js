const topics = [

    {
        title: "AI",
        desc: "Artificial Intelligence and intelligent technologies.",
        icon: "✦"
    },

    {
        title: "Emerging Technologies",
        desc: "Exploring new technologies and future possibilities.",
        icon: "◈"
    },

    {
        title: "Digital Creation",
        desc: "Building modern digital experiences and ideas.",
        icon: "▣"
    },

    {
        title: "Accessibility",
        desc: "Technology that supports people and improves independence.",
        icon: "◎"
    },

    {
        title: "Assistive Technology",
        desc: "Exploring technology with meaningful human impact.",
        icon: "♡"
    },

    {
        title: "Technology for Good",
        desc: "Innovation with purpose.",
        icon: "↗"
    }

];


// ================= EXPLORE RENDER =================

const exploreRow = document.getElementById("exploreRow");

if (exploreRow) {

    topics.forEach((topic, index) => {

        const card = document.createElement("article");

        card.className = "ex-card reveal";

        card.style.transitionDelay = `${index * 70}ms`;

        card.innerHTML = `

            <div class="ex-icon">
                ${topic.icon}
            </div>

            <h3>
                ${topic.title}
            </h3>

            <p>
                ${topic.desc}
            </p>

        `;

        exploreRow.appendChild(card);

    });

}


// =====================================================
// TEAM DATA
// =====================================================

const team = [

    {
        name: "Adityapratap Singh",
        role: "Founder & CEO",
        desc: "Leads the company vision, strategy and overall growth.",
        image: "images/adityasingh.jpeg",
        linkedin: "https://www.linkedin.com/in/aadi-p-s/"
    },

    {
        name: "Dhananjay Bajgude",
        role: "Chief Technology Officer (CTO)",
        desc: "Manages technology, technical development and IT infrastructure.",
        image: "images/dhananjaybajgude.jpeg",
        linkedin: "https://www.linkedin.com/in/dhananjaybajgude"
    },

    {
        name: "Avdhesh Kumar Gupta",
        role: "Chief Operating Officer (COO)",
        desc: "Oversees daily operations, execution and team coordination.",
        image: "images/avs.jpeg",
        linkedin: "https://www.linkedin.com/in/Avs-Avdhesh-gupta"
    },

    {
        name: "Sanket Kokane",
        role: "Chief Product Officer (CPO)",
        desc: "Leads product development, innovation and product strategy.",
        image: "images/sanket.jpeg",
        linkedin: "https://www.linkedin.com/in/sanket-kokane-8968bb2b7"
    },

    {
        name: "Pallavi Garje",
        role: "Chief Financial Officer (CFO)",
        desc: "Manages finance, budgeting and financial planning.",
        image: "images/pallvai.jpeg",
        linkedin: "https://www.linkedin.com/in/pallavi-garje-4704a5381"
    },

    {
        name: "Manas Koyande",
        role: "Chief Marketing Officer (CMO)",
        desc: "Handles marketing, branding, promotion and customer outreach.",
        image: "images/manas.jpeg",
        linkedin: "https://www.linkedin.com/"
    }

];


// ================= TEAM RENDER =================

const teamRow = document.getElementById("teamRow");

if (teamRow) {

    team.forEach((member, index) => {

        const card = document.createElement("article");

        card.className = "t-card reveal";

        card.style.transitionDelay = `${index * 80}ms`;

        card.innerHTML = `

            <div class="t-avatar">

                <img
                    src="${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                >

                <a
                    class="t-badge"
                    href="${member.linkedin}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="${member.name} LinkedIn profile"
                >

                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >

                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>

                        <rect x="2" y="9" width="4" height="12"/>

                        <circle cx="4" cy="4" r="2"/>

                    </svg>

                </a>

            </div>

            <h3>
                ${member.name}
            </h3>

            <p class="role">
                ${member.role}
            </p>

            <p class="desc">
                ${member.desc}
            </p>

        `;

        teamRow.appendChild(card);

    });

}


// =====================================================
// NAVBAR
// =====================================================

const navbar = document.getElementById("navbar");

function handleNavbar() {

    if (!navbar) return;

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

}

window.addEventListener(
    "scroll",
    handleNavbar, { passive: true }
);

handleNavbar();


// =====================================================
// SCROLL PROGRESS
// =====================================================

const scrollProgress =
    document.getElementById("scrollProgress");

function updateProgress() {

    if (!scrollProgress) return;

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        height > 0 ?
        (scrollTop / height) * 100 :
        0;

    scrollProgress.style.width =
        `${progress}%`;

}

window.addEventListener(
    "scroll",
    updateProgress, { passive: true }
);

updateProgress();


// =====================================================
// MOBILE MENU
// =====================================================

const navToggle =
    document.getElementById("navToggle");

const mobilePanel =
    document.getElementById("mobilePanel");

const mobileOverlay =
    document.getElementById("mobileOverlay");

const mobileClose =
    document.getElementById("mobileClose");


function openMenu() {

    if (!mobilePanel || !mobileOverlay) return;

    mobilePanel.classList.add("open");
    mobileOverlay.classList.add("open");

    if (navToggle) {

        navToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}


function closeMenu() {

    if (!mobilePanel || !mobileOverlay) return;

    mobilePanel.classList.remove("open");
    mobileOverlay.classList.remove("open");

    if (navToggle) {

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


if (navToggle) {

    navToggle.addEventListener(
        "click",
        openMenu
    );

}


if (mobileClose) {

    mobileClose.addEventListener(
        "click",
        closeMenu
    );

}


if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        closeMenu
    );

}


if (mobilePanel) {

    mobilePanel
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

}


// =====================================================
// SCROLL REVEAL
// =====================================================

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sectionIds = [
    "home",
    "about",
    "vision",
    "explore",
    "team",
    "contact"
];

const sections =
    sectionIds
    .map(id =>
        document.getElementById(id)
    )
    .filter(Boolean);


const navAnchors =
    document.querySelectorAll(
        ".nav-links a"
    );


const activeObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                navAnchors.forEach(anchor => {

                    const active =
                        anchor.getAttribute("href") ===
                        `#${entry.target.id}`;

                    anchor.classList.toggle(
                        "active",
                        active
                    );

                });

            });

        },

        {
            threshold: 0.45
        }

    );


sections.forEach(section => {

    activeObserver.observe(section);

});


// =====================================================
// ANIMATED COUNTERS
// =====================================================

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.count
                    );

                const duration = 1200;

                const start =
                    performance.now();


                function animate(time) {

                    const progress =
                        Math.min(
                            (time - start) /
                            duration,
                            1
                        );

                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );

                    counter.textContent =
                        Math.floor(
                            eased * target
                        );

                    if (progress < 1) {

                        requestAnimationFrame(
                            animate
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }

                requestAnimationFrame(
                    animate
                );

                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: .7
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


// =====================================================
// HERO 3D TILT
// =====================================================

const heroVisual =
    document.getElementById("heroVisual");


if (
    heroVisual &&
    window.matchMedia("(pointer:fine)").matches
) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateX =
                ((y / rect.height) - .5) * -5;

            const rotateY =
                ((x / rect.width) - .5) * 5;

            heroVisual.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            heroVisual.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

}


// =====================================================
// PARALLAX HERO
// =====================================================

const floatingNodes =
    document.querySelectorAll(
        ".floating-node"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.innerWidth < 900) {
            return;
        }

        const scroll =
            window.scrollY;

        floatingNodes.forEach(
            (node, index) => {

                const amount =
                    scroll *
                    (.015 + index * .008);

                node.style.marginTop =
                    `${amount}px`;

            }
        );

    }, { passive: true }
);


// =====================================================
// IMAGE FALLBACK
// =====================================================

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                img.style.opacity = ".35";

                console.warn(
                    "Image not found:",
                    img.src
                );

            }
        );

    });


// =====================================================
// PAGE LOADED
// =====================================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);