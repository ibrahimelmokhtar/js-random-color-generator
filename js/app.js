
// hex codes to be used:
const hexCharacterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// generated palette:
let generatedPalette = [];


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
        console.log(generatedPalette);
    }
};


// entry point:
document.addEventListener('DOMContentLoaded', () => {
    // spacebar event listener:
    document.addEventListener('keyup', generateColorPalette);
});
