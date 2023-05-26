const text = "Hack"; // Replace with your desired text

const typingText = document.querySelector(".typing-text");

function type() {
  let index = -1;
  typingText.textContent = "";

  function addCharacter() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(addCharacter, 100);
    } else {
      setTimeout(type, 2000); // Delay before starting the typing animation again
    }
  }

  addCharacter();
}

type();