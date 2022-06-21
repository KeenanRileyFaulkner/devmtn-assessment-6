const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    it('returns an array', () => {
        const shuffled = shuffleArray([1, 3, 5, 7, 9, 2, 4, 6, 8]);
        expect(typeof shuffled).toBe('object');
    });

    it('returns an array of the same length as the one passed in', () => {
        const shuffled = shuffleArray([1, 3, 5, 7, 9, 2, 4, 6, 8]);
        expect(shuffled.length).toBe(9);
    });

    it('has all the same items as the original param', () => {
        const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8]
        const shuffled = shuffleArray(arr);
        let contains = true;
        for(let i = 0; i < arr.length; ++i) {
            if (shuffled.includes(arr[i])) {
                continue;
            } else {
                contains = false;
                break;
            }
        }

        expect(contains).toBe(true);
    });

    it('changes the order of the array elements', () => {
        const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8]
        const shuffled = shuffleArray(arr);
        expect(shuffled).not.toEqual(arr);
    })
})