
const request = require('request');

var geoAddress = (address, callback) =>{
var encodeCode = encodeURIComponent(address);

request({

url :  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeCode}`,
json:true
},(error,response,body)=>{
// console.log(JSON.stringify(,undefined,2));
if(error){
  callback('Unable to connect to the Google servers!');
} else if(body.status === 'ZERO_RESULTS'){
  console.log('We are unable to find that location you provided.')
}else if(body.status === 'OK'){
  callback(undefined,  {
    address : body.results[0].formatted_address,
    latitude :  body.results[0].geometry.location.lat,
    longitude : body.results[0].geometry.location.lng
  });
 }
});
};

module.exports.geoAddress = geoAddress;
