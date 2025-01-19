// Code your solution in this file!

function distanceFromHqInBlocks (pickupLocation){
    const hq = 42;
    return Math.abs (pickupLocation-hq)
}


function distanceFromHqInFeet (pickup){
    const hq = 42;
    const feetPerBlock = 264;
    const blocks = Math.abs(pickup - hq);
    return  blocks * feetPerBlock;
}

function distanceTravelledInFeet (destination,start){
    const feetsPerBlock = 264
    const blocksTravelled = Math.abs(destination-start)
    return blocksTravelled * feetsPerBlock
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free fare
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // Per-foot fare
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare
    } else {
        return 'cannot travel that far'; // Ride not allowed
    }
}
