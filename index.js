// Code your solutions in this file
function writeCards(arr, event){
    let otherArr = [];
 for(let i=0; i<arr.length; i++) {
    let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    otherArr.push(message);
 }
 return otherArr
}

function countDown(num) {
    while (num>=0){
        console.log(num)
        num--;
    }
}
console.log( countDown(10))
