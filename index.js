$(document).ready(function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Define the URL to match and the target URL for redirection
    var matchUrl = "http://10.20.30.78/beta/about-us/";
    var redirectUrl = "http://10.20.30.78/beta/about-us/who-we-are";

    // Check if the current URL matches the specified URL
    if (currentUrl === matchUrl) {
        // Redirect to the target URL
        window.location.replace(redirectUrl);
    }
});
