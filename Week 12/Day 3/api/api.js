// const axios = require("axios");

// part 1
// const handleAxios = async () => {
//   const { data } = await axios.get(
//     "https://geek-jokes.sameerkumar.website/api?format=json"
//   );
//   console.log(data.joke);
// };

// handleAxios();

// part 2
// const request = require("request");
// request(
//   { url: "https://geek-jokes.sameerkumar.website/api?format=json" },
//   (err, response) => {
//     if (err) {
//       console.log("ERROR!");
//     } else {
//       console.log(JSON.parse(response.body).joke);
//     }
//   }
// );

// const {data} = await got.post('https://httpbin.org/anything', {
// 	json: {
// 		hello: 'world'
// 	}
// }).json();

// console.log(data);

// part 3
// const got = require("got");

// import got from "got";
// const handleGot = async () => {
//   const res = await got.get(
//     "https://geek-jokes.sameerkumar.website/api?format=json"
//   );
//   console.log(JSON.parse(res.body).joke);
// };
// handleGot();
