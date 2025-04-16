/**
 * @param {string} str
 * @return {string}
 */
 
function reverseString(str) {
    // Write your logic here
    let str1=str.split('')
    let i=0;
    let j=str.length-1;
    while(i<j){
        let temp=str1[i];
        str1[i]=str1[j];
        str1[j]=temp;
        i++;
        j--;
    }
    return str1.join('');
}

module.exports = { reverseString };