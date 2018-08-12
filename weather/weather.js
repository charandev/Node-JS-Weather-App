var request = require('request');


var weatherJS = (lat,lng,callback) => {
request({
url :  `https://api.darksky.net/forecast/4deb4cca79eb1bbbc1e21fcf2913c999/${lat},${lng} `,
json:true
},(error,response,body)=>{
if(!error && response.statusCode === 200){
callback(undefined, {
  temperature : body.currently.temperature,
  apparentTemperature: body.currently.apparentTemperature
})
} else {
console.log('Unable to fetch Weather.');
}

});

}

module.exports.weatherJS = weatherJS;
