const starwars = require("./index");
const expect = require("chai").expect;

describe("starwars", () => {
  function isArrayOfStrings(items) {
    return items.every(item => typeof item === "string");
  }
  describe("all", () => {
    it("should be an array of strings", () => {
      expect(starwars.all).to.satisfy(isArrayOfStrings);
    });
  });

  describe("random", () => {
    it("should be a random person", () => {
      const first = starwars.random();

      expect(starwars.all).to.include(first);
    });

    it("should be a return an array of random people", () => {
      const people = starwars.random(3);
      people.forEach(person => expect(starwars.all).to.include(person));
    });
  });

  describe("starships", () => {
    it("should return a array of starships", () => {
      const starships = starwars.starships();
      expect(starships).to.satisfy(isArrayOfStrings);
    });
  });
});
