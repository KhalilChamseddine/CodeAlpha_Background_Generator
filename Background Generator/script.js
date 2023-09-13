// Function to generate a random hex color code
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listeners for buttons
document.getElementById("randomColorBtn").addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("customColorBtn").addEventListener("click", function () {
    const customColor = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = customColor;
});
