const people = require("./starwars-people.json");

const names = people.reduce((previousValue, currentValue) => {
  previousValue.push(currentValue.name);
  return previousValue;
}, []);

const all = names;
const random = () => {
  return names[Math.floor(Math.random() * names.length)];
};

module.exports = {
  all,
  random
};
