var number=parseInt(prompt('Enter multiple digits number'));
var temp=number;
var index=0;
var numbers=[];
var lastDigit
while(temp>0){
    lastDigit=temp%10;
    numbers[index]=lastDigit;
    index++;
    temp=temp-lastDigit;
    temp=temp/10;
}
console.log(numbers);
var ascendingNumbers=numbers.reverse();
console.log(ascendingNumbers);
for(i=0;i<ascendingNumbers.length;i++){
    switch(ascendingNumbers[i]){
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 8:
            console.log('nine');
            break;
    }
}