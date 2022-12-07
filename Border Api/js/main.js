const url = "https://dog.ceo/api/breeds/image/random";
const $box = document.querySelector(".box");
const $img = document.querySelector(".img");

fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))


    function arrImg(arr) {
        let html = `
        <img class="img" src="${arr.message}">
    `
    $box.append($img)
    console.log(html);
    }