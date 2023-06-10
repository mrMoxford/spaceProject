
// function longestSubstring(s){
//     let longest = 0;

//     for(let i= 0 ; i < s.length ; i++){
//         let current = "";
//         for(let j = i ; j < s.length; j++){

//             if (current.includes(s[j])){
//               break;

//             }
//             current += s[j];
//             longest = Math.max(longest , current.length);

//         }

//     }

//     console.log(longest) 


// }
// longestSubstring("catbbcater");



function longestSubstring(s) {

    if (s.length < 2) {
        return s.length;
    }
    let map = {};
    let front = 0; back = 0; maxLength = 0;

    for (; front < s.length; front++) {
        let exists = map[s[front]];
        console.log(exists)
        if (exists && back < exists) {
            back = exists + 1;

        }
        map[s[front]] = front;
        // console.log(map);
        maxLength = Math.max(maxLength, front - back + 1);
    }
    return maxLength;
// }
// this is a better version of the code above that handles spaces and the last character because if the last character exists then the previus code would give us an error when we updated the back:
function longestSubstring(s) {
    if (s.length < 2) {
        return s.length;
    }
    let map = {};
    let front = 0;
    let back = 0;
    let maxLength = 0;

    for (; front < s.length; front++) {
        const c = s[front];
        if (c === " ") {
            continue;
        }
        const exists = map[c];
        if (exists !== undefined && back < exists) {
            back = exists + 1;
        }
        map[c] = front;
        maxLength = Math.max(maxLength, front - back + 1);
    }
    return maxLength;
// }


// longestSubstring("abccbacsc");

function removeDuplictes (array){
    let index = 1;
    for (i = 0; i < array.length-1; i ++){

        if (array[i] !== array[i+1]){
            array[index]= array[i+1];
            index += 1
        }
       }
       return array;
    }




// console.log(removeDuplictes([1,1,2,2,3,3,4,4,5,5]))
// // }

// // removeDuplictes([1,1,2,...ars])


//     function fizzBuzz (n){

//         for (let i = 1; i <= n ; i ++){
//             let output = [];
//             if (i%3 === 0){output += "Fizz"}
//             if (i%5 === 0){output += "Buzz"} 
//             if (output == 0) {output +=`"${i}"`};
//            console.log(output) 
//         }

//     }

//   fizzBuzz(100)

// function timed (f){
//     return function (...args)  {
//     console.log(`Entering function ${f.name}`);
//     let startTime = Date.now();
//     try{
//         return f(...args);
//     }
//     finally {
//         console.log(`Exiting ${f.name} after ${Date.now()-startTime}ms`);
//     }
// }

// }

// function benchmark (n){
//     let sum= 0; 
//     for (let i = 0; i <=n ; i ++){
//         sum += i
//     }
//      console.log(sum);

// }

// timed(benchmark)(1000000)


// 



function containsRansom(a, b) {
    if (b.length < a.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            b.
        }
    }
}

function canConstruct(ransomNote, magazine) {
    // Create a dictionary that maps each character in the magazine string
    // to its frequency
    const freq = {};
    for (const c of magazine) {
        if (c in freq) {
            freq[c] += 1;
        } else {
            freq[c] = 1;
        }
    }

    // Iterate through the ransomNote string and decrement the frequency
    // of each character in the dictionary
    for (const c of ransomNote) {
        if (c in freq) {
            freq[c] -= 1;
            if (freq[c] < 0) {
                // If the frequency becomes negative, it means that the
                // character is not present in the magazine in sufficient
                // quantity, so we return false
                return false;
            }
        } else {
            // If the character is not present in the dictionary, it means
            // that it is not present in the magazine at all, so we return
            // false
            return false;
        }
    }

    // If we are able to iterate through the entire ransomNote string
    // without returning false, it means that the ransomNote can be
    // constructed using the letters in the magazine, so we return true
    return true;
}
  
  
  time complexity is O(n) space complexity is O(1)


  a faster method

function canConstruct(ransomNote, magazine) {
    // Create an array of size 26 to store the frequencies of the
    // characters in the magazine string
    const freq = new Array(26).fill(0);
    for (const c of magazine) {
        // Convert the character to a 0-based index by subtracting 'a'
        const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[i] += 1;
    }

    // Iterate through the ransomNote string and decrement the frequency
    // of each character in the array
    for (const c of ransomNote) {
        // Convert the character to a 0-based index by subtracting 'a'
        const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (freq[i] > 0) {
            freq[i] -= 1;
        } else {
            // If the frequency is 0 or negative, it means that the
            // character is not present in the magazine in sufficient
            // quantity, so we return false
            return false;
        }
    }

    // If we are able to iterate through the entire ransomNote string
    // without returning false, it means that the ransomNote can be
    // constructed using the letters in the magazine, so we return true
    return true;
}

  more Readable

function canConstruct(ransomNote, magazine) {
    // Create a Map object to store the frequencies of the characters
    // in the magazine string
    const freq = new Map();
    for (const c of magazine) {
        if (freq.has(c)) {
            freq.set(c, freq.get(c) + 1);
        } else {
            freq.set(c, 1);
        }
    }

    // Iterate through the ransomNote string and decrement the frequency
    // of each character in the Map
    for (const c of ransomNote) {
        if (freq.has(c)) {
            const count = freq.get(c);
            if (count > 0) {
                freq.set(c, count - 1);
            } else {
                // If the frequency is 0 or negative, it means that the
                // character is not present in the magazine in sufficient
                // quantity, so we return false
                return false;
            }
        } else {
            // If the character is not present in the Map, it means that it
            // is not present in the magazine at all, so we return false
            return false;
        }
    }

    // If we are able to iterate through the entire ransomNote string
    // without returning false, it means that the ransomNote can be
    // constructed using the letters in the magazine, so we return true
    return true;
}
//---------------------------------------------------------------{explanation}--------------------------------------------------------------------------