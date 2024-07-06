function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0]; // Assuming there's only one page in the response
            const extract = pages[pageId].extract;

            // Calling the callback function with the extract
            callback(extract);
        } else {
            console.error("Error fetching data:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Request failed");
    };

    xhr.send();
}

// Calling queryWikipedia with createElement as callback
queryWikipedia(createElement);