module.exports = function getBestRacer(distance) {
    return distance.reduce(
        getTrackBestResult,
        {
            frogIndex: 0,
            jumpsCount: Infinity,
        }
    ).frogIndex;
};

function getTrackBestResult(bestResult, currentFrogTrack, currentFrogIndex) {
    let jumpsCount = 0;
    let currIndexOnTrack = 0;

    while (currIndexOnTrack < currentFrogTrack.length) {
        jumpsCount++;
        currIndexOnTrack += currentFrogTrack[currIndexOnTrack];
    }

    if (jumpsCount < bestResult.jumpsCount && currentFrogIndex !== bestResult.frogIndex) {
        bestResult.jumpsCount = jumpsCount;
        bestResult.frogIndex = currentFrogIndex;
    }

    return bestResult;
}
