"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMassofCargoItems = this.sumMass(this.cargoItems);
        var totalAstronautMass = this.sumMass(this.astronauts);
        return totalMassofCargoItems + totalAstronautMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var totalMassWithItem = this.currentMassKg() + item.massKg;
        return totalMassWithItem <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (item) {
        if (this.canAdd(item)) {
            this.cargoItems.push(item);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
