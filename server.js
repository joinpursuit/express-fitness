const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.OUR_PORT || 3335;

app.listen(PORT, () => {
  console.log(`listening for traffic on port ${PORT}`);
});
