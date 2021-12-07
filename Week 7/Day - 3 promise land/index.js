const myFunc = (numbers) => {
  return new Promise((resolve, reject) => {
    if (numbers > 10) {
      resolve("OK");
    } else {
      reject("Numbers is less than 10 ");
    }
  });
};

myFunc(1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
