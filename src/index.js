import people from "./starwars-people.json";
import ships from "./starships.json";

const names = people.reduce((previousValue, currentValue) => {
  previousValue.push(currentValue.name);
  return previousValue;
}, []);

const all = names;
const random = number => {
  if (number) {
    let result = [];
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
