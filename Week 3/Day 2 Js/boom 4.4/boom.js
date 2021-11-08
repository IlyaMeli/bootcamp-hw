const boom = (num) => {
  let res = "";
  for (let i = 1; i <= num; i++) {
    res = i;
    if (res % 7 === 0 && res.toString().includes(7)) {
      res = "BOOM-BOOM";
    } else if (res % 7 === 0) {
      res = "BOOM";
    }
    console.log(res);
  }
};
boom(18);
