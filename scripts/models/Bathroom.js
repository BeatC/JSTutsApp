var Bathroom = function (options) {
    this.type = 'bathroom';
    this.shower = options.shower || false;
    this.bath = options.bath || false;
    this.boiler = options.boiler || false;
    this.getRoomDescription = function () {
        return ' Ванная: ' + (this.shower ? 'душ ' : '') + (this.bath ? 'ванная ' : '') + (this.boiler ? 'бойлер ' : '');
    }
};

module.exports = Bathroom;