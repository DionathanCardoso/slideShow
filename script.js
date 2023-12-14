// Use strict;
// The images have addres of the image!
const images = [
    { 'id': '1', 'url': './img/cuteNoob2.png' },
    { 'id': '2', 'url': './img/cuteNoob3.png' },
    { 'id': '3', 'url': './img/cuteNoob4.png' },
    { 'id': '4', 'url': './img/cuteNoob5.png' },
    { 'id': '5', 'url': './img/cuteNoob6.png' },
    { 'id': '6', 'url': './img/cuteNoob7.png' },
    { 'id': '7', 'url': './img/cuteNoob8.png' },
    { 'id': '8', 'url': './img/cuteNoob9.png' },
    { 'id': '9', 'url': './img/cuteNoob10.png' },
    { 'id': '10', 'url': './img/cuteNoob11.png' },
    { 'id': '11', 'url': './img/cuteNoob12.png' },
    { 'id': '12', 'url': './img/cuteNoob13.png' },
    { 'id': '13', 'url': './img/cuteNoob14.png' },
    { 'id': '14', 'url': './img/cuteNoob15.png' },
    { 'id': '15', 'url': './img/cuteNoob16.png' },
    { 'id': '16', 'url': './img/cuteNoob17.png' },
    { 'id': '17', 'url': './img/cuteNoob18.png' },
    { 'id': '18', 'url': './img/cuteNoob19.png' },
    { 'id': '19', 'url': './img/cuteNoob20.png' },
    { 'id': '20', 'url': './img/cuteNoob21.png' },
    { 'id': '21', 'url': './img/cuteNoob22.png' },
    { 'id': '22', 'url': './img/cuteNoob23.png' },
    { 'id': '23', 'url': './img/cuteNoob24.png' },

]
//Com o DOM foi capiturado o elemento div container!
const containerItems = document.querySelector("#container-items");

//Função  para carregar as imagens no browser
const loadImages = (images, container) => {

    //Para cada imagem na lista terá uma ação.
    images.forEach((image) => {
        container.innerHTML +=
            `
            <div class="item">
                <img src= '${image.url}' >
            </div>`
    });
}
loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    //Esta ação vai tirar o primeiro elemento e colocalo na ultima possição.
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");    
}
const next = () => {
    // Esta ação vai tirar o último e colocar no primeiro.
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
    console.log(containerItems)
}

//Aqui pegamos o botão atraves do DOM.
let previousButton = document.querySelector("#previous");
let nextButton = document.querySelector("#next");

//Colocamosum evento click pelo addEventListener
previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);