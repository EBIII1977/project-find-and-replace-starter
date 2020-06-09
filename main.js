const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
 }

// YOUR CODE GOES HERE
replaceAllButton.addEventListener('click', function() {
    let searchFor = findInput.value
    let replaceWith = replaceInput.value
    console.log(searchFor, replaceWith)
       
    for (let rowElementsIndex = 0; rowElementsIndex < rowElements.length; rowElementsIndex +=1){
        let insideArray = getCellElements(rowElementsIndex)
        console.log("Outter Array = ",  rowElementsIndex)
        console.log(insideArray)
        
        

//        for (let currentRowElementIndex=0; currentRowElementIndex < rowElements[rowElementsIndex].length; currentRowElementIndex +=1){

                let currentRowElement = currentRowElementIndex
                console.log (getCellElements(currentRowElement))
       
//         console.log("Inner Array = ", currentRowElementIndex);
        
         }
//     }
})
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
