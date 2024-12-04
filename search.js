// Function to toggle the search input visibility
function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('show'); // Toggle visibility using CSS class
    searchInput.focus(); // Automatically focus the input field when it appears
  }
  
  // Function to handle the search query
  function searchQuery(event) {
    if (event.key === 'Enter') {
      const searchQuery = document.getElementById('search-input').value;
      // Redirect to the search page with the search query in the URL
      window.location.href = `search.html?search=${encodeURIComponent(searchQuery)}`;
    }
  }
  