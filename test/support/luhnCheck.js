module.exports = function (number) {
  number = number.replace(/\D/g,"");
  var split = number.split("");
  split = split.map(num => parseInt(num));
  var check = split.pop();
  split.reverse();
  split = split.map(function(num, index){
    if(index%2 === 0) {
      num *= 2;
      if(num>9) {
        num -= 9;
      }
    }
    return num;
  });
  var sum = split.reduce((prev, curr) => prev + curr);
  return (sum%10 === check);
};
