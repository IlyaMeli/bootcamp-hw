const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: { meats: ["ham", "chicken"], fish: ["pike"] },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: { meats: ["bird", "rooster"], fish: ["salmon"] },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const getNames = (arr) => {
  return arr.map((element) => {
    return element.name;
  });
};

const getBirthdays = (arr) => {
  let dateArr = [];
  arr.forEach((element) => {
    if (element.birthday.split("-")[2] < 1990) {
      dateArr.push(element);
    }
  });
  return dateArr;
};
console.log(getBirthdays(data));

const getDifferentFood = (arr) => {
  let foodArr = [];
  let allFood = {};
  arr.forEach((user) => {
    user.favoriteFoods.meats.forEach((meaty) => {
      if (allFood[meaty]) {
        allFood[meaty]++;
      } else {
        allFood[meaty] = 1;
      }
    });
    user.favoriteFoods.fish.forEach((fishy) => {
      if (allFood[fishy]) {
        allFood[fishy]++;
      } else {
        allFood[fishy] = 1;
      }
    });
  });
  return allFood;
};
console.log(getDifferentFood(data));
