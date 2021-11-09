const passwordValidation = (password) => {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
};

const passwordValidation2 = (password) => {
  return password.length > 7 ? "Strong" : "Weak";
};

const passwordValidation3 = (password) => {
  return (password.length > 7 && "Strong") || "Weak";
};
// ask mordi if can use ||
const advancedValidation = (password) => {
  return password.length > 7 && password !== password.toLowerCase()
    ? "Very Strong"
    : (password.length > 7 && "Strong") || "Weak";
};
