// EXERCISE



// Setting value up to one
let randomNum = Math.random();
// Setting value up to 5 but not 5
randomNum *= 5;
// Setting value up to 6
randomNum++;
// setting the value
randomNum = Math.floor(randomNum)
console.log(randomNum);//1, 2, 3, 4, or 5 
// OR One line ^
// let randomNum = Math.floor(Math.random()* 5 + 1);

if (randomNum >= 4){
    console.log("greater then or equal to 4");
  }  else if (randomNum === 2 || randomNum === 3){
      console.log("equal to 2 or 3");
  } else{
      console.log("equal to one");
  }

if (randomNum !== 3){
    console.log("not equal to 3");
}

console.log(randomNum);
if (randomNum !== 3 & randomNum !== 5){
console.log("Not equal to 3 AND not equal 5");
}

if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 OR equal to 4");
  }