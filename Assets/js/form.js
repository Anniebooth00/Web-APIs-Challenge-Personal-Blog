// Adds an event listener to the blog form submission
document.getElementById('blog-form').addEventListener('submit', function(event) {
  // Prevents the default form submission, which stops the page from reloading
  event.preventDefault();

  // Logs a message indicating that the form was submitted
  console.log('Form submitted');

  // Retrieves the values from the form inputs and trims any whitespace
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  // Accesses the HTML element that displays error messages
  const errorMessage = document.getElementById('error-message');

  // Validates that none of the input fields are empty
  if (!username || !title || !content) {
      // Displays an error message if any field is empty
      errorMessage.textContent = "Please fill in all fields before submitting.";
      // Logs a message if validation fails
      console.log('Validation failed');
      // Stops further execution of the function
      return;
  }

  // Logs a message if all validations pass
  console.log('Validation passed');

  // Constructs a blog post object from the form data
  const blogPost = {
      username,
      title,
      content
  };

  // Logs the blog post data for debugging
  console.log('Blog Post:', blogPost);

  // Calls a function to store the blog post data; assumes this function is defined elsewhere
  storeBlogPost(blogPost);

  // Redirects to the blog page after submission
  window.location.href = 'blog.html';
});

