/*
Given an array of N integers, the cost of a range (subarray) is defined
as the sum of the values in the range squared. That .. if the sum of the
values of the range is S, its cost is S**2.

.. our task is to determine the largest cost of any contiguous subarray
within the given array.

Examples:
N = [1, -1, 1, -1, 1];
output = 1;
the maximum sum is 1, and its square is 1.

N = [1, 2, 3];
output = 36;
the sum of the entire array is 6, and its square is 36.

*/

N = [1,-1,1,-1,1,-1];

function maxSumSquared(N){
let maxSum = Number.NEGATIVE_INFINITY;
for (i=0;i<N.length;i++){
    sum = N[i];
    for (j=i+1;j<N.length;j++){
        sum += N[j];
        //console.log(i,j,sum,maxSum)
        if (sum > maxSum){
            maxSum = sum;
        }
    }
}

console.log("for the list", N, ", maxSum is", maxSum);
console.log("maxSumSquared is", maxSum**2);
return maxSum**2;
}


N2 = [1,2,3];
N3 = [1, -1000, 2, 3, 4, 5, 6 , -10, 7, 1];
N4 = [Number.POSITIVE_INFINITY-1, Number.NEGATIVE_INFINITY, 1, 2, 3];
maxSumSquared(N);
maxSumSquared(N2);
maxSumSquared(N3);
maxSumSquared(N4);