/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr){
  arr.push('Colin')
}

function addMeToStart(arr){
  arr.unshift('Colin')
}

function changeLast(arr, val){
  arr.pop()
  arr.push(val)
}

function changeAllValuesTo(arr, val){
  for (i=0; i<arr.length; i++){
    arr[i] = val
  }
}

function oddOrEven(arr){
  for (i=0; i<arr.length; i++){
    if (arr[i]%2===0){
      arr[i] = 'even'
    }
    else {
      arr[i] = 'odd'
    }
  }
}

function changeNextThreeToValue(index, arr, val){
  for (i=index; i<index+3; i++){
      arr[i] = val
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
