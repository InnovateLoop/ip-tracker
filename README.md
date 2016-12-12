# IP-Tracker

Performs simple lookup to find approximate coordinates while given an ip address.

## How to use

Import the module within into your program, and use as shown.

var tracker = require('ip-tracker');

tracker('52.64.32.34'); 

Returns Object in format

    {
        latitude: 72,
        longitude: 43
    }
