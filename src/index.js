module.exports = function reverse (n) {
  
    var strN = Math.abs(n).toString();

    var reverseStrN = strN.split('').reverse().join('');

    return Number(reverseStrN);

}
