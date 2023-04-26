/* Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX. */

let hexInput = '#00FFC0';

// Split hex string into 3 octets 
const splitHex = (hexStr, octetNum) => {
    let result = [];
    hex = hexStr.split('');
    if (octetNum === 1){
        result.push(hex[1]);
        result.push(hex[2]);
    } else if (octetNum === 2){
        result.push(hex[3]);
        result.push(hex[4]);
    } else if (octetNum === 3){
        result.push(hex[5]);
        result.push(hex[6]);
    }
    return result;
}

let octet1 = splitHex(hexInput, 1);
let octet2 = splitHex(hexInput, 2);
let octet3 = splitHex(hexInput, 3);

// Convert hex digit to decimal
// 10 = A, 11 = B, 12 = C, 13 = D, 14 = E, 15 = F
const convToDecimal = octet => {
    
}



// Combine 3 octet numbers and form into RGB string format