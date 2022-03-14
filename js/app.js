
// hex codes to be used:
const hexCharacterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// generated palette:
let generatedPalette = [];


/**
 * @description Display the generated palette on the screen.
 */
const displayPalette = () => {
    // obtain required DOM elements:
    const displayedListObject = document.querySelector('#generated__list');

    // create virtual DOM element:
    const fragment = document.createDocumentFragment();

    // create the displayed <li> elements:
    for (let i=0; i<generatedPalette.length; i++) {
        // create required elements:
        const singleColorObject = document.createElement('li');
        const singleColorTextObject = document.createElement('span');
        singleColorObject.appendChild(singleColorTextObject);

        // set the values to the current color value:
        singleColorTextObject.textContent = generatedPalette[i];
        singleColorTextObject.style.color = generatedPalette[i];
        singleColorObject.style.backgroundColor = generatedPalette[i];

        // append the color to the virtual object:
        fragment.appendChild(singleColorObject);
    }

    // clear the displayed palette:
    displayedListObject.innerHTML = '';

    // append the vistual object to the actual palette list:
    displayedListObject.appendChild(fragment);
};


/**
 * @description Generate single/random color code in HEX format.
 * @returns {String} generated color code
 */
const generateSingleColor = () => {
    let generatedColor = '#';
    for (let i=0; i<6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacterArray.length);
        generatedColor += hexCharacterArray[randomIndex];
    }
    return generatedColor;
};


/**
 * @description Generate SIX random color codes when SPACEBAR is pressed.
 * @param {Event} event
 */
const generateColorPalette = (event) => {
    // spacebar is pressed:
    if (event.keyCode === 32) {
        // clear the generated palette:
        generatedPalette = [];

        // generate SIX random colors:
        for (let i=0; i<6; i++) {
            generatedPalette.push(generateSingleColor());
        }

        // display generated palette:
        displayPalette();
    }
};


// entry point:
document.addEventListener('DOMContentLoaded', () => {
    // spacebar event listener:
    document.addEventListener('keyup', generateColorPalette);
});
