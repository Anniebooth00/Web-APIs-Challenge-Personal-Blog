// Adds an event listener that triggers when the DOM content has fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();  // Calls the function to load blog posts from local storage.
});

// Defines a function to load blog posts into the page.
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');  // Accesses the container for posts.
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];  // Retrieves posts from localStorage or initializes an empty array if none exist.

    // Checks if there are no posts to display.
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available.</p>';  // Shows a message if no posts are available.
        return;  // Exits the function if there are no posts.
    }

    // Clears the container before adding new posts to it.
    postsContainer.innerHTML = '';

    // Iterates over each post and creates HTML elements to display them.
    posts.forEach(post => {
        const postElement = document.createElement('div');  // Creates a new div element for each post.
        postElement.className = 'post';  // Assigns a class name for styling.
        // Sets the inner HTML of the div to include the post's title, content, and author.
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>Posted by ${post.username}</small>`;
        postsContainer.appendChild(postElement);  // Appends the new div to the container.
    });
}
