// const nemo = ['poop','nemo']

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo'){
//             console.log('found nemo')
        
//         }
//     }
// }

// findNemo(nemo);



// this is a O(n) --> linear time notation becaues there is an operation for each element in the array

// console.log(fuck.length)

// function poop(items) {
//     console.log(items[4]); //O(1)

//     var middleIndex = Math.floor(items.length/2);
//     var index = 0;

//     while (index < middleIndex) {
//         console.log(items[index]);
//         index++;
//     }

//     for (let i = 0; i < 100; i++){
//         console.log('hi')
//     }
// }

// poop(fuck);

// this is an O(n) 

// const boxes = [1,2,3,4,5]

// function logAllPairsOfArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         // console.log('the first for loop ran')
//         for (let j = 0; j < array.length; j++) {
//             // console.log('second loop ran')
//             console.log(array[i], array[j])
//         }
//     }
// }
// O(n^2)
// logAllPairsOfArray(boxes)

// console.log(boxes.length)

//space complexity 

// function boooo(n) {
//     for (let i = 0; i < n.length; i++) {
//         console.log('booo');
//     }
// }

// boooo([1,2,3,4,5])


// var people 
// const people = [{
//     name: 'joseph',
//     age: 19 
// }];

// console.log(people[0])


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next:null 
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
}


