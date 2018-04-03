var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  modified_array=[element,...array]
  return modified_array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  new_array = array.unshift(element)
  return new_array
}

function accessElementInArray(array, index){
  return array[index]
}
