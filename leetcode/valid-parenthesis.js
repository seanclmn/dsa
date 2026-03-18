/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let open = ['(','{', '[' ]
    let closed = [')', '}', ']']

    let stack = {}
    let length = 0
    for(let i=0; i<s.length; i++) {
        if(open.includes(s[i])){
            stack[length]=s[i]
            length++
        }else{
            let correspondingChar = open[closed.indexOf(char)]
            if(stack[length-1]=== correspondingChar && length > 0){
                delete stack[length-1]
                length--
            }else 
            return false;
        }
    }
    return(length===0)
};
