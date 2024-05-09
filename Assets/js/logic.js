// Event listener that initializes the dark mode toggle functionality after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkModeToggle();
});

// Defines a function to set up the dark mode toggle functionality.
function initializeDarkModeToggle() {
    const toggleButton = document.getElementById('toggle-dark-mode'); // Gets the toggle button element from the DOM.
    if (toggleButton) {
        // Retrieves the dark mode status from localStorage and applies it.
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);

        // Adds an event listener to the toggle button to change dark mode status on click.
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode'); // Toggles the 'dark-mode' class on the body.
            // Saves the current state of dark mode in localStorage.
            localStorage.setItem('isDarkMode', document.body.classList.contains('dark-mode'));
        });
    }
}

// Function to store a new blog post in localStorage.
function storeBlogPost(blogPost) {
    // Retrieves stored blog posts or initializes an empty array if none exist.
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost); // Adds the new blog post to the array.
    // Updates the localStorage with the new array of blog posts.
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Function to retrieve all blog posts from localStorage.
function getBlogPosts() {
    // Returns an array of blog posts or an empty array if no posts are stored.
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}
