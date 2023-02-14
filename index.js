const elPokeList = document.querySelector("#poke-list");

const elPokeTemplate = document.querySelector(".poke-temp").content;

const pokeFragment = document.createDocumentFragment();

for (const poke of pokemons) {
  const pokeTempClone = elPokeTemplate.cloneNode(true);

  pokeTempClone.querySelector(".poke-title").textContent = poke.name;
  pokeTempClone.querySelector(".poke-img").src = poke.img;
  pokeTempClone.querySelector(".poke-time").textContent = poke.spawn_time;
  pokeTempClone.querySelector(".poke-type").textContent = poke.type.join(", ");

  pokeFragment.appendChild(pokeTempClone);

};

elPokeList.appendChild(pokeFragment);