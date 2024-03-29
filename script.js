document.addEventListener("DOMContentLoaded", function() {
    // Show the splash screen for 3 seconds
    setTimeout(function() {
        document.getElementById("splashScreen").style.display = 'none';
        document.getElementById("mainContent").classList.remove('hidden');
        document.getElementById("homePage").src = "https://zawaka.site/"; // Load the website
    }, 3000); // 3000 ms = 3 seconds
});