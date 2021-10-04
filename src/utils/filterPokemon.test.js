import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    /* Your solution comes here */
    expect(Array.isArray(mockPokemonsData)).toBe(true);
    expect(Array.isArray(filterPokemon(mockPokemonsData, "c"))).toBe(true);
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    expect(mockPokemonsData.length === 0).toBe(true);
    expect(filterPokemon(mockPokemonsData, "").length === 0).toBe(true);
  });

  test("it should return an array with charizard object", () => {
    /* Your solution comes here */
    expect(
      mockPokemonsData.filter((pokemon) => {
        return pokemon.name.includes("charizard");
      }).length
    ).toBe(true);
    expect(filterPokemon(mockPokemonsData, "charizard").length > 0).toBe(true);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(mockPokemonsData !== null && mockPokemonsData !== "undefined").toBe(
      true
    );
    expect(
      filterPokemon(mockPokemonsData, "charizard") !== null &&
        filterPokemon(mockPokemonsData, "charizard") !== "undefined"
    ).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect("name" !== null && "name" !== "undefined").toBe(true);
    expect(
      filterPokemon(mockPokemonsData) !== null &&
        filterPokemon(mockPokemonsData) !== "undefined"
    ).toBe(true);
  });
});
