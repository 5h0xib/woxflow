document.addEventListener('DOMContentLoaded', function () {
    // Helper function for the effect math
    function fromCenter({ x, y }) {
        return Math.min(Math.max(0, Math.sqrt((y - 0.5) * (y - 0.5) + (x - 0.5) * (x - 0.5)) / 0.5), 1);
    }

    // Function to update card variables
    const handleMouseMove = (e) => {
        // Only run calculations if we are in dark mode, to save performance
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        if (!isDarkMode) return;

        const cards = document.getElementsByClassName("card");

        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            const BOX = rect;
            const POINT = { x: x, y: y };
            const RATIO = { x: POINT.x / BOX.width, y: POINT.y / BOX.height };

            // Set css variables referenced in css
            card.style.setProperty("--ratio-x", RATIO.x);
            card.style.setProperty("--ratio-y", RATIO.y);
        }
    };

    // Attach event to body or a wrapper to catch moves over cards
    document.body.addEventListener('pointermove', handleMouseMove);
});
