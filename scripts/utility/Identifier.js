var Identifier = function () {
    var ident = 0;
    this.getNext = function () {
        return ident++;
    };

    this.clear = function () {
        ident = 0;
    };
};

module.exports = Identifier;