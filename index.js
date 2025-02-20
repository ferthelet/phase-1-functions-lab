// Code your solution in this file!
// js

function distanceFromHqInBlocks(block) {
    // takes in a pickup location for a passenger, and returns the
    // number of blocks from Scuber headquarters on 42nd Street.
    return Math.abs(42 - block);
}


function distanceFromHqInFeet(block) {
    // translates the number of blocks from headquarters to the
    // distance in feet. Each block in Manhattan is 264 feet long.
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock, destBlock) {
    // takes in both the start and destination blocks, and returns
    // the number of feet travelled.
    return  distanceFromHqInFeet(destBlock) -
            distanceFromHqInFeet(startBlock);
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const freeDistance = 400;
    const pricePerFt = 0.02;
    const flatPrice = 25;
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= freeDistance) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - freeDistance) * pricePerFt;
    } else if (distance <= 2500) {
        return flatPrice;
    } else {
        return 'cannot travel that far';
    }
}
