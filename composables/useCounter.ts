export const useCounter = (initialValue = 0) => {
    const counter = useState('counter', () => initialValue)

    const increment = (amount?: number) => {
        if (amount) {
            counter.value += amount
        } else {
            counter.value++
        }
    }

    const decrement = (amount?: number) => {
        if (counter.value === 0) return
        if (amount) {
            counter.value -= amount
        } else {
            counter.value--
        }
    }

    return {
        counter,
        increment,
        decrement
    }



}