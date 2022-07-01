// fuck off michael

/**
 * @type {HTMLTextAreaElement}
 */
let wordCloudHTML = document.querySelector("#wordCloudHTML");
let generateButton = document.querySelector("#generateButton");
let wordCloudArea = document.querySelector("#wordCloudArea");

generateButton.addEventListener("click", () => {

    let data = JSON.parse(wordCloudHTML.value);

    wordCloudArea.innerHTML = data.html;

    wordCloudArea.querySelectorAll("text").forEach(element => {
        element.innerHTML = data.map[element.innerHTML];
    });

});
