const cards = Array.from(document.querySelectorAll('.carousel-card'));
const total = cards.length;
let activeIndex = 0;

function updateCarousel() {
    cards.forEach((card, i) => {
        let offset = i - activeIndex;
        // Normalize to shortest circular distance so cards wrap around
        if (offset > total / 2)  offset -= total;
        if (offset < -total / 2) offset += total;
        card.dataset.offset = Math.abs(offset) > 3 ? 'hidden' : String(offset);
    });
}

function goTo(index) {
    activeIndex = ((index % total) + total) % total;
    updateCarousel();
}

// Prev / Next arrows
document.getElementById('carouselPrev').addEventListener('click', () => goTo(activeIndex - 1));
document.getElementById('carouselNext').addEventListener('click', () => goTo(activeIndex + 1));

// Click a side card to jump to it
cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        if (card.dataset.offset !== '0') goTo(i);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(activeIndex + 1);
    if (e.key === 'ArrowLeft')  goTo(activeIndex - 1);
});

// Init
updateCarousel();
