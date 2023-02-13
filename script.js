var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Convert the alphabet string into an array of individual letters
alphabet = alphabet.split("");

// Get a reference to the "letters" element in the HTML document
const letterContainer = document.getElementById("letters");

// Loop over the letters in the alphabet array
for (let i = 0; i < alphabet.length; i++) {
  // Get the current letter from the alphabet array
  const letter = alphabet[i];
  
  // Create a new span element for the current letter
  const letterElement = document.createElement("span");
  
  // Set the innerHTML of the span element to the current letter
  letterElement.innerHTML = letter;
  
  // Set a unique ID for the span element
  letterElement.id = `letter-${i}`;
  
  // Add the span element to the letterContainer element
  letterContainer.appendChild(letterElement);
}
