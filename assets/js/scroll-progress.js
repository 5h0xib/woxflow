document.addEventListener('DOMContentLoaded', function () {
    // --- Progress Bar ---
    function updateProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        if (!progressBar) return;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }

    // --- Progress Circle & Scroll to Top ---
    const progressPath = document.querySelector('.progress-circle-bar');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Length of the circle circumference (2 * pi * r) where r=45 -> ~283
    const pathLength = 283;

    if (progressPath) {
        progressPath.style.transition = 'none'; // Disable transition for setup
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect(); // Trigger layout
        progressPath.style.transition = 'stroke-dashoffset 10ms linear'; // Re-enable Short transition for smoothness
    }

    function updateProgressCircle() {
        if (!progressPath || !scrollToTopBtn) return;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Calculate progress
        const scrollPercentage = (winScroll / height);
        const drawLength = pathLength * scrollPercentage;

        // Update circle dashoffset (drawing the circle)
        // Offset starts at 283 (empty) and goes to 0 (full)
        progressPath.style.strokeDashoffset = pathLength - drawLength;

        // Show/Hide Scroll to Top Button
        // Show after scrolling 300px
        if (winScroll > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    // Attach listeners
    window.addEventListener('scroll', () => {
        updateProgressBar();
        updateProgressCircle();
    });

    window.addEventListener('resize', () => {
        updateProgressBar();
        updateProgressCircle();
    });

    // Initial call
    updateProgressBar();
    updateProgressCircle();
});
