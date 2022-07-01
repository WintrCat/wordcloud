// fuck off michael

/**
 * @type {HTMLTextAreaElement}
 */
let wordCloudHTML = document.querySelector("#wordCloudHTML");
let generateButton = document.querySelector("#generateButton");
let wordCloudArea = document.querySelector("#wordCloudArea");

generateButton.addEventListener("click", () => {

    wordCloudArea.innerHTML = wordCloudHTML.value.replaceAll("_", " ");

});