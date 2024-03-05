document.addEventListener("DOMContentLoaded", function () {
    var dynamicText = document.getElementById("dynamic-text");
    var texts = ["Recognition Software..", "Speech Recognition Application.."]; // Array of texts for transition
    var currentIndex = 0; // Index of the current text
    var currentText = texts[currentIndex];
    var charIndex = 0; // Index of the current character

    var interval = setInterval(function () {
        if (charIndex < currentText.length) {
            dynamicText.textContent += currentText[charIndex];
            charIndex++;
        } else {
            clearInterval(interval); // Stop the interval if all characters are displayed
            setTimeout(function () {
                eraseText();
            }, 1000); // Wait for 2 seconds before erasing the text
        }
    }, 100); // Change text every 100 milliseconds (adjust as needed)

    function eraseText() {
        var eraseInterval = setInterval(function () {
            var currentTextContent = dynamicText.textContent;
            if (currentTextContent.length > 0) {
                dynamicText.textContent = currentTextContent.slice(0, -1);
            } else {
                clearInterval(eraseInterval); // Stop the interval if all characters are erased
                currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
                currentText = texts[currentIndex];
                charIndex = 0; // Reset charIndex for the next text
                setTimeout(function () {
                    startTyping();
                }, 2000); // Wait for 2 seconds before starting to type the next text
            }
        }, 50); // Erase text every 50 milliseconds (adjust as needed)
    }

    function startTyping() {
        interval = setInterval(function () {
            if (charIndex < currentText.length) {
                dynamicText.textContent += currentText[charIndex];
                charIndex++;
            } else {
                clearInterval(interval); // Stop the interval if all characters are displayed
                setTimeout(function () {
                    eraseText();
                }, 2000); // Wait for 2 seconds before erasing the text
            }
        }, 50); // Change text every 100 milliseconds (adjust as needed)
    }
});

/*document.addEventListener("DOMContentLoaded", function () {
    var tryNowButton = document.getElementById("try-now-button");

    // Function to handle button click event
    tryNowButton.addEventListener("click", function () {
        // Open a pop-up window or perform any other action here
        alert("You clicked the 'TRY NOW' button! A pop-up window can be opened here.");
    });
});
-->*/
