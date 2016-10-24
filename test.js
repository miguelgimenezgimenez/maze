function ArrayAdditionI(arr) { 
  arr.sort(function (a,b) {
    return a<b;
  });
  var target = arr.shift();
  var combinations=[];

for (var i = 0; i < arr.length; i++) {
var set=[];

	for (var k = 0; k < combinations.length; k++) {
    var insideSet=[];
    for (var z = 0; z < combinations[k].length; z++) {
            insideSet.push(combinations[k][z]);
    }
    insideSet.push(arr[i]);
    var sum = (insideSet.reduce(function (a, b) {
      return a + b;
    }));
    if (sum===target) {
      return true;
    }
    set.push(insideSet);

  }
  combinations=combinations.concat(set);

  combinations.push([arr[i]]);
}

  return false;
}
var myar =[3,5,-1,8,12];
// [9]
// [9][9,6],[6]
// [9][9,6],[6][9,6,5],[6,5]

// [ 9, 6, 5]
console.log(ArrayAdditionI(myar));