var $ = require('jquery');


var HouseController = function (options) {
    this.model = options.model || {};

    var that = this;

    this.render = function () {
        jade.render(document.getElementById('app'), 'HouseView', this.model);
        //var fn = jade.compileFile(this.template);
        //$('#app').html(fn(that.model));
    };
};

module.exports = HouseController;