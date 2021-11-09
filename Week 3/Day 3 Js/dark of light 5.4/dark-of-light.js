const darkOfLight = (color) => {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
    case "Pig":
      return "Light Color";
    case "blue":
    case "purple":
    case "brown":
      return "Dark color";

    default:
      return "Unknown Color.";
  }
};

console.log(darkOfLight("pink"));
