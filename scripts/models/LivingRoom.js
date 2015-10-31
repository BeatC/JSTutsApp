var LivingRoom = function (options) {
    this.photo = options.photo || null;
    this.type = 'livingRoom';
    this.sleepPlaces = options.sleepPlaces || null;
    this.furniture = options.furniture || false;
    this.technique = options.technique || false;
    this.area = options.area || null;
    this.getRoomDescription = function () {
        return ' Жилая комната: ' + (this.sleepPlaces ? 'cпальных мест ' + this.sleepPlaces + ' ' : '')
            + (this.furniture ? 'мебель ' : '')
            + (this.technique ? 'техника ' : '') + ('площадь ' + this.area + 'м2');
    }
};

module.exports = LivingRoom;