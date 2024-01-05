
const breakingRecords = (scores) => {
    maxScore = scores[0];
    minScore = scores[0];
    maxCount = 0;
    minCount = 0;

    for (const score of scores) {
        if (score > maxScore) {
            maxScore = score;
            maxCount++;
        } else if (score < minScore) {
            minScore = score;
            minCount++;
        }
    }

    return [maxCount, minCount];
}

const scores = [12, 24, 10, 24, 16, 25];
console.log(breakingRecords(scores));
console.log(breakingRecords(scores));