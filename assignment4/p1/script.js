// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    // Randomly pick an option from each array
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace the placeholders with new content
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        // Replace all instances of Bob with the custom name
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        // Converts US to UK metrics
        const weight = Math.round(300 / 14) + " stone";
        const temperature =  Math.round((94 - 32) * 5 / 9) + " centigrade";
        // Replaces them in story
        newStory = newStory.replaceAll("300 pounds", weight);
        newStory = newStory.replaceAll("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}