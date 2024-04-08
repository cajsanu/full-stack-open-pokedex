describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5001");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("navigating to single pokemon page works", () => {
    cy.visit("http://localhost:5001");
    cy.contains("ivysaurus").click();
    cy.contains("chlorophyll")
  });
});
