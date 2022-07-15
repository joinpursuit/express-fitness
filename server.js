const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.OUR_PORT || 3003;

app.listen(PORT, () => {
  console.log(`Listening for traffic on port ${PORT}`);
});
