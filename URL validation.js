// Function to validate URL using a regex
function validateURL(url) {
    // Regular expression for valid URL
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-_]+\.[a-zA-Z]+$/;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }