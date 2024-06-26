
# Wikipedia Search App
A simple web application that allows users to search for Wikipedia articles and display the results in a user-friendly manner.

You can see a live demo of the project here.

# Features
- User-friendly interface for searching Wikipedia articles.
- Displays search results with titles, descriptions, and URLs.
- Responsive design using Bootstrap.
  
# Usage
- Open the index.html file in your web browser.
- Type a keyword in the search input field and press Enter.
- The search results will be displayed below the search input field.
  
# Code Explanation
### HTML (index.html)
- Links to Bootstrap for responsive design and styling.
- Links to an external CSS file (style.css) for custom styles.
- Contains the search input field and a container to display search results.
- Includes scripts for jQuery, Popper.js, Bootstrap, and FontAwesome.
- The body contains a main container, a header with a search input, a spinner for loading, and a section for displaying search results.
- Loads the JavaScript file (wikipedia.js) that handles the search functionality.
  
### CSS (style.css)
- Imports Google Fonts for typography.
- Defines custom styles for the main container, search header, logo, search input, and search results.
- Ensures a clean and modern look for the application.
  
### JavaScript (wikipedia.js)
- Selects HTML elements (search input, search results container, spinner) using document.getElementById.
- Defines a function createAndAppendSearchResult to create and append search result elements (title, URL, description) to the results container.
- Defines a function displayResults to toggle the spinner and display the search results.
- Defines a function searchWikipedia to fetch search results from the Wikipedia API when the Enter key is pressed.
- Uses the Wikipedia Search API endpoint (https://apis.ccbp.in/wiki-search) to fetch search results based on the user's input.
- Adds an event listener to the search input field to trigger the search on Enter key press.
- 
### Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery
- Wikipedia Search API
