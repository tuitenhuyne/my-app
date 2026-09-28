import ComponentY from "./ComponentY";

export default function ComponentX() {
    return (
        <div className="box child-component">
            <h1> Component X</h1>
            <ComponentY />
        </div>
    )
}