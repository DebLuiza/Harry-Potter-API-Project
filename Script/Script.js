
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar')
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {

    const searchName = e.target.value.toLowerCase();
    const filteredNames = hpCharacters.filter((character) => {
       return (character.name.toLowerCase().includes(searchName) ||
              character.house.toLowerCase().includes(searchName) ||
              character.species.toLowerCase().includes(searchName)
       )
    })
    displayCharacters(filteredNames)
})

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p class="species">⚡${character.species}</p>
                <p class="house">⭐${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `
        ;
        })
        .join('');
        characters.map((e) => {
            if(e.house == 'Gryffindor'){
               // console.log(e);
            }
        })
    charactersList.innerHTML = htmlString;
};

loadCharacters();