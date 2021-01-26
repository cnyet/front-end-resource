var arr = [1, 2, 3, 4, 5];
var result = arr.reduceRight(function(acc, val){
  return acc + val.toString()
})
console.log(result.split(''));