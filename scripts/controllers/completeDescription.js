function completeDescription(apartment) {
    var liveSquare = 0,
        kitchenSquare = 0,
        numSleep = 0,
        furniture, kitchenFurniture, technique, kitchenTechnique,
        shower, bath, boiler;

    for (i in apartment.roomList) {
        if (apartment.roomList[i].type === 'livingRoom') {
            liveSquare += apartment.roomList[i].area;
            numSleep += apartment.roomList[i].sleepPlaces;
            if (apartment.roomList[i].furniture) {
                furniture = true;
            }
            if (apartment.roomList[i].technique) {
                technique = true;
            }
        }
        if (apartment.roomList[i].type === 'kitchen') {
            kitchenSquare += apartment.roomList[i].kitchenArea;
            if (apartment.roomList[i].kitchenFurniture) {
                kitchenFurniture = true;
            }
            if (apartment.roomList[i].kitchenTechnique) {
                kitchenTechnique = true;
            }
        }
        if (apartment.roomList[i].type === 'bathroom') {
            if (apartment.roomList[i].bath) {
                bath = true;
            }
            if (apartment.roomList[i].shower) {
                shower = true;
            }
            if (apartment.roomList[i].boiler) {
                boiler = true;
            }
        }
    }
    return {
        roomNumber: apartment.roomList.length,
        liveSquare: liveSquare,
        kitchenSquare: kitchenSquare,
        isFurniture: furniture,
        kitchenFurniture: kitchenFurniture,
        numSleep: numSleep,
        isTechniq: technique,
        isKitchenTechniq: kitchenTechnique,
        isShower: shower,
        isBath: bath,
        isBoiler: boiler
    }
}

module.exports = completeDescription;