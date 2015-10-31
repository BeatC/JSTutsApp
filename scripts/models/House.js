var Identifier = require('../utility/Identifier');
var $ = require('jquery');

var id = new Identifier();

var House = function (options) {
    var ident = id.getNext();

    var that = this;

    this.findApartment = function (id) {
        for (var i in that.apartmentList) {
            if (that.apartmentList[i].getId() === id) {
                return that.apartmentList[i];
            }
        }
    };

    this.getId = function () {
        return ident;
    };

    this.address = options.address || null;
    this.apartmentList = options.apartmentList || [];
};

module.exports = House;