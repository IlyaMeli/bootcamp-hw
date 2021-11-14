let steps = (n) => {
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        res += "#";
      } else {
        res += "!";
      }
    }
    console.log(res);
  }
};
// ask mordi about the algoritm, not sure.
steps(4);
