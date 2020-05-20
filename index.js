function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let string = `Wake ${dogName} the ${dogBreed}`;
  return string;
}
function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  let string = `Leash ${dogName} the ${dogBreed}`;
  return string;
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  let string = `Walk to the park ${dogName} the ${dogBreed}`;
  return string;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
  let string = `Throw the fribsee for ${dogName} the ${dogBreed}`;
  return string;
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  let string = `Walk home with ${dogName} the ${dogBreed}`;
  return string;
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  let string = `Unleash ${dogName} the ${dogBreed}`;
  return string;
}
 let routine =[wakeDog,leashDog, walkToPark, throwFrisbee
, walkHome, unleashDog];
console.log(routine.length);
let arr=[];
function exerciseDog(dogName, dogBreed){
  console.log(routine.length);
  for(let i = 0 ;i < routine.length; i++ ){
    arr+= routine[i](dogName, dogBreed)
  }
    return arr;
}
exerciseDog("")