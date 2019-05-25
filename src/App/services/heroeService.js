import heroes from '../../assets/data/heroes'

export const heroeService = {
    getHeroes
}

function getHeroes() {
    return heroes;
}

export default heroeService;