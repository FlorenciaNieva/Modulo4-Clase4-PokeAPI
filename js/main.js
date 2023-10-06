const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const cardPokemon = ({name, sprites, types, id} = data) => {
    let newCard = document.createElement("div");
    newCard.id = id;
    newCard.classList.add("card", "col-3", "m-1");
    newCard.style.width = "13rem";
    newCard.innerHTML = `<img src="${sprites.front_default}" class="card-img-top" alt="pokemon">
        <div class="card-body">
            <h5 class="card-title text-center">${name.toUpperCase()}</h5>
            <div class="d-flex justify-content-around">${getTypes(types).split(', ').map(type => `<div class="type-container">${type}</div>`).join(' ')}</div>
        </div>`;
    
    newCard.addEventListener("mouseover", () => {
        newCard.querySelector('.card-img-top').setAttribute("src", sprites.back_default);
    });
    
    newCard.addEventListener("mouseout", () => {
        newCard.querySelector('.card-img-top').setAttribute("src", sprites.front_default);
    });
    $('#cards').appendChild(newCard);
};


const getTypes = (types) => {
    let tipos = [];
    types.forEach((tipo) => {
        tipos.push(tipo.type.name);
    });
    return tipos.join(', ')
}
