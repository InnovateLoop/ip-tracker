var MaxmindDBReader = require('maxmind-db-reader');

module.exports= function(ip, arrayForm) {
    try {    MaxmindDB = MaxmindDBReader.openSync('./City.mmdb');

        var data = MaxmindDB.getGeoDataSync(ip).location;
    } catch (e) {
        console.log(e);
        return [-1, -1];
    }

    if(arrayForm === 1 || arrayForm === true)
        return [data.latitude, data.longitude];
    else
        return {
            latitude: data.latitude,
            longitude: data.longitude
        };
}
