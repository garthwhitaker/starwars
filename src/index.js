const people = require("./starwars-people.json");
const ships = require("./starships.json");

const names = people.reduce((previousValue, currentValue) => {
  previousValue.push(currentValue.name);
  return previousValue;
}, []);

const all = names;
const random = number => {
  if (number) {
    result = [];
    for (let i = 0; i < number; i++) {
      result.push(names[Math.floor(Math.random() * names.length)]);
    }
    return result;
  } else {
    return names[Math.floor(Math.random() * names.length)];
  }
};

const starships = () => {
  return ships.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.name);
    return previousValue;
  }, []);
};
module.exports = {
  all,
  random,
  starships
};
