function solve (width, height) {
  if (Number.isInteger(width/height) || Number.isInteger(height/width)) {
    if (width > height) {
      return height;
    }
    else {
      return width;
    }
  }
  else {
    if (width > height){
      width = width-height*Math.floor(width/height);
      return solve(width, height);
    }
    if (height > width) {
      height = height-width*Math.floor(height/width);
      return solve(width, height);
    }
  }
}
// первый аргумент - width, второй аргумент - height
// result - наибольшая возможная сторона квадратов, для того чтобы замостить этот участок
console.log("result: " + solve(1920, 1080));
