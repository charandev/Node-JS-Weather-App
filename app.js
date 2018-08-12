const geocode = require('./geocode/geocode.js');
const yargs = require('yargs');
const request = require('request');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
  a: {
    demand:true,
    alias:'address',
    descrbe:'Address for fetching data',
    string:true
  }
  })

  .help()
  .alias('help','h')
  .argv

  geocode.geoAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    }
    else{
      console.log(results.address);
        weather.weatherJS(results.latitude,results.longitude,(errorMessage,weatherResults) => {
        if(errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
        }
    });

  }
  });
