'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 15 == 0) {
        return 'FizzBuzz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res = res * i;
    }
    return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
      sum = sum + i;
    }
    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    }
    return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    let t1 = rect1.top; let t2 = rect2.top;
    let l1 = rect1.left; let l2 = rect2.left;
    let w1 = rect1.width; let w2 = rect2.width;
    let h1 = rect1.height; let h2 = rect2.height;

    if ((t1 <= t2 && t2 <= t1 + h1) && (l1 <= l2 && l2 <= l1 + w1)) {
      return true;
    }

    if ((t2 <= t1 && t1 <= t2 + h2) && (l2 <= l1 && l1 <= l2 + w2)) {
      return true;
    }

    return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    if ( (Math.pow(circle.center.x - point.x, 2) + Math.pow(circle.center.y - point.y, 2)) < circle.radius*circle.radius ) {
        return true;
    }
  
    return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    if (a > b) {
        let t = a;
        a = b;
        b = t;
    }
    let result = `${a}, ${b}`;
    if (isStartIncluded) {
      result = '[' + result;
    } else {
      result = '(' + result;
    }

    if (isEndIncluded) {
      result = result + ']';
    } else {
      result = result + ')';
    }

    return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    return String(num).split("").reverse().join("");
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
   let purportedCC = String(ccn);
   let sum = Number.parseInt(purportedCC[purportedCC.length - 1]);
   let nDigits = purportedCC.length;
   let parity = nDigits % 2;

   for (let i = 0; i <= nDigits - 2; i++) {
     let digit = Number.parseInt(purportedCC[i]);
     if (i % 2 == parity) {
       digit = digit * 2;
     }
     if (digit > 9) {
       digit = digit - 9;
     }
     sum = sum + digit;
   }

   return sum % 10 == 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    return num - 9 * Number.parseInt(Math.floor((num-1)/9));
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    if (str === '') {
        return true;
    }
  
    let bracketsConstruction = str.split('');
  
    let arr = []; // queue
  
    for (let bracket of bracketsConstruction) {
        if (arr.length != 0) {
            let lastBracket = arr[arr.length-1];
            if (bracket === ')' && lastBracket === '(') {
                arr.pop(arr.length-1); // remove last bracket
            } else if (bracket === ']' && lastBracket === '['){
                arr.pop(arr.length-1);
            } else if (bracket === '}' && lastBracket === '{') {
                arr.pop(arr.length-1);
            } else if (bracket === '>' && lastBracket === '<') {
                arr.pop(arr.length-1);
            } else {
                arr.push(bracket);
            }
        } else {
          arr.push(bracket);
        }
      }
  
      return arr.length > 0 ? false : true;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let difference = endDate.getTime() - startDate.getTime(); // difference in dates in milliseconds

    let seconds = 1000.0;
    let minutes = 60.0 * seconds;
    let hours = 60.0 * minutes;
    let days = 24.0 * hours;
    let months = 30.0 * days;
    let years = 12.0 * months;

    if ((difference / seconds) <= 45) {
      return 'a few seconds ago';
    }
    if (difference / seconds > 45 && difference / seconds <= 90) {
      return 'a minute ago';
    }
    if (difference / seconds > 90 && difference / minutes <= 45) {
      return String(Math.round(((difference-1) / minutes))) + ' minutes ago';
    }
    if (difference / minutes > 45 && difference / minutes <= 90) {
      return 'an hour ago';
    }
    if (difference / minutes > 90 && difference / hours <= 22) {
      return String(Math.round((difference-1) / hours)) + ' hours ago';
    }
    if (difference / hours > 22 && difference / (hours) <= 36) {
      return 'a day ago';
    }
    if (difference / hours > 36 && difference / days <= 25) {
      return String(Math.round((difference-1) / days)) + ' days ago';
    }
    if (difference / days > 25 && difference / days <= 45) {
      return 'a month ago';
    }
    if (difference / days > 45 && difference / days <= 345) {
      return String(Math.round(difference / months)) + ' months ago';
    }
    if (difference / days > 345 && difference / days <= 545) {
      return 'a year ago';
    } else {
      return String(Math.round(difference / years)) + ' years ago';
    }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));
  const elAt = i => a => a[i];
  const rotate = a => a[0].map((e, i) => a.map(elAt(i)));
  const allElementsEqual = arr => arr.every(e => e == arr[0]);
  const commonPath = (input, sep = '/') => rotate(splitStrings(input, sep))
    .filter(allElementsEqual).map(elAt(0)).join(sep);

  const hasSlash = arr => arr.every(v => v[0] == "");
    
  let result = commonPath(pathes);
  if (result.length != 0) result = result + "/";
  if(hasSlash(splitStrings(pathes)) && result[0] != "/") result = "/" + result;
  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    var result = new Array(m1.length).fill(0).map(row => new Array(m2[0].length).fill(0));

    return result.map((row, i) => {
        return row.map((val, j) => {
            return m1[i].reduce((sum, elm, k) => sum + (elm*m2[k][j]) ,0)
        })
    });
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let result;

    if (position[0][0] == position[0][1] && position[0][1] == position[0][2]) result = position[0][0];
    if (position[1][0] == position[1][1] && position[1][1] == position[1][2]) result = position[1][0];
    if (position[2][0] == position[2][1] && position[2][1] == position[2][2]) result = position[2][0];

    if (position[0][0] == position[1][0] && position[1][0] == position[2][0]) result = position[1][0];
    if (position[0][1] == position[1][1] && position[1][1] == position[2][1]) result = position[0][1];
    if (position[0][2] == position[1][2] && position[1][2] == position[2][2]) result = position[0][2];

    if (position[0][0] == position[1][1] && position[1][1] == position[2][2]) result = position[0][0];
    if (position[0][2] == position[1][1] && position[1][1] == position[2][0]) result = position[0][2];

    return result;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
