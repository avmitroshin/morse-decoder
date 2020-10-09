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
    const MOD_MORSE_TABLE = (() => {
      let mt = {};
      for (let key in MORSE_TABLE) {
        let modKey = key.replace(/\./g,"10").replace(/-/g,"11");
        modKey = ("0000000000" + modKey).slice(-10);
        mt[modKey] = MORSE_TABLE[key];
      }
      mt["**********"] = " ";
      return mt;
    })();
  
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
      result += MOD_MORSE_TABLE[expr.substr(i, 10)];
    }
  
    return result;
  }

module.exports = {
    decode
}