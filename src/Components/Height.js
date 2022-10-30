import { useState, useEffect } from "react";

export default function Height({ current, type }) {
  const [height, setHeight] = useState(current);

  useEffect(()=>{
    document.documentElement.style.setProperty(type, height);
  },[height])

  return (
    <input
      type="text"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
    />
  );
}
