document.getElementById("pinkButton").addEventListener("click", function() {pink();});
document.getElementById("blueButton").addEventListener("click", function() {blue();});
document.getElementById("yellowButton").addEventListener("click", function() {yellow();});

function pink() {
    document.body.style.background = "rgba(250, 47, 240, 1)";
}

function blue() {
    document.body.style.background = "rgba(105, 227, 248, 1)";
}

function yellow() {
    document.body.style.background = "rgba(250, 220, 49, 1)";
}
