// I stored the "letters" in a string and the "other chars" in another string.
// I saved in an array with the size of the original string if in each position we got
// a letter or not...
// then, in a new string, 
// I glued the last letter of "letters" if it is a letter, and cut it off of "letters"
// or I glued the other char from "other char", and cut it off of "chars"


let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let test2 = "ab-cd";
let test = "ao2irgjaoiegnFAIUEHFUIAWHEFj9043t54y54;6745=60-bp3=q6p3b-4=;65=-3qa/-=ta34";
let letters = "";
let others = "";
let isletter = [];
for (i=0;i<test.length;i++){
    if (alphabet.includes(test[i])){
        letters += test[i];
        isletter[i] = true;
    }
    else{
        others += test[i];
        isletter[i] = false;
    }
}
let stringreversed = "";
for (i=0;i<isletter.length;i++){
    if (isletter[i]){
        stringreversed += letters[letters.length-1];
        letters = letters.slice(0, letters.length-1);
    }
    else{
        stringreversed += others[0];
        others = others.slice(1);
    }
}
console.log(stringreversed);