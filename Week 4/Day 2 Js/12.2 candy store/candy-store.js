const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  let candyArr = candyStore.candies;
  return candyArr.filter((candy) => candy.id === id);
}
console.log(getCandy(candyStore, "as12f"));

function getPrice(candyStore, id) {
  let res;
  let candyArr = candyStore.candies;
  candyArr.forEach((candy) => {
    if (candy.id === id) {
      res = candy.price;
    }
  });
  return res;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name, id, price, amount: 1 });
}
addCandy(candyStore, "ilove", "mars", 3);

function buy(candyStore, id) {
  candyStore.candies.forEach((candy) => {
    if (candy.id === id) {
      candy.amount--;
      candyStore.cashRegister += candy.price;
    }
  });
}

buy(candyStore, "ilove");
console.log(candyStore);
