//dependencies

const app = require("./app.js");

//configuration

require("dotenv").config();
const PORT = process.env.OUR_PORT;

//listen

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
