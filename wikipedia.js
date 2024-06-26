let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    // Creating Result Item -- div
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    //Creating Title Element -- anchor

    let resultTitleEl = document.createElement("a");
    resultItemEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultItemEl.target = "_blank";
    resultItemEl.appendChild(resultTitleEl);

    // Creating Break Element -- br
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    // Creating URL Element -- anchor url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    // Creating Break Element -- br
    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    // Creating Description Element -- line Description

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

}

function displayResults(searchResults) {
    // let result = searchResults[0];
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);