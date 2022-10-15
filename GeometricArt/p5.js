let c1, c2, c3, c4;

function setup() {
  createCanvas(600, 400);
  
  c1 = color(219,190,161);
  c2 = color(163,123,115);
  c3 = color(62,40,43);
  c4 = color(211,79,115);
  
  for( let i = 0; i <=windowWidth - 50; i += 100) {
    for( let j = 0; j <=windowHeight - 50; j += 100) {      
      rnum =  random([0, 1, 2, 3])
      if (rnum == 0) {
        drawRight(i, j);
      } else if (rnum == 1){
        drawTop(i, j);
      } else if (rnum == 2){
        drawLeft(i, j);
      } else if (rnum == 3){
        drawBottom(i, j);
      }
    }
  } 
}

function drawRight(xlocation, ylocation){  
  arr = [c1, c2, c3, c4];
  rnum1 =  random([0, 1, 2, 3])
  rnum2 =  random([0, 1, 2])
  rnum3 =  random([0, 1])
  console.log(rnum1, rnum2, rnum3)
  
  fill(arr[rnum1]);
  arr.splice(rnum1, 1);
  stroke(0, 0);
  square(xlocation, ylocation, 100)
  
  fill(arr[rnum2]);
  arr.splice(rnum2, 1);
  stroke(0, 0);
  arc(xlocation+100, ylocation, 200, 200, HALF_PI, PI);
  
  fill(arr[rnum3]);
  arr.splice(rnum3, 1);
  stroke(0, 0);
  arc(xlocation+100, ylocation+50, 100, 100, HALF_PI, -HALF_PI);
}


function drawTop(xlocation, ylocation){ 
  arr = [c1, c2, c3, c4];
  rnum1 =  random([0, 1, 2, 3])
  rnum2 =  random([0, 1, 2])
  rnum3 =  random([0, 1])
  console.log(rnum1, rnum2, rnum3)
  
  fill(arr[rnum1]);
  arr.splice(rnum1, 1);
  stroke(0, 0);
  square(xlocation, ylocation, 100)
  
  fill(arr[rnum2]);
  arr.splice(rnum2, 1);
  stroke(0, 0);
  arc(xlocation, ylocation, 200, 200, 0, HALF_PI);
  
  fill(arr[rnum3]);
  arr.splice(rnum3, 1);
  stroke(0, 0);
  arc(xlocation + 50, ylocation, 100, 100, 0, PI);
}


function drawLeft(xlocation, ylocation){
  arr = [c1, c2, c3, c4];
  rnum1 =  random([0, 1, 2, 3])
  rnum2 =  random([0, 1, 2])
  rnum3 =  random([0, 1])
  console.log(rnum1, rnum2, rnum3)
  
  fill(arr[rnum1]);
  arr.splice(rnum1, 1);
  stroke(0, 0);
  square(xlocation, ylocation, 100)
  
  fill(arr[rnum2]);
  arr.splice(rnum2, 1);
  stroke(0, 0);
  arc(xlocation, ylocation + 100, 200, 200, -HALF_PI, 0);
  
  fill(arr[rnum3]);
  arr.splice(rnum3, 1);
  stroke(0, 0);
  arc(xlocation, ylocation + 50, 100, 100, -HALF_PI, HALF_PI);
}


function drawBottom(xlocation, ylocation){
  arr = [c1, c2, c3, c4];
  rnum1 =  random([0, 1, 2, 3])
  rnum2 =  random([0, 1, 2])
  rnum3 =  random([0, 1])
  console.log(rnum1, rnum2, rnum3)
  
  fill(arr[rnum1]);
  arr.splice(rnum1, 1);
  stroke(0, 0);
  square(xlocation, ylocation, 100)
  
  fill(arr[rnum2]);
  arr.splice(rnum2, 1);
  stroke(0, 0);
  arc(xlocation + 100, ylocation+100, 200, 200, -PI, -HALF_PI);
  
  fill(arr[rnum3]);
  arr.splice(rnum3, 1);
  stroke(0, 0);
  arc(xlocation + 50, ylocation+100, 100, 100, PI, 0);
}
