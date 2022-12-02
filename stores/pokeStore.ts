import { defineStore } from 'pinia'

export interface Pokemon {
    url: string,
    name: string
}

interface State {
    pokemons: Pokemon[]
}

export const usePokeStore = defineStore('pokeStore', {
    state: (): State => {
        return {
            pokemons: []
        }
    },
    actions: {
        setPokemons(pokemons: Pokemon[]) {
            this.pokemons = pokemons
        }
    }
})