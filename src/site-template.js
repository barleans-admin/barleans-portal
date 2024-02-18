function renderSiteTemplate() {
    console.log("Rendering...");
    // Render nav bar
    let navElement = document.querySelector("nav");

    if(navElement != null) {
        console.log("Nav element is not null");
        navElement.innerHTML = `
            <a href="/home/>Home</a>
            <a href="/make-a-request/>Make a Request</a>
            <a href="/my-requests/>My Requests</a>
        `;
    }
}

renderSiteTemplate();