// Code your solution in this file!
// js

function distanceFromHqInBlocks(block) {
    // takes in a pickup location for a passenger, and returns the
    // number of blocks from Scuber headquarters on 42nd Street.
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(blocks) {
    // translates the number of blocks from headquarters to the
    // distance in feet. Each block in Manhattan is 264 feet long.
    return blocks * 264;
}

function distanceTravelledInFeet(startBlock, destBlock) {
    // takes in both the start and destination blocks, and returns
    // the number of feet travelled.
    return distanceFromHqInFeet((distanceFromHqInBlocks(startBlock))) - 
    distanceFromHqInFeet((distanceFromHqInBlocks(startBlock)));
}

