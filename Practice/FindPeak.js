function findAllPeakElements(nums) {

    let index = []

    if(nums.length == 1){
        index.push(0)
    }
    for(let i = 0; i < nums.length-1;i++){ // 4 6 8
        
        if(nums[i] > nums[i+1]) index.push(i)
        
    }

    if(nums[nums.length - 1] > nums[nums.length-2]) index.push(nums.length-1)
    
    return index
}

// Test the function
const nums1 = [1,];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7,8,9,3,8];

console.log(`Peak element index of : ${nums1} -> ${findAllPeakElements(nums1)}`);
console.log(`Peak element index of : ${nums2} -> ${findAllPeakElements(nums2)}`);
console.log(`Peak element index of : ${nums3} -> ${findAllPeakElements(nums3)}`);