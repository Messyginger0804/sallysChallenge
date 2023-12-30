const fruits = [
    { id: "elderberry", name: "Elderbarry", color: "#7d2163" },
    { id: "dragon-fruit", name: "Dragon Fruit", color: "#bc1516" },
    { id: "banana", name: "Bananana", color: "#f8d911" },
    { id: "fig", name: "Fig", color: "#9c6588" },
    { id: "grape", name: "Grape", color: "#b23a98" },
    { id: "jackfruit", name: "Jackfruit", color: "#668000" },
    { id: "indonesian-lime", name: "Indonesian Lime", color: "#85c03e" },
    { id: "clementine", name: "Clementine", color: "fe9146" },
    { id: "honeydew", name: "Honeydew", color: "#c8cf80" },
    { id: "apple", name: "Apple", color: "#bc1516" }
];


document.addEventListener("DOMContentLoaded", function () {
    const fruitsContainer = document.getElementById('fruits');

    fruits.forEach(fruit => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container-div');

        const fruitDiv = document.createElement('div');
        fruitDiv.classList.add('fruit-box');
        fruitDiv.style.backgroundColor = 'white';

        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');

        const fruitImage = document.createElement('img');
        fruitImage.classList.add('fruit-image');
        fruitImage.src = `img/${fruit.id}.png`;

        const fruitName = document.createElement('p');
        fruitName.textContent = fruit.name;

        if (fruit.name.toLowerCase().includes('fruit')) {
            fruitDiv.style.fontWeight = 'bold';
        }

        const shadowColor = fruit.color;
        fruitDiv.style.boxShadow = `0 0 5px 2px ${shadowColor}, 10px 10px 5px ${shadowColor}`;

        containerDiv.appendChild(fruitDiv);
        containerDiv.appendChild(overlayDiv);
        fruitDiv.appendChild(fruitImage);
        fruitDiv.appendChild(fruitName);
        fruitsContainer.appendChild(containerDiv);
    });
});


console.log(fruits);
