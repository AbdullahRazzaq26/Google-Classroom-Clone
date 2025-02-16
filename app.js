var dropdown = document.getElementById("dropdown")
var showApps = document.getElementById("apps");
var notice = document.getElementById("notice");
var checkbox = document.getElementById("agreeCheckbox");
var continueBtn = document.getElementById("continueBtn");
var createClassForm = document.getElementById("create-class-modal")
var createCard = document.getElementById("createCard");
var createCardButton = document.getElementById("createCardButton")
var classnamee = document.getElementById("classnamee")
var section = document.getElementById("section")
var room = document.getElementById("room")
var subject = document.getElementById("subject")
var deleteCard = document.getElementById("deleteCard");



document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown");
    const dropdownBtn = document.getElementById("dropdown-btn");

    if (event.target === dropdownBtn) {
        if (dropdown.style.display === "block") {

            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";

        }
    } else {
        dropdown.style.display = "none";
    }
});




document.addEventListener("click", function (event) {
    const showApps = document.getElementById("apps");
    const appsIcon = document.getElementById("apps-icon");

    if (event.target === appsIcon) {
        if (showApps.style.display === "flex") {
            showApps.style.display = "none";
        } else {
            showApps.style.display = "flex";
        }
    } else {
        showApps.style.display = "none";
    }
});



function createClass() {
    if (notice.style.display === "flex") {
        notice.style.display = "none";
    } else {
        notice.style.display = "flex";
    }
}

function closeNotice() {
    notice.style.display = "none";
}

function toggleContinue() {
    if (!checkbox.checked) {
        continueBtn.disabled = true;
    } else {
        continueBtn.disabled = false;
    }
}

function continueNotice() {
    notice.style.display = "none";
    createClassForm.style.display = "flex"
}

function closeform() {
    createClassForm.style.display = "none";
}


function toggleCreateButton() {
    if (classnamee.value.trim() !== "" && section.value.trim() !== "" &&
        room.value.trim() !== "" && subject.value.trim() !== "") {
        createCardButton.disabled = false;
    } else {
        createCardButton.disabled = true;
    }
}


window.onload = function () {
    createCardButton.disabled = true;
};


classnamee.addEventListener("input", toggleCreateButton);
section.addEventListener("input", toggleCreateButton);
room.addEventListener("input", toggleCreateButton);
subject.addEventListener("input", toggleCreateButton);




function finalCard() {

    createClassForm.style.display = "none";
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `  <div id="card-header" class="card-header">
            <h3>${classnamee.value}</h3>
            <p>${section.value}</p>
            <span>${subject.value}</span>
        </div>
        <div class="card-body"></div>
        <div class="card-footer">
            <i class="fa-solid fa-id-badge"></i>
            <i class="fa-regular fa-folder"></i>
            <i class="fa-solid fa-trash" onclick="deletecard()"></i>
        </div>`;

    var colors = ["#0056b3", "#c2185b", "#009688", "#d84315", "#6a1b9a", "#1976d2", "#007bff", "#1B1464", "#0A3D62", "#6F1E51", "#D63031", "#B53471",
        "#EE5A24", "#1E3799", "#079992", "#833471", "#1289A7",
        "#ED4C67", "#CD6133", "#3C40C6", "#227093", "#2C2C54",
        "#F79F1F", "#A3CB38", "#009432", "#FFC312", "#D980FA"]
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    card.querySelector(".card-header").style.backgroundColor = randomColor;

    var cardcontainer = document.getElementById("card-container")
    cardcontainer.appendChild(card);

    console.log("✅ Card added successfully!");
}

function deletecard() {
    console.log("hh");  
    deleteCard.style.display = "flex"
}
function cancelDelete() {
    deleteCard.style.display = "none"
}
function delCard() {
    var card = document.querySelector(".card");
    card.remove();
    console.log("Card deleted successfully!");
    deleteCard.style.display = "none"


}