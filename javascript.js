let toPascal = document.getElementById("input");
let pressPascal = document.getElementById("convertPascal");
let pressLower = document.getElementById("convertLower");
let pressUpper = document.getElementById("convertUpper");
let ms = document.getElementById("message");

// Convert to Pascal Case
function toPascalCase(){
  if (toPascal.value.trim() === "") {
    ms.innerHTML = "Enter some Text";
  } else {
    toPascal.value = toPascal.value
      .split(" ")
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
}

// Convert to Lowercase
function toLowerCase(){
  if (toPascal.value.trim() === "") {
    ms.innerHTML = "Enter some Text";
  } else {
    toPascal.value = toPascal.value.toLowerCase();
  }
}

// Convert to Uppercase
function toUpperCase(){
  if (toPascal.value.trim() === "") {
    ms.innerHTML = "Enter some Text";
  } else {
    toPascal.value = toPascal.value.toUpperCase();
  }
}

// Event listeners for buttons
pressPascal.addEventListener("click", toPascalCase);
pressLower.addEventListener("click", toLowerCase);
pressUpper.addEventListener("click", toUpperCase);
