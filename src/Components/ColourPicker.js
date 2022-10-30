import { useEffect, useState } from "react";

export default function ColourPicker({ colour, title }){
    const [color, setColor] = useState(colour)

    useEffect(()=>{
        document.documentElement.style.setProperty(title, color);
    },[color])

    return <input type="color" value={color} onChange={e => setColor(e.target.value)} title={title}/>
}