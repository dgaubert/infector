var Injector = require('./injector');
var Car = require('./car');
var ElectricEngine = require('./electric-engine');
var GasoilEngine = require('./gasoil-engine');

Injector.register('Engine', Math.random() > 0.5 ? ElectricEngine : GasoilEngine);

var car = Injector.process(Car);

car.start(); // (Fissiuuu!!!) || (Burruumm! Burruumm!)

