/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} length
 * @return {String}
 */
module.exports = {
  randomStringGenerator: function(length){
    if( isInteger(length) && length > 0){
      var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result; 
    }
    else return '0';
    
  },
  randomNumberGenerator: function(length){
    if( isInteger(length) && length > 0){
      var chars = '0123456789';
      var charsFirstDigit = '123456789';
      var result = '';
      for (var i = length; i > 0; --i) {
        if(i != 1) result += chars[Math.floor(Math.random() * chars.length)];
        else result += charsFirstDigit[Math.floor(Math.random() * charsFirstDigit.length)];
      }
      return result; 
    }
    else return '0';
  },
  randomWordGenerator: function(length){
    if( isInteger(length) && length > 0){
      var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var result = '';
      for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result; 
    }
    else return '0';
  }

};
function isInteger(number){
  return (number === parseInt(number, 10));
}


