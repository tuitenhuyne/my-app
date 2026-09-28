import { useEffect, useState } from "react"

export default function BaseEffectHook() {
    const [count, setCount] = useState(1)
    const [label, setLabel] = useState("Hello, guys!")

    // EffectHook
    // useEffect chỉ được gọi sau khi Component đã được render

    // Effect usages:
    // 1. useEffect(callback)
    // useEffect luôn luôn được gọi mỗi khi Componenent đượp render/re-render
    // useEffect(() => {
    //     console.log("useEffect (trường hợp chỉ có hàm callback) here!")
    // });

    // 2. useEffect(callback, [])
    // useEffect sẽ được gọi đúng 1 lần duy nhất sau khi Component render lần đầu tiên
    // useEffect(() => {
    //     console.log("useEffect (trường hợp có dependences là []) here!")
    // }, []);

    // 3. useEffect(callback, [dependences])
    useEffect(() => {
        console.log("useEffect (trường hợp có dependences cụ thể: [dependences] ) here!")
    }, [count]);


    return (
        <>
            {console.log("Component render here!")}
            <h1>Base EffectHook</h1>
            <h2>Counting: {count}</h2>
            <button onClick={() => setCount(count + 1)}>increase</button>

            <h2>Label: {label}</h2>
            <p>
                <input value={label} onChange={(e) => setLabel(e.target.value)} />
            </p>
        </>
    )
}