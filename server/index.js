const axios = require("axios");
const server = require("./src/server.js");
const { conn, Country } = require('./src/db');
const PORT = 3001;
const getApiCountries = require('./src/controllers/getData.js')

conn.sync({ force: true }).then(async () => {
  const dbCountries = await Country.findAll()
  if(!dbCountries.length){
    getApiCountries()
  }

  server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);  
})


}).catch(error => console.error(error))
  
