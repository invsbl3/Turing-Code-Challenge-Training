/*
you are given a list X, which is a sequence composed exclusively of 0s and 1s.
The task is to compute the length of the longest subsequence within this array
that alternates between 0s and 1s.

A subsequence is a sequence that can be derived from the original array by
deleting some or none of the elements, ensuring the order of the remaining
elements is mantained. An alternating subsequence is one where no two adjacent
elements are the same.Is simpler terms, the elements of the subsequence alternate
between 0 and 1.

Examples:
X = [0, 1, 0, 1, 0];
output = 5;

X = [0];
output = 1;
*/

function maxAlternations(X){
    
    maxAlternate = 1;
    for (i=0;i<X.length;i++){
        alternations = 1;
        for(j=i+1;j<X.length;j++){
            if(X[j-1] != X[j]){
                alternations += 1;
                if (alternations > maxAlternate){
                    maxAlternate = alternations;
                }
            }
            else{
                break;
            }
        }
        
    }
    
    console.log(maxAlternate)
    return maxAlternate;
}

X = [0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1];
X2=[0,0,0,0,0,0,0,0,0,0,0];
X3=[1,1,1,1,1,1,1,1,1,1,1];
X4=[0,1,1,1,0,0,0,0,0,0,1,1,1,1];
maxAlternations(X);
maxAlternations(X2);
maxAlternations(X3);
maxAlternations(X4);