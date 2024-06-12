let myArr = [1, "Ismail", 3232]
// adding and removing items fro the array
myArr.pop(1)
// console.log(myArr[0]);
const marvel = ["ironman", "Hulk", "thor"]
const dc = ["batman", "superman", "flash"]
// marvel.push(dc);
// console.log(marvel)
/* in above code we added two arrays in one, but the this is not a right practice to add two arrays,
 because it adds second array as an element and if you need access any items it'll require two steps, 
 which is not optimize as shown below. */
//  console.log(marvel[3][0]); 
/* In the above out put, it took this way to get the batman name, which is not a good practice, below is the right way to do it
which we use spread method. */
const all_heros = [...marvel, ...dc]
console.log(all_heros);
//  by above code you added two arrays in a right way and practice this only.



