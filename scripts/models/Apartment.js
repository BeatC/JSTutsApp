var Identifier = require('../utility/Identifier');
var completeDescription = require('../controllers/completeDescription');
var id = new Identifier();


var Apartment = function (options) {
    var ident = id.getNext();
    this.getId = function () {
        return ident;
    };

    var that = this;

    this.completeDescription = function () { return completeDescription(that); };
    this.number = options.number || null;
    this.floor = options.floor || null;
    this.roomList = options.roomList || [];
    this.photo = options.photo || '';

    this.getDescription = function () {
        var result = '';
        this.roomList.forEach(function (el) {
            result += el.getRoomDescription();
        });
        return result;
    };
};

module.exports = Apartment;