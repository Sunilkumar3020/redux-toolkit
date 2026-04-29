import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice"

export default function Counter() {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()


    // handleIncrement
    const handleIncrement = e => {
        dispatch(increment())
    }

    // handleDecrement
    const handleDecrement = e => {
        dispatch(decrement())
    }
    // handleIncrementByAmount
    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(10))
    }
    return (
        <>
            <h2>{count.value}</h2>
            <button onClick={handleIncrement} >Increment +</button>
            <button onClick={handleDecrement}>Decrement -</button>
            <button onClick={handleIncrementByAmount}>Increment by Amount</button>
        </>
    )
}