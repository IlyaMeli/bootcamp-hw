const https = require("https");

const options = {
  method: "GET",
  hostname: "https://geek-jokes.sameerkumar.website/api?format=json",
};
const req = https.request(options, (res) => {
  console.log(res);
});
