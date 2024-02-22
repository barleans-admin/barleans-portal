import { displayNameFromUserID } from "./common.js";

async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const user = await response.json();

    let userElement = document.querySelector(".nav-user");
    if(userElement != null) {
        userElement.textContent = "Hello, " + displayNameFromUserID(user.clientPrincipal.userDetails, true);
    } else {
        console.log("User element is null!");
    }
}

function renderSiteTemplate() {
    // Render nav bar
    let navElement = document.querySelector("nav");

    if(navElement != null) {
        navElement.innerHTML = `
            <div class="nav-links">
                <a href="/home/">Home</a>
                <a href="/make-a-request/">Make a Request</a>
                <a href="/requests/">Requests</a>
            </div>
            <div class="nav-right">
                <div class="nav-search">
                    <input type="text" placeholder="Search the portal...">
                </div>
                <div class="nav-user">
                </div>
            </div>
        `;
    }

    getUserInfo();
}

renderSiteTemplate();