localStorage.setItem("Admin", "Master ~ Mohid");
console.warn("Admin: ", "Master ~ Mohid");
/*1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.*/
console.log("Q1");
function closureFunction(value1) {
  return function (value2) {
    const obj = {
      sum: value1 + value2,
      diff: value1 - value2,
      product: value1 * value2,
      division: (value1 / value2).toFixed(4),
    };
    console.log(obj.sum + " ", "Extra Calculations:", obj);
  };
}
const value1Func = closureFunction(5);
value1Func(5);
closureFunction(60)(-20);
// worked completed

/*2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.*/
console.log("Q2");
function searchInArrayThroughRecursion(array, searchValue) {
  const firstValue = array.shift() === searchValue;
  if (firstValue) {
    return true;
  }
  if (array.length === 0) {
    return false; // because nothing remain to search
  }
  return searchInArrayThroughRecursion(array, searchValue);
}
const demoArray1 = [1, 2, 42, 55, 678, 8, 9907, 6, 4, 3, 7];
const demoArray2 = ["", "adbulrehman", "zahid", true, 3, "mohid", ""];
console.log(searchInArrayThroughRecursion(demoArray1, 7));
console.log(searchInArrayThroughRecursion(demoArray2, "mohid"));
console.log(
  "False Condition: ",
  searchInArrayThroughRecursion(demoArray2, "mohid~1")
);
// worked completed

/*3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.*/
console.log("Q3");
function addParagraph(paraText) {
  const paragraph = "<p>" + paraText + "</p>";
  console.log("Here's your paragraph: ", paragraph);
  document.querySelector("body").innerHTML += paragraph;
}
addParagraph("Assalamualaikum");
// worked completed

/*4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.*/
console.log("Q4");
function addListItemInUnoderedList(listText) {
  listItemElement = document.createElement("li");
  listItemElement.innerText = listText;
  console.log("Here's your list item: ", listItemElement);
  document.querySelector(".unOrderedList").appendChild(listItemElement);
}
addListItemInUnoderedList(
  JSON.stringify({ id: 2, name: "item two", Q: "can i add object" })
);
addListItemInUnoderedList("3");
// worked completed

/*5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.*/
console.log("Q5");
function changeBackgroundColor(htmlElement, backgroundColor) {
  if (htmlElement.innerHTML) {
    return (htmlElement.style.backgroundColor = backgroundColor);
  } else if (document.querySelector(htmlElement)) {
    return (document.querySelector(htmlElement).style.backgroundColor =
      backgroundColor);
  } else if (document.querySelector("." + htmlElement)) {
    return (document.querySelector("." + htmlElement).style.backgroundColor =
      backgroundColor);
  } else if (document.querySelector("#" + htmlElement)) {
    return (document.querySelector("#" + htmlElement).style.backgroundColor =
      backgroundColor);
  }
}
const Answer5Output1 = changeBackgroundColor(
  document.querySelector("ul"),
  "#0BFFFD"
);
const Answer5Output2 = changeBackgroundColor("#liOne", "#A80BFF");
console.log(Answer5Output1, Answer5Output2);
// worked completed

/*6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.*/
console.log("Q6");
function storeInLocalStorage(key, object) {
  stringifyiedObject = JSON.stringify(object);
  localStorage.setItem(key, stringifyiedObject);
  return localStorage.getItem(key);
}
const demoObj1 = { Try: 1, objectType: "demo", worked: true };
const Answer6 = storeInLocalStorage("Test1", demoObj1);
console.log(Answer6);
// worked completed

/*7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.*/
console.log("Q7");
function retrievesFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
const Answer7 = retrievesFromLocalStorage("Test1");
console.log(Answer7);
// worked completed

/*8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.*/
console.log("Q8");
function storeAndRetrievesFromLocalStorage(object) {
  const newObject = {
    objectIssueTime:
      new Date().toDateString()
  };
  if (typeof object === "object") {
    keysArray = Object.keys(object);
    keysArray.forEach((key) => {
      localStorage.setItem(key, object[key]);
      newObject[key] = localStorage.getItem(key);
    });
    // keysArray.forEach((key) => {
    // });
    return newObject;
  }
}
const Answer8 = storeAndRetrievesFromLocalStorage(demoObj1);
console.log(Answer8);
// worked completed
