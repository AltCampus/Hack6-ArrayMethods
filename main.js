/**
 * 
 * @param {myMap} array 
 * @param {myMap} callback 
 */
function myMap1(array, callback){
  var arr = [];
  for(i=0; i < array.length; i++){
   console.log(array[i]);
 arr.push(callback(array[i])); 
 }
 return arr;
 }
 myMap1([1,2,3,4,5], n => n * 6)
 //[6, 12, 18, 24, 30]