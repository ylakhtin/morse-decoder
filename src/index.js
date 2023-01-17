const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function splitInput() {
        let array = [];
        for (let i = 0; i < expr.length/10; i++) {
            array.push(expr.slice(i*10,(i+1)*10));
        }
        return array;
    }
    function bitToDashes(dec){
        let str = '';
        let array = [];
        dec.forEach(element => {
            str = '';
            for (let i = 0; i < element.length/2; i++){
                if ((element[i*2] === '1') && (element[i*2+1] === '0')) {
                    str = str + '.';
                }
                if ((element[i*2] === '1') && (element[i*2+1] === '1')) {
                    str = str + '-';
                }
            }
            array.push(str);
        });
        return array;
    }
    function dashesToLetters(dash){
        let array = [];
        dash.forEach(element => {
            array.push(MORSE_TABLE[element]);
        });
        return array;
    }
    const dec = splitInput(expr);
    const dash = bitToDashes(dec);
    const letters = dashesToLetters(dash);
    let result = '';
    letters.forEach(element => {
        if (element == undefined) {
            result = result + ' ';
        } else {
            result = result + element;
        }
    });
    return(result);
}

module.exports = {
    decode
}