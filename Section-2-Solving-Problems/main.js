// function isItCommon(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             console.log('i went')
//             if (array1[i] === array2[j]) {
//                 console.log(array1[i], array2[j])
//                 return true
//             }
//         }
//     }
// }

// isItCommon([1,2,2,4,5] , [6,8,8,9,5])

function commonItem(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    console.log(map)
    for (let j = 0;  j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

commonItem(['a','b','c'], ['x','y','z'])

const strings = ['a', 'b', 'c', 'd']

strings.push('e')


strings.
console.log(strings)

