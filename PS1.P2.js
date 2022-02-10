// Problem Set 1 Problem 2
// Write a function that takes as its input the following formatted strings:
// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// ‘2^8’ (where ^ is exponentiation)
// This function should
// Determine the operator (+, *, -, ^, or /) embedded in the string
// Return a function to implement the input operator that returns the result
// For example, if the input string is ‘8%3’, return (left, right) => left % right

const implement = expression => evaluate(expression)

const evaluate = expr => {
    left = Number(expr[0]);
    operand = expr[1];
    right = Number(expr[2]);
    answer = 0;

    if (operand == "+"){
        answer = left + right;
    } else if (operand == "-"){
        answer = left - right;
    } else if (operand == "*"){
        answer = left * right;
    } else if (operand == "/"){
        answer = left / right;
    } else if (operand == "^"){
        answer = left**right
    }
    return answer;
}

console.log(implement("2^3"))