

///----------------------------------- {longest substring without repeating characters}----------------------------


//  function lengthOfLongestSubstring(s) {
//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     let charMap = {};
  
//     while (end < s.length) {
//       if (charMap.hasOwnProperty(s[end])) {
//         start = Math.max(start, charMap[s[end]] + 1);
//       }
//       charMap[s[end]] = end;
//       end++;
//       maxLength = Math.max(maxLength, end - start);
//     }
  
//     return maxLength;
//   }
// faster method below:

// function lengthOfLongestSubstring(s) {
//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     let indices = new Array(128).fill(-1);
  
//     while (end < s.length) {
//       if (indices[s.charCodeAt(end)] >= start) {
//         start = indices[s.charCodeAt(end)] + 1;
//       }
//       indices[s.charCodeAt(end)] = end;
//       end++;
//       maxLength = Math.max(maxLength, end - start);
//     }
  
//     return maxLength;
//   }
  

//   function timed (f){
//       return function (...args)  {
//       console.log(`Entering function ${f.name}`);
//       let startTime = Date.now().getTime();
//       try{
//           return f(...args);
//       }
//       finally {
//           console.log(`Exiting ${f.name} after ${Date.now().getTime()-startTime}ms`);
//       }
//   }
  
//   }
//-------------------------------------------------------{timing measure function}-----------------------------------------------------------------
  

// function measureExecutionTime(callback) {
//     const startTime = new Date().getTime();
//     callback();
//     const endTime = new Date().getTime();
//     console.log(`Execution time: ${(endTime - startTime).toFixed(4)}ms`);
//   }
//   // .toFixed is used to incease the number of decimal points 
//   // Example usage
//   measureExecutionTime(() => {
//     // code to measure goes here
//     function lengthOfLongestSubstring(s) {
//             let start = 0;
//             let end = 0;
//             let maxLength = 0;
//             let indices = new Array(128).fill(-1);
          
//             while (end < s.length) {
//               if (indices[s.charCodeAt(end)] >= start) {
//                 start = indices[s.charCodeAt(end)] + 1;
//               }
//               indices[s.charCodeAt(end)] = end;
//               end++;
//               maxLength = Math.max(maxLength, end - start);
//             }
          
//             return maxLength;
//           }

//         // Test case 1
//         let s = "abcabcbb";
//         let expectedOutput = 3;
//         let result = lengthOfLongestSubstring(s);
//         console.log(result === expectedOutput);

//         // Test case 2
//         let b = "bbbbb";
//         expectedOutput = 1;
//         result = lengthOfLongestSubstring(b);
//         console.log(result === expectedOutput);

//         // Test case 3
//         let c = "pwwkew";
//         expectedOutput = 3;
//         result = lengthOfLongestSubstring(c);
//         console.log(result === expectedOutput);

//         // Test case 4
//         let d = "abcdefghijklmnopqrstuvwxyz";
//         expectedOutput = 26;
//         result = lengthOfLongestSubstring(d);
//         console.log(result === expectedOutput);

//         // Test case 5
//         let e = "";
//         expectedOutput = 0;
//         result = lengthOfLongestSubstring(e);
//         console.log(result === expectedOutput);
      
//   });
//    // async version of the timing function 
//    async function measureExecutionTime(asyncFunction) {
//     const startTime = new Date().getTime();
//     await asyncFunction();
//     const endTime = new Date().getTime();
//     console.log(`Execution time: ${endTime - startTime}ms`);
//   }

//   await measureExecutionTime(async () => {
//     // some code that takes a long time to execute
//   });
  
 
 //--------------------------------------------------------------------{ retrn the median of two sorted arrays}----------------------------------- 

// let a = [1,2,3,4,5], b= [3,4,5,6,7,]
//  function medianOfTwoArrays (num1, num2) {
//     let c = [...num1,...num2].sort()

//     if (c %2 !== 0){
//         return c[Math.floor(c.length/2)]
//     }
//     else { return c[c.length/2] + c[(c.length/2)-1]}
//  }

// console.log(medianOfTwoArrays(a,b));

//-----------------------------------------------------------------------------{computer generated answer}--------------------------------------------

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
      // swap nums1 and nums2 to make sure nums1 is the shorter array
      [nums1, nums2] = [nums2, nums1];
    }
  
    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = m;
  
    while (left <= right) {
      let x = Math.floor((left + right) / 2);
      let y = Math.floor((m + n + 1) / 2) - x;
  
      if (x < m && nums2[y - 1] > nums1[x]) {
        // the median must be in the right part of nums1
        left = x + 1;
      } else if (y < n && nums1[x - 1] > nums2[y]) {
        // the median must be in the right part of nums2
        right = x - 1;
      } else {
        // we have found the median
        let maxLeft;
        if (x == 0) {
          maxLeft = nums2[y - 1];
        } else if (y == 0) {
          maxLeft = nums1[x - 1];
        } else {
          maxLeft = Math.max(nums1[x - 1], nums2[y - 1]);
        }
  
        if ((m + n) % 2 == 1) {
          // the merged array has an odd number of elements, the median is the middle element
          return maxLeft;
        }
  
        let minRight;
        if (x == m) {
          minRight = nums2[y];
        } else if (y == n) {
          minRight = nums1[x];
        } else {
          minRight = Math.min(nums1[x], nums2[y]);
        }
  
        // the merged array has an even number of elements, the median is the average of the two middle elements
        return (maxLeft + minRight) / 2;
      }
    }
  }
  

//-----------------------------------------------------------{test cases with expected answers}------------------------------------------------
    console.log(findMedianSortedArrays([1, 3], [2])); // should print 2.0
    console.log(findMedianSortedArrays([1, 2], [3, 4])); // should print 2.5
    console.log(findMedianSortedArrays([1, 5, 7], [2, 4, 6])); // should print 4.5
    console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])); // should print 3.5
    console.log(findMedianSortedArrays([], [1])); // should print 1.0
    console.log(findMedianSortedArrays([2, 3], [1])); // should print 2.0

    //---------------------------------------------------------------{explanation}--------------------------------------------------------------------------
//  The findMedianSortedArrays function uses a divide and conquer approach to find the median of two sorted arrays.

// The idea is to repeatedly divide the arrays in half until the median is found. This is done by using a binary search-like algorithm to find the middle index of the merged array, which we will call "x". Once we know the value of x, we can easily calculate the value of "y", which is the middle index of the second array.

// The key to this approach is to use the fact that the arrays are sorted to our advantage. If we know the value of x and y, we can compare the elements at those indices to determine which parts of the arrays to discard and which parts to keep.

// Here's how it works:

// If the element at index x in the first array is greater than the element at index y in the second array, then we know that the median must be in the left part of either the first or the second array (or both). In this case, we can discard the right part of the first array and continue the process with the remaining left parts.

// If the element at index x in the first array is less than the element at index y in the second array, then we know that the median must be in the right part of either the first or the second array (or both). In this case, we can discard the left part of the first array and continue the process with the remaining right parts.

// If the elements at indices x and y are equal, then we have found the median. If the merged array has an odd number of elements, then the median is the middle element, which is the element at index x (or y). If the merged array has an even number of elements, then the median is the average of the two middle elements, which are the elements at indices x-1 and x (or y-1 and y).

// This process is repeated until the median is found, which takes O(log (m+n)) time.

// I hope this explanation helps! Let me know if you have any other questions.




