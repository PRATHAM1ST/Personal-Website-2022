import { useEffect, useState } from "react";

export default function Gap({ current, type }) {
  const [gap, setGap] = useState(current);

  useEffect(()=>{
    document.documentElement.style.setProperty(type, gap);
  },[gap])

  return (
    <input
      type="text"
      value={gap}
      onChange={(e) => setGap(e.target.value)}
    />
  );
}
