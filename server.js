const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config(); //loads envnvars from .env file into oru environment
const PORT = process.env.OUR_PORT || 8080;

//runs once after app is up and ready to accept traffic
app.listen(PORT, () => {
  console.log(`LISTENING for port ${PORT}`);
});
