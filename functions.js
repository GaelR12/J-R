
   window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; // Distance the user has scrolled from the top
        const headerHeight = document.querySelector('.parallax-header').offsetHeight;

        // Calculate opacity based on scroll position (adjust multiplier for sensitivity)
        let newOpacity = scrollPosition / headerHeight * 0.3; 

        // Ensure opacity stays within bounds (0 - 1)
        if (newOpacity < 0) newOpacity = 0;
        if (newOpacity > 0.3) newOpacity = 0.3;

        // Update the CSS variable controlling opacity
        document.querySelector('.parallax-header').style.setProperty('--overlay-opacity', newOpacity);
    });

