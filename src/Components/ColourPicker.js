import { useState } from "react";

export default function ColourPicker({ colour, title }){
    const [color, setColor] = useState(colour)

    return <input type="color" value={color} onChange={e => setColor(e.target.value)} title={title}/>
}