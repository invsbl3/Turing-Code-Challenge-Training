/*
There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

Example 1:

Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow.
Example 2:

Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
After two seconds, the 3rd person is holding the pillow.
*/

/*
# Code
* @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    remainder = time % (n-1); // places to walk after last border
    direction = Math.floor(time / (n-1)) % 2; // odd going back, even going further
    let position = 1;
    if (direction == 0){
        position = remainder + 1;
    }
    if (direction == 1){
        position = n - remainder;
    }
    return position;
};


/*
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is simple to understand but a bit hard to figure out...
# Approach
<!-- Describe your approach to solving the problem. -->
We have to understand the game between the sequence and the positions that we need to walk from a border to another...
First I had problems because I was thinking about Array Indexes...

After I start to think just about the numbers, I saw that we need to walk `(n-1)` steps to the other border...

Since the beginning I was aware that I needed to know if I'm going further or back (so I needed something about 2*n...)

I checked using my hands the cases in which n=5...
the times in the borders are (0,4,8,12) (mod 4)
I checked the times in the fourth finger, and notice that if the quotient is even or odd it marks the direction...

After, I noticed that if we are going further, then the position is `1+remainder` and if we are going back the position is `n - remainder`, and that made sense after thinking a bit...

That was not easy for me, I found this problem hard because I thought I understood very-well and looked easy, but was way lot trickier.

 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)?

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

*/