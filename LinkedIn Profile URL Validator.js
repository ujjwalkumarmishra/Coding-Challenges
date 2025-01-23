// Function to validate LinkedIn profile URLs using regex
function validateLinkedInProfileURL(url) {
    // Regular expression for valid LinkedIn profile URL
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }