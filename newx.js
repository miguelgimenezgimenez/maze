function CorrectPath(str) {
  function Grid(width, height) {
    this.width = width;
    this.height = height;
    this.coord = [];
    for (var i=0;i<this.width;i++) {
      var inside = [];
      for (var j = 0; j < this.height; j++) {
        inside.push(false);
      }
      this.coord.push(inside);
    }
  }
  
  Grid.prototype.isInside = function (vector) {
    return vector.x < this.width && vector.y < this.height;
  };
  Grid.prototype.get = function (vector) {
    return this.coord[vector.x][vector.y];
  };
  
  
 function Vector(x, y) {
     this.x = x;
     this.y = y;
 }
  
  Vector.prototype.plus = function (other) {
   return new Vector(this.x + other.x,this.y + other.y);
  };
  
  var directions = {
    'u': new Vector(0,-1),
    'r': new Vector(1, 0),
    'd': new Vector(0,1),
    'l': new Vector(-1,0)
  };
  var grid = new Grid(5,5);
  
function Location() {
  this.pos = new Vector(0, 0);
}
  
  Location.prototype.move = function (vector) {
    this.pos= this.pos.plus(vector);
    
  };
  Location.prototype.getDirection = function (vector) {
    
  };

  var path = str.split('');
  for (var i = 0; i < path.length; i++) {
    var obj = path[i];
    
  }
  
  // code goes here
    return str;

}

// keep this function call here
console.log(CorrectPath(("???rrurdr?")));

















