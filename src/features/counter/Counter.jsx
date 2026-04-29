import { useSelector } from "react-redux"

export default function Counter() {
    const count = useSelector((state) => state.counter)
    console.log(count)
    return (
        <>
            <h2>{ }</h2>
            <button>Increment +</button>
            <button>Decrement -</button>
        </>
    )
}