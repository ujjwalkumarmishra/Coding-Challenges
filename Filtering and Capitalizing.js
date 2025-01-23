const books = [
    { title: "The Great Gatsby", author: "f. scott fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "j.d. salinger", year: 1951 },
    { title: "The Road", author: "cormac mccarthy", year: 2006 },
    { title: "The Hunger Games", author: "suzanne collins", year: 2008 },
    { title: "The Fault in Our Stars", author: "john green", year: 2012 },
    { title: "The Girl on the Train", author: "paula hawkins", year: 2015 }
  ];
  
  // Function to capitalize author names
  function capitalizeAuthorName(author) {
    return author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');
  }
  
  // Filter and capitalize authors
  const filteredBooks = books
    .filter(book => book.year >= 2010) // Filter books published after 2010
    .map(book => ({
      title: book.title,
      author: capitalizeAuthorName(book.author), // Capitalize author name
      year: book.year
    }));
  
  // Output the filtered and modified array
  console.log(filteredBooks);
  