// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.MY_PORT || 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`🚀 Listening to traffic on port ${PORT} 🚀`);
});
