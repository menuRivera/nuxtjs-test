import { usePokeStore } from "~~/stores/pokeStore"
import type { Pokemon } from 'stores/pokeStore'

interface PokeapiResponse {
    count: number,
    next: string,
    previous: string | null,
    results: Pokemon[]
}

export const usePokemons = () => {
    const { counter: page, increment: nextPage, decrement: prevPage } = useCounter()
    const pokeStore = usePokeStore()
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset='

    watchEffect(async () => {
        console.log('Watcher runs');

        const { data } = await useFetch(() => baseUrl + (page.value * 20))
        const res = (data.value) as PokeapiResponse

        pokeStore.setPokemons(res.results)
    })

    const currentPage = computed(() => page.value + 1)

    return {
        currentPage,
        nextPage,
        prevPage
    }
}