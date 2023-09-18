function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + sumRecursion(nums.slice(1));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
const arry = [1, 2, 3, 4, 5];
console.log(sumFor(arry));
console.log(sumWhile(arry));
console.log(sumRecursion(arry));
console.log(sumTheSimpleWay(arry));
