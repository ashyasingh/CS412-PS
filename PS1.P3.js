// Problem Set 1 Problem 3
// Write a function that accepts two input parameters: a string, and a decorator function. The
// function should execute the passed decorator function on the passed string and return the
// result.
// Next, write two expressions that call this function. For the first, pass the string
// ‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
// containing fragments of the input string broken on the character ‘c’. For the input string
// ‘supercalifragilisticexpialidocious’, you should get
// [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
// This is actually a little tougher than it sounds…a hint would be to take a look at how bit/
// character stuffing is done in networking.
// For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
// function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
// contains the original string, the modified string, the total number of As in the modified string,
// and the overall length of the modified string:
// {
// 	 	 originalString: xxx,
// 	 	 modifiedString: xxx,
// 	 	 numberReplaced: xxx,
// 	 	 length:		 	 xxx,
// }
// Print the data from the returned object on the console (console.table would be good for this).

const unnamed = (str, func) => func(str)
const word = unnamed('supercalifragilisticexpialidocious', str => str.replace(/c/g, "*c").split('*'))

const object = str => {
    return {
        "originalString": str,
        "modifiedString": str.replace(/a/g, "A"),
        "numberReplaced": str.match(/a/g).length,
        "length": str.length
    }
}

console.log(word)
console.table(object('supercalifragilisticexpialidocious'))
