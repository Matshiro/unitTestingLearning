function stringFunction(){
    let string = "yes papi";
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function stringReverse(string){
    string = string.split("").reverse().join("");
    return string;
}

function ceaserCipher(string, shift){
    if (shift < 0 || shift > 26){
        return "Shift value must be between 0 and 26";
    }

    let stringArr = string.split("")
    let cipherArr = [];
    let result;
    let sum;
    stringArr.forEach(element => {
        if (element == "." || element == ","){
            let char = element.charCodeAt(0);
            sum = char;
        }
        else if (element == element.toUpperCase()){
            let char = element.charCodeAt(0);
            sum = char + shift;
            if (sum > 90){
                sum -= 26
            }
            if (sum < 65){
                sum += 26
            }
        }
        else if(element !== element.toUpperCase()){
            let char = element.charCodeAt(0);
            sum = char + shift;
            if (sum > 122){
                sum -= 26
            }
            if (sum < 97){
                sum += 26
            }
        }

        cipherArr.push(String.fromCharCode(sum));
    });
    result = cipherArr.join("")
    return result
}

class Calculator{

    add(valueOne, valueTwo){
        return valueOne + valueTwo;
    }

    subtract(valueOne, valueTwo){
        return valueOne - valueTwo;
    }

    divide(valueOne, valueTwo){
        return valueOne / valueTwo;
    }

    multiply(valueOne, valueTwo){
        return valueOne * valueTwo;
    }
};

exports.stringFunction = stringFunction;
exports.stringReverse = stringReverse;
exports.ceaserCipher = ceaserCipher;
exports.Calculator = Calculator;