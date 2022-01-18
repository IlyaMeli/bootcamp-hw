const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog-data";
mongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to Database");
    }
    const db = client.db(databaseName);
    db.collection("users").createIndex({ email: 1 }, { unique: true });
    db.collection("users").insertMany(
      [
        {
          name: "timo",
          email: "timo2@gmail.com",
        },
        {
          name: "leo",
          email: "leo@gmail.com",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(error.message);
        }
        console.log("Connected successfully to Database");
      }
    );
    db.collection("posts").insertMany(
      [
        {
          title: "post1",
          text: "content1",
          tags: ["1", "2"],
          Owner: {
            $ref: "users",
            $id: "ObjectId('61e6bfd32541f6da64a1ec06')",
            $db: "users",
          },
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(error.message);
        }
        console.log("Connected successfully to Database");
      }
    );
  }
);
