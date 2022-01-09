import fs from "fs";

fs.writeFile("ilya.text", "Hello AppleSeeds", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.copyFile("ilya.text", "ilya2.text", (err) => {
  if (err) throw err;
  console.log("Copied!");
});

fs.rename("ilya.text", "YOYOYO.text", (err) => {
  if (err) throw err;
  console.log("Renamed!");
});

fs.readdir("./", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
