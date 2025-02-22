function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true, 
        delay: 1, 
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0da3f0051b47b44c6b1o0t3aafd76c05"
    let context = "You are a intelligent Haiku poem expert. You are expected to generate a Haiku poem, of three lines and 17 syllables in HTML format with <br> to separate each line. Please follow the user topic. Do not include a poem title.";
    let prompt = `User instructions: Generate a Haiku poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> ⏰ Creating a Haiku about ${instructionsInput.value} </div>`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);