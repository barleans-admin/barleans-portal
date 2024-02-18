function renderSiteTemplate() {
    // Render nav bar
    let navElement = document.getElementsByTagName("nav");

    if(navElement != null) {
        navElement.innerHTML = `
            <a href="/home/>Home</a>
            <a href="/make-a-request/>Make a Request</a>
            <a href="/my-requests/>My Requests</a>
        `;
    }
}

renderSiteTemplate();