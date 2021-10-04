export default function filterPokemon(pokeList, name) {
  if (
    name === "" ||
    name === null ||
    name === undefined ||
    pokeList === null ||
    pokeList === undefined
  )
    return [];
  return (
    Array.isArray(pokeList) &&
    pokeList.filter((pokemon) => {
      return pokemon.name.includes(name);
    })
  );
}
