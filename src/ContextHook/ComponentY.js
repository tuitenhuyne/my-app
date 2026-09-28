import { useContext } from "react"
import { book2Context } from "./ComponentA"

export default function ComponentY() {
    const book = useContext(book2Context)

    return (
        <div className="box">
            <h1> Component Y</h1>
            Book: {book}
        </div>
    )
}