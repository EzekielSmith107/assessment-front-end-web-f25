function favoriteColor(event) {
    alert("My favorite color is mareep yellow!");
};

function favoritePlace(event) {
    alert("My favorite place is the Cerulean City Gym!");
};

function favoriteRitual(event) {
    alert("My favorite ritual is walking my pokemon!");
};

document.getElementById("color").addEventListener("click", favoriteColor);
document.getElementById("place").addEventListener("click", favoritePlace);
document.getElementById("ritual").addEventListener("click", favoriteRitual);