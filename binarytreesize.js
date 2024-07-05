/*
Given a binary tree, find its maximium depth.
The maximum depth is the number of nodes along the longest
path from the root node down to the farthest leaf node
A leaf is a node with no children
[3,9,20,null,null,15,7] should return depth=3;
1-               3
              /     \
2-           9      20
           /  \    /  \
3-      null null 15   7


if we can simply count the bit-size of the "binaryTree.length", we have the answer direct...
but we can count the Geometric Progression Sum of 2: 1 + 2 + 4 + 8 + 16...
and check the first value that's bigger than the length... so the binary three has 1 step less than this amount.
*/


function binaryTreeSize(binaryTree){
    let length = binaryTree.length;
    i=0;
    maxiter = 50;
    condition = false;
    while (!condition){
        let gsSum = 1*(2**i-1)/(2-1);
        if (length <= gsSum){
            condition = true;
            console.log(i);
        }
        i++;
    }
    }
    
    let b3 = [1, 5, 7, 10, 20, 14, 21];
    let b2 = [1, 5, null];
    let b1= [210000];
    let b4 = [1, 2, 2,3,3,3,3,4,4];
    let b41 = [1, 2, 2,3,3,3,3,4,4,4,4,4,4,4,4];
    let b5 = [1, 2, 2,3,3,3,3,4,4,4,4,4,4,4,4,5];
    
    binaryTreeSize(b1);
    binaryTreeSize(b2);
    binaryTreeSize(b3);
    binaryTreeSize(b4);
    binaryTreeSize(b41);
    binaryTreeSize(b5);