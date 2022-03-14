
// hex codes to be used:
const hexCharacterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// generated palette:
let generatedPalette = [];

// obtain required DOM elements:
const displayedListObject = document.querySelector('#generated__list');
const copiedMessageObject = document.querySelector('#copied');


/**
 * @description Copy specific color code to clipboard.
 * @param {Event} event
 */
const copyToClipboard = (event) => {
    // check the clicked icon:
    if ((event.target.nodeName === 'I') && (event.target.classList.contains('fa-clone'))) {
        // obtain the color code text:
        const text = event.target.parentElement.querySelector('span').textContent;

        // copy text to clipboard:
        navigator.clipboard.writeText(text);

        // modify the displayed message style:
        copiedMessageObject.style.color = text;
        copiedMessageObject.style.bottom = '50%';

        // fade out the displayed message after specific time interval:
        setTimeout(() => {
            copiedMessageObject.style.bottom = '-100%';
        }, 2000);
    }
};


/**
 * @description Display the generated palette on the screen.
 */
const displayPalette = () => {
    // create virtual DOM element:
    const fragment = document.createDocumentFragment();

    // create the displayed <li> elements:
    for (let i=0; i<generatedPalette.length; i++) {
        // create required elements:
        const singleColorObject = document.createElement('li');
        singleColorObject.innerHTML = `
            <i class="far fa-clone" title="Copy to clipboard"></i>
            <span></span>`;

        // set the values to the current color value:
        singleColorObject.querySelector('span').textContent = generatedPalette[i];
        singleColorObject.style.color = generatedPalette[i];
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
    if (event.keyCode === 32 || event === 'null') {
        // reset the environment:
        generatedPalette = [];
        copiedMessageObject.style.bottom = '-100%';

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
    // generate initial color palette:
    generateColorPalette('null');

    // spacebar event listener:
    document.addEventListener('keyup', generateColorPalette);

    // copy to clipboard:
    displayedListObject.addEventListener('click', copyToClipboard);
});
