var  moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.valueOf());


var timestamp = 1481824134196;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

//now.subtract(1, 'year');
//console.log(now.format());
//console.log(now.format('MMM Do YYYY, h:mma'));
