function randomGen(event) {
    const pokeStops = ["your mom's house in Twinleaf", "Poke Mart", "Old Chateau", "Amity Square", "Seven Stars Restraunt", "Pokemon Mansion"];
    const randomStop = pokeStops[Math.floor(Math.random() * pokeStops.length)];
    alert(`You should visit ${randomStop}!`);
}

document.getElementById("generate").addEventListener("click", randomGen);