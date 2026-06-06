// ===== PRELOADER & INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
    const tokens = document.querySelectorAll('.master-token');
    const tl = gsap.timeline();
    tokens.forEach((token, index) => {
        tl.to(token, { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" }, index * 0.8);
    });
    tl.to("#gate-action-box", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4");
});

function triggerSystemBreach() {
    const preloader = document.getElementById('experience-preloader');
    const consoleLog = document.getElementById('hacker-matrix-console');
    const overloadScreen = document.getElementById('gold-overload-screen');

    document.getElementById('masters-assembly-zone').style.opacity = '0';
    consoleLog.classList.remove('opacity-0');

    const codes = [
        "CRITICAL_OVERFLOW: DECRYPT_0x4F",
        "INJECTING_MAISON_SANS_PITIE_CORE",
        "DECRYPTING_OR_MAT_DATABASE",
        "STATUS: MOUNTING_PARIS_ATELIER",
        "SYSTEM_BREACH_SUCCESSFUL",
        "LUXURY_PROTOCOLS_ACTIVATED"
    ];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const r = document.createElement('div');
            r.className = 'hacker-line';
            r.innerText = `>> ${codes[Math.floor(Math.random() * codes.length)]} [${Math.random().toString(16).substr(2, 4).toUpperCase()}]`;
            consoleLog.appendChild(r);
            consoleLog.scrollTop = consoleLog.scrollHeight;
        }, i * 45);
    }

    preloader.classList.add('cyber-glitch');
    gsap.to(overloadScreen, { opacity: 0.98, duration: 2.2, ease: "power2.in" });

    setTimeout(() => {
        preloader.classList.remove('cyber-glitch');
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
                preloader.remove();
                document.getElementById('msp-global-container').classList.remove('msp-lock-scroll');
                initCounters();
                const wrapper = document.getElementById('luxury-app-wrapper');
                if(wrapper) {
                    gsap.to(wrapper, { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out" });
                }
            }
        });
    }, 2400);
}

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('custom-cursor');
const aura = document.getElementById('custom-cursor-aura');
let mX = 0, mY = 0;

if(cursor && aura) {
    window.addEventListener('mousemove', (e) => {
        mX = e.clientX;
        mY = e.clientY;
        gsap.to(cursor, { x: mX, y: mY, duration: 0.05 });
        gsap.to(aura, { x: mX, y: mY, duration: 0.35, ease: "power2.out" });
    });
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
    document.querySelectorAll('[data-target]').forEach(c => {
        gsap.to(c, {
            innerText: parseInt(c.getAttribute('data-target')),
            duration: 2,
            snap: { innerText: 1 },
            ease: "power3.out"
        });
    });
}

// ===== CART COUNTER UPDATES =====
function updateCartCounter() {
    fetch('/cart.json')
        .then(response => response.json())
        .then(data => {
            const counter = document.getElementById('cart-counter-global');
            if (counter) {
                counter.innerText = data.item_count;
            }
        })
        .catch(err => console.log('Cart sync error:', err));
}

// Update cart on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCartCounter);
} else {
    updateCartCounter();
}

// Listen for cart updates (Shopify event)
if(document.addEventListener) {
    document.addEventListener('cart:updated', updateCartCounter);
}