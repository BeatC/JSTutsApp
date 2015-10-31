var Kitchen = function (options) {
    this.type = 'kitchen';
    this.kitchenArea = options.kitchenArea || null;
    this.kitchenTechnique = options.kitchenTechnique || false;
    this.kitchenFurniture = options.kitchenFurniture || false;
    this.getRoomDescription = function () {
        var result = ' Кухня: ' + 'площадь ' + this.kitchenArea + 'м2 ' + (this.kitchenTechnique ? 'техника ' : '');
        result += this.kitchenFurniture ?  'мебель ' : '';
        return result;
    }
};

module.exports = Kitchen;