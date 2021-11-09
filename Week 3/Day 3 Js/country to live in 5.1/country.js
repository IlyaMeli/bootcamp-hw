const countryToLiveIn = (language, isIsland, population, country) => {
  if (typeof language !== "string") {
    return "language has to be a a string";
  }
  if (typeof country !== "string") {
    return "country has to be a a string";
  }
  if (typeof isIsland !== "boolean") {
    return "isIsland has to be a a boolean";
  }
  if (typeof population !== "number") {
    return "population has to be a number";
  }
  if (population < 50 && language === "English" && isIsland === false) {
    return "You should live in " + country;
  } else {
    return country + " does not meet your criteria";
  }
};

console.log(countryToLiveIn("English", false, 49, "Finland"));
