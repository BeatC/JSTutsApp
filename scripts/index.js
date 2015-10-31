var House = require('./models/House');
var Apartment = require('./models/Apartment');
var Bathroom = require('./models/Bathroom');
var Kitchen = require('./models/Kitchen');
var LivingRoom = require('./models/LivingRoom');
var HouseController = require('./controllers/HouseController');

var newHouse = new House({
    address: "Салтовское шоссе 244"
});

// Apartments definition (begin)

var newApart = new Apartment({
    number: 10,
    floor: 2,
    photo: 'http://lorempixel.com/200/200/cats'
});

var apartTwo = new Apartment({
    number: 5,
    floor: 1,
    photo: 'http://lorempixel.com/200/200/sports'
});

// Apartments definition (begin)

// Rooms for the first apartment (begin)

newApart.roomList.push(new Bathroom({
    shower: true,
    bath: false
}));


newApart.roomList.push(new LivingRoom({
    photo: 'http://lorempixel.com/200/200',
    sleepPlaces: 2,
    furniture: true,
    area: 30
}));


newApart.roomList.push(new Kitchen({
    kitchenTechnique: true,
    kitchenFurniture: true,
    kitchenArea: 10
}));


// Rooms for the first apartment (end)

// Rooms for the second apartment (begin)

apartTwo.roomList.push(new Bathroom({
    shower: true,
    bath: false
}));


apartTwo.roomList.push(new LivingRoom({
    photo: 'http://lorempixel.com/200/200/cats',
    sleepPlaces: 4,
    furniture: true,
    technique: true,
    area: 35
}));

apartTwo.roomList.push(new LivingRoom({
    photo: 'http://lorempixel.com/200/200/sports',
    sleepPlaces: 2,
    furniture: true,
    technique: true,
    area: 20
}));

apartTwo.roomList.push(new Kitchen({
    kitchenTechnique: true,
    kitchenFurniture: true,
    kitchenArea: 20
}));

// Rooms for the first apartment (end)

newHouse.apartmentList.push(newApart);
newHouse.apartmentList.push(apartTwo);

var houseController = new HouseController({
    model: newHouse
});

houseController.render();

